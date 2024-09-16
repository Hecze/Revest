import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Title Component
const Title: React.FC = () => (
  <h1 className="text-3xl font-bold mb-6">Crea tu outfit perfecto con REVEST IA</h1>
);

// Input Component
const Input: React.FC = () => (
  <input
    type="text"
    placeholder="¿Con qué Outfit te gustaría deslumbrar hoy?"
    className="mb-8 px-4 py-2 border border-gray-300 rounded-3xl w-96 md:w-[60%] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

// Image Component (for any size image)
interface OutfitImageProps {
  src: string;
  alt: string;
  className?: string;
}

const OutfitImage: React.FC<OutfitImageProps> = ({ src, alt, className }) => (
  <Link className={`bg-gray-300 relative shadow-md cursor-pointer hover:opacity-90 transition  md:col-span-2 " ${className}`} style={{ paddingBottom: '100%' }} href={'/Blusa/S5D2'}>
    <Image src={src} alt={alt} layout="fill" objectFit="cover" className="rounded-md" />
  </Link>
);

// Text Box Component
interface TextBoxProps {
  text: string;
  className?: string;
}

const TextBox: React.FC<TextBoxProps> = ({ text, className }) => (
  <Link className={` p-4 px-8  shadow-md cursor-pointer hover:opacity-90 transition w-full text-center ${className}`} href={"/catalog"}>
    {text}
  </Link>
);

// Grid Layout Component
const GridLayout: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-7 gap-2 md:w-3/5 max-w-screen-md mt-6">
    {/* Large Image (1 col, 3 rows) */}
    <div className={`bg-gray-300 relative  shadow-md cursor-pointer hover:opacity-90 transition col-span-2 md:col-span-3  row-span-3 h-96 md:h-auto md:aspect-w-1 `} style={{ paddingBottom: '200%' }}>
      <Image src={"/IA-completo.png"} alt={"Large Outfit"} layout="fill" objectFit="cover" className="rounded-md" />
    </div>

    {/* Four smaller images (1 col, 1 row each) */}
    <OutfitImage
      src="/IA-1.png" // Replace with your image path
      alt="Item 1"
    />
    <OutfitImage
      src="/IA-2.png" // Replace with your image path
      alt="Item 2"
    />
    <OutfitImage
      src="/IA-3.png" // Replace with your image path
      alt="Item 3"
    />
    <OutfitImage
      src="/IA-4.png" // Replace with your image path
      alt="Item 4"
    />

    {/* Text Boxes */}
    <div className="col-span-2 md:col-span-4 flex flex-col justify-center items-center ">
      <div className="flex flex-col w-full justify-around items-center gap-2">
        <TextBox text="Suscríbete desde 5 prendas por mes y úsalas cuando quieras" className='bg-slate-900 text-white' />
        <TextBox text="Elige entre más de 10 mil prendas en catálogo y ayuda a nuestro planeta" className='bg-white text-slate-900' />
      </div>
    </div>
  </div>
);

// Main Component
const OutfitIA: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-10">
      <Title />
      <Input />
      <GridLayout />
    </section>
  );
};

export default OutfitIA;
