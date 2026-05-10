"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import { useState } from "react";

const Header = () => {
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="flex justify-between items-center container mx-auto py-6 px-4">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="sporton logo"
              width={140}
              height={32}
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex gap-12 font-bold text-black items-center">
          <div className="flex flex-col items-center gap-1">
            <Link href="#" className="hover:text-primary transition-colors">Home</Link>
            <div className="w-6 h-1 bg-primary rounded-full"></div>
          </div>
          <Link href="#" className="hover:text-primary transition-colors">Category</Link>
          <Link href="#" className="hover:text-primary transition-colors">Explore Products</Link>
        </nav>

        {/* Icons Section */}
        <div className="relative flex gap-10 items-center"> {/* Sesuai gambar: gap-10 */}
          <FiSearch size={24} className="cursor-pointer hover:text-primary transition-colors" />

          {/* Sesuai gambar: Menggunakan tag <button> untuk toggle keranjang */}
          <button 
            className="relative cursor-pointer hover:text-primary transition-colors"
            onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
          >
            <FiShoppingBag size={24} />
            
            {/* Sesuai gambar: badge menggunakan w-3.5 h-3.5 */}
            <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white flex items-center justify-center font-bold border-2 border-white">
              3
            </div>
          </button>

          {/* Rendering CartPopup */}
          {isCartPopupOpen && <CartPopup />}
        </div>
      </div>
    </header>
  );
};

export default Header;