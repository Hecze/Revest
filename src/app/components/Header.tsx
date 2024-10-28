import React from 'react';
import Image from 'next/image';
import { RiArrowGoBackFill, RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoTicketOutline } from "react-icons/io5";
import { PiPackage, PiLineVerticalThin } from "react-icons/pi";
import Link from 'next/link';

// Componente reutilizable para características con íconos
interface IconFeatureProps {
  Icon: React.ElementType;
  title: string;
  subtitle: string;
}

const IconFeature: React.FC<IconFeatureProps> = ({ Icon, title, subtitle }) => (
  <div className="flex flex-row items-center text-center">
    <Icon size={27} opacity={0.9} />
    <PiLineVerticalThin size={45} opacity={0.9} />
    <div className="flex flex-col">
      <p className="text-sm">{title}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  </div>
);

// Componente para la sección del banner
const BannerSection: React.FC = () => (
  <div className="relative w-full flex flex-col h-64 bg-[#EF9A9C] overflow-hidden">
    <>
      <Image
        src="/mueble-inicio.webp"
        alt="Tendencias que no te puedes perder"
        layout='fill'
        objectFit="cover"
        className="rounded-md lg:ml-[8 rem]"
      />
    </>
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-white">TENDENCIAS</h1>
      <p className="text-xl text-white">que no te puedes perder</p>
      <Link className="bg-black text-white px-6 py-2 mt-4 rounded-md" href="/catalog">
        VER COLECCIÓN
      </Link>
    </div>
  </div>
);

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Main banner section */}
      <BannerSection />

      {/* Icons/Features section */}
      <div className="flex flex-wrap gap-6 justify-around py-4 bg-white lg:px-32 lg:x-44">
        <IconFeature
          Icon={RiArrowGoBackFill}
          title="DEVOLUCIÓN SIMPLE"
          subtitle="HASTA 72HS"
        />
        <IconFeature
          Icon={IoTicketOutline}
          title="MODA CIRCULAR"
          subtitle="EN PERFECTO ESTADO"
        />
        <IconFeature
          Icon={PiPackage}
          title="ENVÍO GRATIS"
          subtitle="EN CUALQUIER COMPRA"
        />
        <IconFeature
          Icon={RiMoneyDollarCircleLine}
          title="PRECIOS INCREIBLES"
          subtitle="HASTA 70% OFF"
        />
      </div>
    </header>
  );
};

export default Header;
