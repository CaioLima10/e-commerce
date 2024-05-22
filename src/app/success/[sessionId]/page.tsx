"use client";

import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { FaCheck } from "react-icons/fa6";

interface SucessParams {
  params: {
    sessionId: string;
  };
}

export default function Success({ params }: SucessParams) {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
  });

  return (
    <section className="w-full max-w-6xl flex items-center justify-center mx-auto mt-10">
      <div className="flex items-center gap-2">
        <h1 className=" font-bold text-xl">Pedido enviado com sucesso</h1>
        <FaCheck size={32} className="text-green-500" />
      </div>
    </section>
  );
}
