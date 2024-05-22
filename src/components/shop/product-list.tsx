import stripe from "@/lib/stripe";
import { ProductsData } from "@/types";
import Stripe from "stripe";
import { CartProducts } from "../cart/cart-products";

async function getProducts() {
  try {
    const stripeProducts = await stripe.products.list({
      limit: 9,
      expand: ["data.default_price"],
    });
    return stripeProducts.data.map((product: Stripe.Product): ProductsData => {
      return {
        id: product.id.toString(),
        name: product.name,
        description: product.description ?? "",
        price:
          (product.default_price as Stripe.Price)?.unit_amount_decimal ?? "0",
        currency: (product.default_price as Stripe.Price)?.currency ?? "BRL",
        images: product.images,
        image: product.images[0],
      };
    });
  } catch (error) {
    console.log(error);
  }
}

export async function ProductList() {
  const products = await getProducts();

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 items-center justify-center gap-12 p-2">
      {products?.map((product) => (
        <CartProducts key={product.id} {...product} />
      ))}
    </section>
  );
}
