import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./landing/components/layouts/header"; 
// 1. Import komponen Footer di sini
import Footer from "./landing/components/layouts/footer"; 

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "SportOn Website",
  description: "Engineered for endurance and designed for speed.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${poppins.variable} antialiased min-h-full flex flex-col`}>
        <Header />
        {/* main diberi flex-grow supaya footer tetap di bawah jika konten sedikit */}
        <main className="relative flex-grow">
          {children}
        </main>
        {/* 2. Panggil komponen Footer dengan huruf kapital */}
        <Footer />
      </body>
    </html>
  );
}