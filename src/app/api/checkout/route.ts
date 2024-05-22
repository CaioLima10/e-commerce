import { NextResponse, NextRequest } from "next/server";

import stripe from "@/lib/stripe";
import Stripe from "stripe";

import { validateCartItems } from "use-shopping-cart/utilities";
import { Product } from "use-shopping-cart/core";

export async function POST(request: NextRequest) {
  const cartDatails = await request.json();
  const baseUrl = request.headers.get("origin");

  const stripeInvetory = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = stripeInvetory.data.map(
    (product: Stripe.Product): Product => {
      return {
        id: product.id.toString(),
        name: product.name,
        price: (product.default_price as Stripe.Price)?.unit_amount ?? 0,
        currency: (product.default_price as Stripe.Price)?.currency ?? "BRL",
        image: product.images[0],
      };
    }
  );

  const line_items = validateCartItems(products, cartDatails);

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: line_items,
    success_url: `${baseUrl}/success/{CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/cart`,
  });

  return NextResponse.json(session, { status: 200 });
}
