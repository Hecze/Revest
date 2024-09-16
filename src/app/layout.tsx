import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Alquiler de Ropa | REVEST",
  description: "Generated by create next app",
};

const SearchBar: React.FC = () => (
  <div className="flex-grow max-w-md mx-4">
    <input
      type="text"
      placeholder="Buscar producto, categoría, marca..."
      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <div className="flex justify-between items-center lg:px-72 py-4 bg-white">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link className="text-2xl font-bold mb-4 sm:mb-0 ml-4 translate-y-2" href={"/"}>Revest</Link>
            </div>

            {/* Search bar */}
            <SearchBar />

            {/* Icons for cart, user, and menu */}
            <div className="items-center space-x-6 hidden lg:flex ">
              <button className="flex items-center">
                <IoPersonOutline size={24} />
              </button>
              <button className="flex items-center">
                <FiShoppingCart size={24} />
              </button>
              <Link className="bg-black text-white px-4 py-2 rounded-md" href={"/membership"}>
                Suscribirse
              </Link>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
