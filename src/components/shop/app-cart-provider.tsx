"use client";

import { ReactNode } from "react";

import { CartProvider } from "use-shopping-cart";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLICSHABLE_KEY!;

export default function AppCartProvider({ children }: { children: ReactNode }) {
  return (
    <CartProvider
      shouldPersist={true}
      cartMode="checkout-session"
      stripe={stripeKey}
      currency="BRL"
    >
      {children}
    </CartProvider>
  );
}
