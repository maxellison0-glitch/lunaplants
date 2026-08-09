import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import { AnnouncementBar } from "@/components/announcement-bar";
import { CartDrawer } from "@/components/cart-drawer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoreProvider } from "@/components/store-provider";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host")?.split(",")[0].trim() ?? requestHeaders.get("host") ?? "lunaplants.co.uk";
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto")?.split(",")[0].trim();
  const protocol = forwardedProtocol ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const socialImage = `${origin}/og.png`;

  return {
    metadataBase: new URL(origin),
    title: { default: "Terra — Rooted in Design", template: "%s | Terra" },
    description: "Modern 3D-printed pots, paired with characterful plants and made to order in the UK.",
    applicationName: "Terra",
    keywords: ["3D printed plant pots", "plant pots UK", "indoor plants with pots", "modern planters", "houseplants UK"],
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: "Terra",
      title: "Terra — Rooted in Design",
      description: "Living plants and sculptural 3D-printed pots, paired and made to order in the UK.",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Terra — plants paired with 3D-printed pots" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Terra — Rooted in Design",
      description: "Living plants and sculptural 3D-printed pots, paired and made to order in the UK.",
      images: [socialImage],
    },
    icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  };
}

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f3efe5" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className={`${geist.variable} antialiased`}>
        <StoreProvider>
          <AnnouncementBar />
          <SiteHeader />
          {children}
          <SiteFooter />
          <CartDrawer />
        </StoreProvider>
      </body>
    </html>
  );
}
