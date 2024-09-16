import Image from 'next/image';

// Componente para productos grandes (ocupan 3 columnas)
const ProductoGrande: React.FC<{ imgSrc: string; title: string; description: string; bgColor: string }> = ({ imgSrc, title, description, bgColor }) => {
  return (
    <div className={`col-span-2 sm:col-span-4 lg:col-span-3 ${bgColor} p-8 flex flex-row justify-center md:justify-between lg:px-24`}>
      <Image
        src={imgSrc}
        alt={title}
        width={150}
        height={150}
        className="mb-4 hidden md:block"
      />
      <div className='flex flex-col justify-center items-center text-center'>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2">{description}</p>
        <button className="mt-6 bg-black text-white py-2 px-4 hover:bg-gray-700 w-64">
          Ver colección
        </button>
      </div>

    </div>
  );
};

// Componente para productos pequeños (ocupan 1 columna)
const ProductoPequeno: React.FC<{ imgSrc: string; altText: string }> = ({ imgSrc, altText }) => {
  return (
    <div className="col-span-1 bg-red-200">
      <Image
        src={imgSrc}
        alt={altText}
        layout="responsive"
        width={500}
        height={500}
        className="rounded-lg"
      />
    </div>
  );
};

// Componente principal Accesorios & Calzado
const AccesoriosCalzado: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-12 md:px-24 xl:px-56">
      <div className="grid grid-col-2 sm:grid-col-4 lg:grid-cols-5 gap-2 ">

        {/* Primer div grande (Accesorios) */}
        <ProductoGrande
          imgSrc="/mochila.png"
          title="ACCESORIOS"
          description="Desde casual hasta elegante, un accesorio para cada ocasión"
          bgColor="bg-orange-100"
        />

        {/* Imágenes pequeñas (Productos individuales) */}
        <ProductoPequeno imgSrc="/zapato1.png" altText="Zapato 1" />
        <ProductoPequeno imgSrc="/zapato2.png" altText="Zapato 2" />

        {/* Segunda fila de imágenes pequeñas */}
        <ProductoPequeno imgSrc="/zapato3.png" altText="Zapato 3" />
        <ProductoPequeno imgSrc="/zapato4.png" altText="Zapato 4" />

        {/* Segundo div grande (Calzado) */}
        <ProductoGrande
          imgSrc="/zapatillas.png"
          title="CALZADO"
          description="Desde casual hasta elegante, un accesorio para cada ocasión"
          bgColor="bg-gray-800 text-white"
        />
      </div>
    </section>
  );
};

export default AccesoriosCalzado;
