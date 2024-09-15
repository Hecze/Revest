import React from 'react';
import Image from 'next/image';

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
  <div className={`bg-gray-300 relative aspect-w-1" ${className}`} style={{ paddingBottom: '100%' }}>
    <Image src={src} alt={alt} layout="fill" objectFit="cover" className="rounded-md" />
  </div>
);

// Text Box Component
interface TextBoxProps {
  text: string;
  className?: string;
}

const TextBox: React.FC<TextBoxProps> = ({ text, className }) => (
  <div className={`bg-white p-4 shadow-md rounded-md w-full text-center ${className}`}>
    {text}
  </div>
);

// Grid Layout Component
const GridLayout: React.FC = () => (
  <div className="grid  grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 max-w-screen-lg">
    {/* Large Image (1 col, 3 rows) */}
    <div className={`bg-gray-300 relative aspect-w-1" col-span-2 lg:col-span-1 row-span-3`} style={{ paddingBottom: '65%' }}>
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
    <div className="col-span-2 bg-gray-200 flex flex-col justify-center items-center p-6">
      <div className="flex flex-col w-full justify-around items-center gap-4">
        <TextBox text="Suscríbete desde 5 prendas por mes y úsalas cuando quieras" className='bg-slate-900 text-white' />
        <TextBox text="Elige entre más de 10 mil prendas en catálogo y ayuda a nuestro planeta" />
      </div>
    </div>
  </div>
);

// Main Component
const OutfitIA: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-10 bg-gray-100">
      <Title />
      <Input />
      <GridLayout />
    </section>
  );
};

export default OutfitIA;
