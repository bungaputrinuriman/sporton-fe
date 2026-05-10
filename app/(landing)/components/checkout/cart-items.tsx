"use client";

import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import Button from "../ui/button";
import { FiTrash2, FiCreditCard } from "react-icons/fi";
import { useRouter } from "next/navigation"; 

const cartList = [
  {
    name: "SportsOn Product 2",
    category: "Running",
    price: 250000,
    qty: 3,
    imgUrl: "/products/product-1.png", 
  },
  {
    name: "SportsOn Product 3",
    category: "Running",
    price: 230000,
    qty: 5,
    imgUrl: "/products/product-3.png",
  },
  {
    name: "SportsOn Product 2",
    category: "Running",
    price: 250000,
    qty: 3,
    imgUrl: "/products/product-1.png", 
  },
  {
    name: "SportsOn Product 3",
    category: "Running",
    price: 230000,
    qty: 5,
    imgUrl: "/products/product-3.png",
  }
];

const CartItems = () => {
  const router = useRouter(); // Ambil object router secara utuh

  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-200">
        <h2 className="font-bold text-lg">Cart Items</h2>
      </div>

      {/* List Items */}
      <div className="overflow-auto max-h-[350px]">
        {cartList.map((item, index) => (
          <div className="border-b border-gray-200 p-4 flex gap-4 hover:bg-gray-50 transition-colors" key={index}>
            <div className="bg-gray-100 aspect-square w-16 flex-shrink-0 flex justify-center items-center rounded-md overflow-hidden">
              <Image
                src={`/images${item.imgUrl}`}
                width={64}
                height={64}
                alt={item.name}
                className="aspect-square object-contain"
              />
            </div>

            <div className="flex-grow self-center">
              <div className="text-sm font-semibold text-gray-800">{item.name}</div>
              <div className="text-xs text-gray-500 mb-1">{item.category}</div>
              <div className="flex gap-3 font-medium text-xs">
                <div className="text-gray-600">{item.qty}x</div>
                <div className="text-primary font-bold">{priceFormatter(item.price)}</div>
              </div>
            </div>

            <Button 
              size="small" 
              variant="ghost" 
              className="w-8 h-8 p-0 self-center ml-auto text-gray-400 hover:text-red-500"
            >
              <FiTrash2 size={18} />
            </Button>
          </div>
        ))}
      </div>

      {/* Summary & Action */}
      <div className="border-t border-gray-200 p-5 bg-gray-50">
        <div className="flex justify-between items-center font-bold mb-4">
          <div className="text-sm text-gray-600">Total Payment</div>
          <div className="text-primary text-lg">
            {priceFormatter(totalPrice)}
          </div>
        </div>
        
        <Button 
          variant="dark" 
          className="w-full flex items-center justify-center gap-2 py-6" 
          onClick={() => router.push("/payment")}
        >
          <FiCreditCard size={20} />
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
};

export default CartItems;