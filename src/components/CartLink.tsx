"use client";

import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "@/context/CartContext";

export function CartLink() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/cart"
      className="button-cutout group inline-flex items-center gap-3 bg-gradient-to-b from-brand-purple to-brand-lime from-25% to-75% bg-[length:100%_400%] px-1 py-2 text-lg font-bold text-white transition-[filter,background-position] duration-300 hover:bg-bottom hover:text-black ~py-2.5/3"
      aria-label={`Cart (${totalItems})`}
    >
      <div className="flex size-6 items-center justify-center transition-transform group-hover:-rotate-[25deg]">
        <FaCartShopping className="size-full" />
      </div>
      <div className="w-px self-stretch bg-white/25" />
      <span className="md:hidden">{totalItems}</span>
      <span className="hidden md:inline">Cart ({totalItems})</span>
    </Link>
  );
}
