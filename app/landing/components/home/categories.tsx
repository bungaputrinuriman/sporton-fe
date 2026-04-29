import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

// Data kategori sesuai dengan file yang ada di folder public/categories kamu
const categoryList = [
  {
    name: "Running",
    imgUrl: "/categories/category-running.png",
  },
  {
    name: "Tennis",
    imgUrl: "/categories/category-tenis.png", // Sesuaikan dengan nama file "tenis" (satu n) kamu
  },
  {
    name: "Basketball",
    imgUrl: "/categories/category-basketball.png",
  },
  {
    name: "Football",
    imgUrl: "/categories/category-football.png",
  },
  {
    name: "Badminton",
    imgUrl: "/categories/category-badminton.png",
  },
  {
    name: "Swimming",
    imgUrl: "/categories/category-swimming.png",
  },
];

const CategoriesSection = () => {
  return (
    <section id="category-section" className="container mx-auto mt-32 px-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="font-bold text-3xl text-dark">Browse By Categories</h2>
        <Link 
          href="#" 
          className="flex gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300 items-center"
        >
          <span>See All Categories</span>
          <FiArrowRight size={20} />
        </Link>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
        {categoryList.map((category, index) => (
          <div key={index} className="flex flex-col items-center gap-5 group cursor-pointer">
            
            {/* Box Ikon dengan Gradient */}
            <div className="rounded-2xl bg-gradient-to-br from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex items-center justify-center group-hover:shadow-lg group-hover:-translate-y-2 transition-all duration-300">
              <Image 
                src={category.imgUrl} 
                width={100} 
                height={100} 
                alt={`Icon ${category.name}`}
                className="object-contain p-4"
              />
            </div>

            {/* Nama Kategori */}
            <div className="text-primary font-bold text-xl">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </section> 
  );
};

export default CategoriesSection;