import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-alternate text-white">
      <div className="container mx-auto flex justify-between pt-14 pb-24">
        {/* Bagian Kiri: Logo dan Deskripsi */}
        <div className="w-105">
          <Image
            src="/images/logo-footer.svg"
            alt="logo sporton footer"
            width={187}
            height={44}
          />
          <p className="text-white mt-8 opacity-80 leading-relaxed">
            Engineered for endurance and designed for speed. Experience gear 
            that moves as fast as you do.
          </p>
        </div>

        {/* Bagian Kanan: Links Navigasi */}
        <div className="flex gap-28">
          {/* Column 1: Page */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="#category-section" className="hover:text-primary transition-colors">Categories</Link>
            <Link href="#products-section" className="hover:text-primary transition-colors">Explore Products</Link>
            <Link href="#" className="hover:text-primary transition-colors">About Us</Link>
          </div>

          {/* Column 2: Social Media */}
          <div className="flex flex-col gap-5">
            <Link href="#" className="hover:text-primary transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-primary transition-colors">Facebook</Link>
            <Link href="#" className="hover:text-primary transition-colors">TikTok</Link>
            <Link href="#" className="hover:text-primary transition-colors">YouTube</Link>
          </div>
        </div>
      </div>

      {/* Bagian Bawah: Copyright & Legal */}
      <div className="border-t border-white/10 py-8">
        <div className="container mx-auto flex justify-between text-sm opacity-60">
          <p>SportsOn © 2025 All Rights Reserved.</p>
          <div className="flex gap-14">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;