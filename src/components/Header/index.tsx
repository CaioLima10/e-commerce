import { CiShop } from "react-icons/ci";

import Link from "next/link";
import { CartButton } from "./cart-button";

export function Header() {
  return (
    <header className="min-w-full h-14 flex items-center justify-center  bg-zinc-950">
      <div className="w-[90%] xl:w-full max-w-6xl flex items-center justify-between">
        <div>
          <Link href={"/"} className="hover:tracking-wide duration-300">
            <h1 className="text-green-500 hidden sm:flex items-center justify-center font-bold text-xl">
              <CiShop size={26} className="text-green-500" />
              Market cell
            </h1>
            <CiShop size={32} className="text-green-500 flex sm:hidden" />
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <CartButton />
        </div>
      </div>
    </header>
  );
}
