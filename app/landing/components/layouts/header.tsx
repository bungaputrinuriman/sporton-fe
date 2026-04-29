import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="flex justify-between items-center container mx-auto py-6 px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="sporton logo"
            width={140}
            height={32}
          />
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

        {/* Icons */}
        <div className="flex gap-6 items-center">
          <button className="cursor-pointer hover:text-primary transition-colors">
            <FiSearch size={24} />
          </button>
          
          <div className="relative cursor-pointer hover:text-primary transition-colors">
            <FiShoppingBag size={24} />
            {/* Badge Notifikasi */}
            <div className="bg-primary rounded-full w-4 h-4 absolute -top-1 -right-1 text-[10px] text-white flex items-center justify-center font-bold border-2 border-white">
              3
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;