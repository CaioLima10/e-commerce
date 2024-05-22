import { ProductList } from "@/components/shop/product-list";

export default function Home() {
  return (
    <section className="w-full min-h-screen bg-zinc-100 py-20">
      <div className="w-full max-w-6xl flex mx-auto items-center justify-center ">
        <ProductList />
      </div>
    </section>
  );
}
