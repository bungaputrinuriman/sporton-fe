import Image from "next/image";
import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";

const HeroSection = () => {
  return (
    <section id="hero-section" className="container mx-auto h-screen flex relative overflow-hidden">
      
      {/* BAGIAN KIRI: Konten Teks & Tombol */}
      <div className="relative self-center ml-40 z-10">
        <Image 
          src="/images/basketball_sport_icon_in_minimalist_3d_render_2 1.png"
          width={432}
          height={423}
          alt="image sporton"
          className="grayscale absolute left-0 -top-20"
        />
        <div className="text-primary italic font-medium">Friday Sale, 50%</div>
        
        <h1 className="font-extrabold text-[95px] italic bg-gradient-to-b from-black to-[#979797] bg-clip-text text-transparent leading-tight mt-2">
          WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
        </h1>

        <p className="w-1/2 mt-10 leading-loose text-gray-600">
          Engineered for endurance and designed for speed. Experience gear that 
          moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion.
        </p>

        <div className="flex gap-5 mt-14">
          <Button variant="primary">
            Explore More <FiFastForward size={20} />
          </Button>

          <Button variant="ghost" className="flex items-center gap-2">
            Watch Video 
            <Image 
              src="/images/Group 2.png" 
              alt="icon playvideo" 
              width={29} 
              height={29} 
            />
          </Button>
        </div>
      </div>

      {/* BAGIAN KANAN: Gambar Model Utama */}
      <Image 
        src="/images/img-hero.png"
        width={700}
        height={950}
        alt="image sporton hero"
        priority
        className="absolute -right-5 top-1/2 -translate-y-1/2 z-0 object-contain"
      />

      {/* Gambar Ornamen Latar */}
      <Image 
        src="/images/img-ornament-hero.svg"
        width={420}
        height={420}
        alt="image sporton"
        className="absolute -right-[250px] top-1/2 -translate-y-1/2 -z-10 opacity-70 object-contain"
      />
    </section>
  );
};

export default HeroSection;