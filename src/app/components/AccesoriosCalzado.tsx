import Link from 'next/link';
import Image from 'next/image';

// Componente para productos grandes (ocupan 3 columnas)
const ProductoGrande: React.FC<{ imgSrc: string; title: string; description: string; bgColor: string }> = ({ imgSrc, title, description, bgColor }) => {
  return (
    <div className={`col-span-2 sm:col-span-2 lg:col-span-3 rounded ${bgColor} p-6 flex flex-col md:flex-row items-center justify-center text-center md:text-left`}>
      <div className="w-full md:w-auto flex-shrink-0 mb-4 md:mb-0 md:mr-4 flex justify-center">
        <>
          <Image
            src={imgSrc}
            alt={title}
            width={200} // Ajustado para hacer la imagen más grande
            height={200}
            className="rounded"
          />
        </>
      </div>
      <div className='flex flex-col justify-center items-center md:items-start md:justify-center'>
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-sm md:text-base">{description}</p>
        <Link className="mt-4 bg-black text-white font-bold py-2 px-4 hover:bg-gray-700 w-full md:w-48 rounded text-center" href={'/catalog'} >
          Ver colección
        </Link>
      </div>
    </div>
  );
};

// Componente para productos pequeños (ocupan 1 columna)
const ProductoPequeno: React.FC<{ imgSrc: string; altText: string }> = ({ imgSrc, altText }) => {
  return (
    <Link className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded overflow-hidden cursor-pointer" href={"/zapatilla/asd5sad2"}>
      <>
        <Image
          src={imgSrc}
          alt={altText}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </>
    </Link>
  );
};

// Componente principal Accesorios & Calzado
const AccesoriosCalzado: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">

        {/* Primer div grande (Accesorios) */}
        <ProductoGrande
          imgSrc="/gamepad.png"
          title="VIDEOJUEGOS"
          description="Desde consolas hasta computadoras"
          bgColor="bg-orange-100"
        />

        {/* Imágenes pequeñas (Productos individuales) */}
        <ProductoPequeno imgSrc="/play5.webp" altText="PlayStation 5" />
        <ProductoPequeno imgSrc="/computadora.webp" altText="Computadora" />

        {/* Segunda fila de imágenes pequeñas */}
        <ProductoPequeno imgSrc="/fulbito.webp" altText="Mesa de Fulbito" />
        <ProductoPequeno imgSrc="/hockey.webp" altText="Mesa de Hockey" />

        {/* Segundo div grande (Calzado) */}
        <ProductoGrande
          imgSrc="/dados.png"
          title="MESAS"
          description="Desde mesa de billar hasta mesa de Jockie"
          bgColor="bg-gray-800 text-white"
        />
      </div>
    </section>
  );
};

export default AccesoriosCalzado;
