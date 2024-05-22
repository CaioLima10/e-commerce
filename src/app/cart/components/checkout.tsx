"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

export function Checkout() {
  const { formattedTotalPrice, cartCount, cartDetails, redirectToCheckout } =
    useShoppingCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  async function handlecheckout() {
    setIsCheckingOut(true);
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    });

    const { id } = await response.json();

    await redirectToCheckout(id);
    setIsCheckingOut(false);
  }

  return (
    <section className="mb-10 lg:mt-[70px]">
      {cartDetails && Object.keys(cartDetails).length === 0 ? (
        ""
      ) : (
        <Card className="w-[90%] lg:w-96 flex flex-col mx-auto lg:m-0 shadow-md ">
          <CardContent className="flex flex-col mt-2">
            <p className=" text-green-500 font-bold text-base">
              <span className="text-zinc-800 font-bold text-xs">
                Valor total do pedido:{" "}
              </span>
              {formattedTotalPrice}
            </p>
            <span className=" text-zinc-800 font-bold text-xs">
              Total de produtos: {cartCount}
            </span>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button onClick={handlecheckout} className="w-full mb-2">
              {isCheckingOut ? "Finalizando..." : "Finalizar"}
            </Button>
            <p className="text-end text-zinc-800 font-bold text-xs">
              Finalize sua comprar e ganhe premios e descontos
            </p>
          </CardFooter>
        </Card>
      )}
    </section>
  );
}
