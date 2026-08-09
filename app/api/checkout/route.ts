import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { products } from "@/lib/catalog";

export const dynamic = "force-dynamic";

type CartItem = {
  slug: string;
  size: string;
  colour: string;
  quantity: number;
};

export async function POST(request: NextRequest) {
  const { items } = (await request.json()) as { items: CartItem[] };

  if (!items?.length) {
    return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
  }

  const lineItems = items.map((item) => {
    const product = products.find((p) => p.slug === item.slug);
    if (!product) throw new Error(`Unknown product: ${item.slug}`);

    const size = product.sizes.find((s) => s.label === item.size) ?? product.sizes[0];

    return {
      price_data: {
        currency: "gbp",
        product_data: {
          name: product.name,
          description: `${item.size} · ${item.colour}`,
        },
        unit_amount: Math.round(size.price * 100),
      },
      quantity: item.quantity,
    };
  });

  const subtotal = lineItems.reduce(
    (sum, li) => sum + li.price_data.unit_amount * li.quantity,
    0,
  );

  const shippingOptions =
    subtotal >= 5000
      ? [
          {
            shipping_rate_data: {
              type: "fixed_amount" as const,
              fixed_amount: { amount: 0, currency: "gbp" },
              display_name: "Free UK delivery",
              delivery_estimate: {
                minimum: { unit: "business_day" as const, value: 5 },
                maximum: { unit: "business_day" as const, value: 8 },
              },
            },
          },
        ]
      : [
          {
            shipping_rate_data: {
              type: "fixed_amount" as const,
              fixed_amount: { amount: 495, currency: "gbp" },
              display_name: "Standard UK delivery",
              delivery_estimate: {
                minimum: { unit: "business_day" as const, value: 5 },
                maximum: { unit: "business_day" as const, value: 8 },
              },
            },
          },
        ];

  const session = await getStripe().checkout.sessions.create({
    ui_mode: "embedded",
    mode: "payment",
    line_items: lineItems,
    shipping_address_collection: { allowed_countries: ["GB"] },
    shipping_options: shippingOptions,
    allow_promotion_codes: true,
    return_url: `${request.nextUrl.origin}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
  });

  return NextResponse.json({ clientSecret: session.client_secret });
}
