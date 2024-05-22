"use client";

import { FaCartShopping } from "react-icons/fa6";

import { Button } from "../ui/button";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

export function CartButton() {
  const { cartCount } = useShoppingCart();

  return (
    <div className="relative">
      <Button className="flex items-center gap-2">
        <Link href="/cart">
          <FaCartShopping size={22} className="text-green-500" />
        </Link>
      </Button>
      <span
        className="absolute flex items-center justify-center bg-green-500 
        w-8 h-8 rounded-full text-zinc-50 -top-2 -right-4"
      >
        {cartCount}
      </span>
    </div>
  );
}
