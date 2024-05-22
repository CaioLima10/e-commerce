import stripe from "@/lib/stripe";
import { DummyProducts } from "@/types";

async function getDummyProducts() {
  const response = await fetch("https://dummyjson.com/products?limit=9");
  const dummyData = await response.json();
  const products = dummyData.products.map((product: DummyProducts) => {
    return {
      id: product.id,
      description: product.description,
      name: product.title,
      images: product.images,
      default_price_data: {
        unit_amount_decimal: product.price,
        currency: "BRL",
      },
    };
  });
  return products;
}

async function seedDummyData() {
  const products = await getDummyProducts();
  await products.map(async (product: any) => {
    try {
      const productCreated = await stripe.products.create(product);

      console.log(productCreated);
    } catch (error) {
      console.log(error);
    }
  });
}

export default async function Seed() {
  await seedDummyData();

  return <section></section>;
}
