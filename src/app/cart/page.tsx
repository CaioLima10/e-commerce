"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { Checkout } from "./components/checkout";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export default function Cart() {
  const { cartDetails, incrementItem, decrementItem, removeItem, clearCart } =
    useShoppingCart();

  return (
    <div className="mb-10 flex flex-col lg:flex-row gap-12 w-[90%] xl:w-full max-w-6xl mx-auto">
      <section className="flex flex-col ">
        <Button
          className="my-4 w-40 h-10 text-xs font-bold"
          onClick={clearCart}
        >
          Limpar todo o Carrinho
        </Button>
        <div className="flex flex-col gap-6  w-full ">
          {cartDetails && Object.keys(cartDetails).length === 0 && (
            <span>Nenhum Produto no Carrinho!</span>
          )}

          {cartDetails &&
            Object.keys(cartDetails).map((key) => (
              <Card
                className="mx-auto w-[90%] lg:m-0 lg:min-w-full min-h-60 p-5 shadow-md relative"
                key={cartDetails[key].id}
              >
                <Button
                  className="absolute -top-3 -right-3 w-8 h-8 rounded-full font-bold"
                  onClick={() => removeItem(cartDetails[key].id)}
                >
                  x
                </Button>
                <CardContent>
                  <div className="w-full flex-col sm:flex-row flex justify-between gap-4">
                    <div className="p-2">
                      <div className="relative w-full sm:w-60 h-52 object-cover">
                        <Image
                          className="hover:origin-bottom hover:-rotate-3 duration-300 rounded-r-md rounded-l-md rounded-b-none "
                          fill
                          priority
                          objectFit="contain"
                          src={
                            (cartDetails[key].image &&
                              cartDetails[key].image) ||
                            ""
                          }
                          alt={""}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col text-end ">
                      <h1 className="text-green-500 font-bold text-base">
                        {cartDetails[key].name}
                      </h1>
                      <p className="font-black text-2xl text-ellipsis line-clamp-2">
                        {cartDetails[key].description}
                      </p>
                      <h2 className="text-3xl font-bold text-green-500 my-4">
                        {cartDetails[key].formattedValue}
                      </h2>
                      <div className="w-full flex items-center justify-end gap-6">
                        <span className="text-xs font-bold">
                          Quant: {cartDetails[key].quantity}
                        </span>

                        <div className="flex gap-2 relative">
                          <Button
                            className="text-base font-bold flex items-center justify-center mx-auto"
                            onClick={() => incrementItem(cartDetails[key].id)}
                          >
                            <FaPlus />
                          </Button>
                          <span className="w-4 h-10 bg-zinc-900 absolute top-0 left-11" />
                          <Button
                            className="text-base font-bold flex items-center justify-center"
                            onClick={() => decrementItem(cartDetails[key].id)}
                          >
                            <FaMinus />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>
      <Checkout />
    </div>
  );
}
