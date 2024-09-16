import Image from "next/image";

// Componente reutilizable para los items de "Descubre Más"
interface DiscoverItemProps {
  src: string;
  alt: string;
  text: string;
}

const DiscoverItem: React.FC<DiscoverItemProps> = ({ src, alt, text }) => (
  <div className="relative h-60 w-96  shadow-md cursor-pointer hover:opacity-90 transition">
    {/* Imagen de la tendencia */}
    <Image
      src={src}
      alt={alt}
      layout="fill" // Ajusta la imagen para que ocupe todo el contenedor
      objectFit="cover" // La imagen cubre todo el contenedor sin deformarse
      objectPosition="top"
      className="brightness-50"
    />

    {/* Texto sobre la imagen */}
    <div className="absolute bottom-0 left-0 bg-opacity-90 bg-black p-2 w-full text-center">
      <h3 className="text-white text-md font">{text}</h3>
    </div>
  </div>
);

const DescubreMas = () => {
  return (
    <section className="py-6">
      <h2 className="text-2xl font-bold text-center mb-6">Descubre más de REVEST</h2>
      <div className="flex flex-wrap gap-2 md:px-24 justify-center items-stretch">
        <DiscoverItem
          src="/descubre1.webp"
          alt="Descubre 1"
          text="Disfruta el outfit de tus sueños... y ahorra para lo que más quieras"
        />
        <DiscoverItem
          src="/descubre2.webp"
          alt="Descubre 2"
          text="Encuentra la moda que se adapta a ti sin perder tu esencia"
        />
        <DiscoverItem
          src="/descubre3.webp"
          alt="Descubre 3"
          text="Proceso de cuidado y desifección de nuestras prendas"
        />
      </div>
    </section>
  );
};

export default DescubreMas;
