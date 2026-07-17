"use client";

import Link from "next/link";
import { FaTrash, FaMinus, FaPlus, FaArrowLeft } from "react-icons/fa6";
import { useCart } from "@/context/CartContext";
import { Heading } from "@/components/Heading";
import { ButtonLink } from "@/components/ButtonLink";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-texture bg-brand-gray px-4 pt-32">
        <Heading as="h1" size="lg" className="text-center">
          Your cart is empty
        </Heading>
        <p className="max-w-md text-center ~text-lg/xl">
          Looks like you haven&apos;t added anything yet. Build your custom board or
          browse our collection.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <ButtonLink href="/build" color="lime" icon="plus">
            Build a board
          </ButtonLink>
          <ButtonLink href="/" color="orange">
            Browse products
          </ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-texture bg-brand-gray pt-32">
      <div className="mx-auto max-w-6xl ~px-4/6 ~py-8/12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Heading as="h1" size="md">
            Cart ({totalItems})
          </Heading>
          <button
            onClick={clearCart}
            className="font-mono text-sm text-zinc-500 underline hover:text-zinc-800 ~text-sm/base"
          >
            Clear all
          </button>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-1 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded border-2 border-zinc-200 bg-white ~p-3/5"
              >
                <div className="flex aspect-square w-20 shrink-0 items-center justify-center rounded bg-zinc-100 md:w-28">
                  <span className="font-sans text-2xl text-zinc-400">🛹</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-sans font-bold ~text-lg/xl">
                    Custom Board
                  </h3>
                  <p className="text-sm text-zinc-500">
                    {item.deckTextureURL ? "Custom deck" : "Default deck"} ·{" "}
                    {item.truckColor ?? "Default"} trucks ·{" "}
                    {item.boltColor ?? "Default"} bolts
                  </p>
                  <p className="mt-1 font-bold ~text-base/lg">$89.99</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity - 1)
                    }
                    className="flex size-8 items-center justify-center rounded border border-zinc-300 transition-colors hover:bg-zinc-100"
                    aria-label="Decrease quantity"
                  >
                    <FaMinus className="size-3" />
                  </button>
                  <span className="w-8 text-center font-bold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                    }
                    className="flex size-8 items-center justify-center rounded border border-zinc-300 transition-colors hover:bg-zinc-100"
                    aria-label="Increase quantity"
                  >
                    <FaPlus className="size-3" />
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-2 flex size-8 items-center justify-center rounded text-red-500 transition-colors hover:bg-red-50"
                    aria-label="Remove item"
                  >
                    <FaTrash className="size-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="h-fit w-full rounded border-2 border-zinc-200 bg-white p-6 lg:w-80">
            <Heading as="h2" size="sm" className="mb-4">
              Order Summary
            </Heading>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal ({totalItems} items)</span>
                <span>${(89.99 * totalItems).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <hr className="border-zinc-200" />
              <div className="flex justify-between font-bold ~text-base/lg">
                <span>Total</span>
                <span>${(89.99 * totalItems).toFixed(2)}</span>
              </div>
            </div>
            <button className="button-cutout mt-6 w-full bg-gradient-to-b from-brand-lime to-brand-orange from-25% to-75% bg-[length:100%_400%] py-3 font-bold text-black transition-[filter,background-position] duration-300 hover:bg-bottom">
              Checkout
            </button>
            <Link
              href="/build"
              className="mt-4 flex items-center justify-center gap-2 text-center text-sm text-zinc-500 hover:text-zinc-800"
            >
              <FaArrowLeft className="size-3" />
              Continue building
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
