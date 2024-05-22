import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Seu Carrinho de compras",
  description: " Market cell",
};

export default function CartLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
