"use client";

import {
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiShoppingBag,
} from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProductActions = () => {
  // useRouter mengembalikan object, bukan array
  const router = useRouter(); 
  const [qty, setQty] = useState(1);

  const handleCheckout = () => {
    // Tambahkan logika simpan ke cart dulu jika perlu
    router.push("/checkout");
  };

  return (
    <div className="flex gap-5">
      {/* Selector Quantity */}
      <div className="border border-gray-500 inline-flex w-fit min-w-[80px]">
        <div className="aspect-square text-xl font-medium border-r border-gray-500 flex justify-center items-center px-4">
          <span>{qty}</span>
        </div>
        <div className="flex flex-col">
          <button 
            onClick={() => setQty(qty + 1)}
            className="border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex items-center justify-center"
          >
            <FiChevronUp />
          </button>
          <button 
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="cursor-pointer h-1/2 aspect-square flex items-center justify-center"
          >
            <FiChevronDown />
          </button>
        </div>
      </div>

      {/* Button Add to Cart */}
      <Button className="px-20 w-full flex items-center justify-center gap-2">
        <FiShoppingBag size={24} />
        Add to Cart
      </Button>

      {/* Button Checkout */}
      <Button 
        variant="dark" 
        className="px-20 w-full flex items-center justify-center gap-2" 
        onClick={handleCheckout}
      >
        Checkout Now
        <FiArrowRight size={24} />
      </Button>
    </div>
  );
};

export default ProductActions;