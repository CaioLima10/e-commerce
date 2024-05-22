"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";

interface CartProductsProps {
  id: string;
  name: string;
  description?: string;
  price: string | number;
  currency: string;
  image: string;
  images?: string[];
}

export function CartProducts({
  id,
  currency,
  image,
  name,
  price,
  description,
  images,
}: CartProductsProps) {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();

  const formatedPrice = formatCurrencyString({
    value: Number(price),
    currency,
    language: "pt-BR",
  });

  const addToCart = async () => {
    addItem({
      id,
      name,
      price: Number(price),
      currency,
      image,
      description,
    });

    toast({
      title: `Produto ${name} Adicionado!`,
      description: `preço - ${formatedPrice}`,
    });
  };

  return (
    <Card className="min-h-96 min-w-80 sm:w-[60%] mx-auto bg-zinc-50 border border-zinc-200 shadow-md">
      <CardContent className="flex flex-col items-center justify-center p-2">
        <div className="relative w-60 h-52 object-cover">
          <Image
            className=" rounded-r-md rounded-l-md rounded-b-none "
            fill
            priority
            objectFit="contain"
            src={(image && image) || ""}
            alt={name}
          />
        </div>
        <span className="text-green-500 font-bold text-base mt-2">{name}</span>
        <div className="w-[80%] flex items-center justify-center my-4">
          <p className="text-sm text-zinc-800 text-ellipsis line-clamp-2">
            {description}
          </p>
        </div>
        <CardFooter className="w-full flex gap-3">
          <Button
            onClick={addToCart}
            className=" flex items-center justify-center relative"
          >
            Confirmar
          </Button>

          <p className="flex flex-1 shadow-md bg-white py-1.5 sm:w-full items-center justify-center text-xs">
            <span className="font-bold text-xl text-green-500">
              {formatedPrice}
            </span>
          </p>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
