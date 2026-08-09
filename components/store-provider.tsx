"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/catalog";

export type CartItem = {
  id: string;
  slug: string;
  name: string;
  shape: Product["shape"];
  palette: Product["palette"];
  size: string;
  colour: string;
  colourHex: string;
  price: number;
  quantity: number;
};

type AddItemOptions = {
  size?: string;
  colour?: string;
  quantity?: number;
  openDrawer?: boolean;
};

type StoreContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  addItem: (product: Product, options?: AddItemOptions) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const syncSavedCart = () => {
      try {
        const saved = window.localStorage.getItem("terra-cart");
        if (saved) setItems(JSON.parse(saved) as CartItem[]);
      } catch {
        window.localStorage.removeItem("terra-cart");
      } finally {
        setHydrated(true);
      }
    };
    const timer = window.setTimeout(syncSavedCart, 0);
    window.addEventListener("storage", syncSavedCart);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("storage", syncSavedCart);
    };
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem("terra-cart", JSON.stringify(items));
  }, [items, hydrated]);

  function addItem(product: Product, options: AddItemOptions = {}) {
    const size = product.sizes.find((entry) => entry.label === options.size) ?? product.sizes[0];
    const colour = product.colours.find((entry) => entry.name === options.colour) ?? product.colours[0];
    const id = `${product.slug}-${size.label}-${colour.name}`;
    const quantity = options.quantity ?? 1;

    setItems((current) => {
      const existing = current.find((item) => item.id === id);
      if (existing) {
        return current.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item,
        );
      }
      return [
        ...current,
        {
          id,
          slug: product.slug,
          name: product.name,
          shape: product.shape,
          palette: product.palette,
          size: size.label,
          colour: colour.name,
          colourHex: colour.hex,
          price: size.price,
          quantity,
        },
      ];
    });

    if (options.openDrawer !== false) setDrawerOpen(true);
  }

  function updateQuantity(id: string, quantity: number) {
    if (quantity <= 0) {
      setItems((current) => current.filter((item) => item.id !== id));
      return;
    }
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  }

  function removeItem(id: string) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  const value = useMemo(
    () => ({
      items,
      itemCount: items.reduce((total, item) => total + item.quantity, 0),
      subtotal: items.reduce((total, item) => total + item.price * item.quantity, 0),
      drawerOpen,
      setDrawerOpen,
      addItem,
      updateQuantity,
      removeItem,
      clearCart: () => setItems([]),
    }),
    [items, drawerOpen],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within StoreProvider");
  return context;
}
