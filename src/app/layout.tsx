import type { Metadata } from "next";
import React from "react";

import { Oxygen } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import AppCartProvider from "@/components/shop/app-cart-provider";
import { Toaster } from "@/components/ui/toaster";

const oxygen = Oxygen({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Os melhores produtos",
  description: "Compre seu eletronico na Market cell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          oxygen.className,
          "min-h-screen flex flex-col bg-zinc-100"
        )}
      >
        <AppCartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Toaster />
        </AppCartProvider>
      </body>
    </html>
  );
}
