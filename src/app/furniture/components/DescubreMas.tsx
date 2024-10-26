import Image from "next/image";

// Componente reutilizable para los items de "Descubre Más"
interface DiscoverItemProps {
  src: string;
  alt: string;
  text: string;
}

const DiscoverItem: React.FC<DiscoverItemProps> = ({ src, alt, text }) => (
  <div className="relative h-48 w-full sm:h-60 md:h-64 lg:h-72 xl:h-80 shadow-md cursor-pointer hover:opacity-90 transition rounded-md overflow-hidden">
    {/* Imagen de la tendencia */}
    <>
    <Image
      src={src}
      alt={alt}
      layout="fill" // Ajusta la imagen para que ocupe todo el contenedor
      objectFit="cover" // La imagen cubre todo el contenedor sin deformarse
      objectPosition="center"
      className="brightness-75"
    /></>

    {/* Texto sobre la imagen */}
    <div className="absolute bottom-0 left-0 bg-opacity-90 bg-black p-2 w-full text-center">
      <h3 className="text-white text-sm sm:text-md md:text-lg font">{text}</h3>
    </div>
  </div>
);

const DescubreMas = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Descubre más de FIDUCCIO</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-12 lg:px-24">
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
          text="Proceso de cuidado y desinfección de nuestras prendas"
        />
      </div>
    </section>
  );
};

export default DescubreMas;
