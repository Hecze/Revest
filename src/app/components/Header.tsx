import React from 'react';
import Image from 'next/image';
import { RiArrowGoBackFill } from "react-icons/ri";
import { IoTicketOutline } from "react-icons/io5";
import { PiPackage } from "react-icons/pi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { PiLineVerticalThin } from "react-icons/pi";


const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top bar with logo and navigation */}
      <div className="flex justify-between items-center lg:px-72 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Logo Image Placeholder */}
          <Image
            src="/logo.png" // Reemplazar con la ruta correcta de la imagen del logo
            alt="Revest Logo"
            width={120}
            height={40}
          />
        </div>

        {/* Search bar */}
        <div className="flex-grow max-w-md mx-4">
          <input
            type="text"
            placeholder="Buscar producto, categoría, marca..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Icons for cart, user, and menu */}
        <div className="items-center space-x-6 hidden lg:flex ">
          {/* User icon */}
          <button className="flex items-center">
            <IoPersonOutline size={24} />
          </button>

          {/* Cart icon */}
          <button className="flex items-center">
            <FiShoppingCart size={24} />
          </button>

          {/* Subscribe button */}
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Suscribirse
          </button>
        </div>
      </div>

      {/* Main banner section */}
      <div className="relative w-full  flex flex-col  h-64 bg-[#EF9A9C] overflow-hidden">
        {/* Banner Image Placeholder */}
        <Image
          src="/header-modelo.png" // Reemplazar con la ruta correcta de la imagen del banner
          alt="Tendencias que no te puedes perder"
          width={300}
          height={300}
          objectFit="cover"
          className="rounded-md lg:ml-[32rem]"
        />
        {/* Text overlay on banner */}
        <div className="absolute inset-0  flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold text-white">TENDENCIAS</h1>
          <p className="text-xl text-white">que no te puedes perder</p>
          <button className="bg-black text-white px-6 py-2 mt-4 rounded-md">
            VER COLECCIÓN
          </button>
        </div>
      </div>

      {/* Icons/Features section */}
      <div className="flex flex-wrap gap-6 justify-around py-4 bg-white lg:px-64 lg:x-44" >
        <div className="flex flex-row  items-center text-center">
          <RiArrowGoBackFill size={27} opacity={0.9} />
          <PiLineVerticalThin size={45} opacity={0.9} />
          <div className="flex flex-col">
            <p className="text-sm">DEVOLUCIÓN SIMPLE</p>
            <p className="text-xs text-gray-500">HASTA 72HS</p>
          </div>
        </div>
        <div className="flex flex-row items-center text-center">
          <IoTicketOutline size={27} opacity={0.9} />
          <PiLineVerticalThin size={45} opacity={0.9} />
          <div className="flex flex-col">
            <p className="text-sm">MODA CIRCULAR</p>
            <p className="text-xs text-gray-500">EN PERFECTO ESTADO</p>
          </div>
        </div>
        <div className="flex flex-row items-center text-center">
          <PiPackage size={27} opacity={0.9} />
          <PiLineVerticalThin size={45} opacity={0.9} />
          <div className="flex flex-col">
            <p className="text-sm">ENVÍO GRATIS</p>
            <p className="text-xs text-gray-500">EN CUALQUIER COMPRA</p>
          </div>
        </div>
        <div className="flex flex-row items-center text-center">
          <RiMoneyDollarCircleLine size={27} opacity={0.9} />
          <PiLineVerticalThin size={45} opacity={0.9} />
          <div className="flex flex-col">
            <p className="text-sm">PRECIOS INCREIBLES</p>
            <p className="text-xs text-gray-500">HASTA 70% OFF</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
