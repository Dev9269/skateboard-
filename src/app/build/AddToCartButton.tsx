"use client";

import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa6";
import { asImageSrc } from "@prismicio/client";
import { useCart } from "@/context/CartContext";
import { useCustomizerControls } from "./context";

export function AddToCartButton() {
  const router = useRouter();
  const { addItem } = useCart();
  const { selectedWheel, selectedDeck, selectedTruck, selectedBolt } =
    useCustomizerControls();

  function handleAdd() {
    const id = [
      selectedDeck?.uid ?? "default",
      selectedWheel?.uid ?? "default",
      selectedTruck?.uid ?? "default",
      selectedBolt?.uid ?? "default",
    ].join("-");

    const deckURL = selectedDeck ? asImageSrc(selectedDeck.texture) : undefined;
    const wheelURL = selectedWheel ? asImageSrc(selectedWheel.texture) : undefined;

    addItem({
      id,
      deckTextureURL: deckURL ?? undefined,
      wheelTextureURL: wheelURL ?? undefined,
      truckColor: selectedTruck?.uid ?? undefined,
      boltColor: selectedBolt?.uid ?? undefined,
    });

    router.push("/cart");
  }

  return (
    <button
      onClick={handleAdd}
      className="button-cutout group mx-4 inline-flex items-center gap-3 bg-gradient-to-b from-brand-lime to-brand-orange from-25% to-75% bg-[length:100%_400%] px-1 py-3 text-lg font-bold text-black transition-[filter,background-position] duration-300 hover:bg-bottom ~py-2.5/3"
    >
      <div className="flex size-6 items-center justify-center transition-transform group-hover:-rotate-[25deg]">
        <FaPlus className="size-full" />
      </div>
      <div className="w-px self-stretch bg-black/25" />
      Add to cart
    </button>
  );
}
