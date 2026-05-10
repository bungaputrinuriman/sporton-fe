"use client"; // WAJIB ADA untuk memperbaiki error image_4aadad.png

import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

const productList = [
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    imgUrl: "/products/product-1.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    imgUrl: "/products/product-2.png",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 119000,
    imgUrl: "/products/product-3.png",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: 458000,
    imgUrl: "/products/product-4.png",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: 458000,
    imgUrl: "/products/product-5.png",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 119000,
    imgUrl: "/products/product-6.png",
  },
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    imgUrl: "/products/product-7.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    imgUrl: "/products/product-8.png",
  },
];

const ProductsSection = () => {
  return (
    <section id="products-section" className="container mx-auto mt-32 mb-20 px-4">
      <h2 className="font-bold italic text-4xl text-center mb-11 uppercase tracking-tight text-dark">
        <span className="text-primary">Our </span> Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {productList.map((product, index) => (
          /* Hapus Link utama, ganti jadi div agar kita bisa menaruh tombol & link secara independen */
          <div
            key={index}
            className="group relative bg-white rounded-xl transition-all duration-300 hover:shadow-2xl p-4 border border-transparent hover:border-gray-100 flex flex-col"
          >
            {/* Box Image */}
            <div className="relative bg-[#F5EFEF] aspect-square w-full flex justify-center items-center overflow-hidden rounded-lg mb-4">
              
              {/* Tombol Plus (+) - Kita beri z-index tinggi agar bisa diklik di atas link overlay */}
              <button 
                className="absolute top-0 right-0 bg-primary text-white p-2 z-30 hover:bg-orange-600 transition-colors shadow-md"
                onClick={(e) => {
                  e.preventDefault(); // Mencegah navigasi Link saat tombol diklik
                  alert("Added to cart!");
                }}
              >
                <FiPlus size={24} />
              </button>

              <Image
                src={product.imgUrl}
                alt={product.name}
                width={250}
                height={250}
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Nama Produk */}
            <h3 className="font-bold text-dark text-base mb-1">
              {product.name}
            </h3>

            {/* Info Kategori & Harga */}
            <div className="flex justify-between items-center mt-auto pt-2">
              <span className="text-gray-400 text-sm font-medium">{product.category}</span>
              <span className="font-bold text-primary">
                {priceFormatter(product.price)}
              </span>
            </div>

            {/* SATU-SATUNYA LINK OVERLAY: menutupi seluruh card kecuali tombol plus */}
            <Link 
              href={`/product/${product.name}`} 
              className="absolute inset-0 z-20" 
              aria-label={product.name} 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;