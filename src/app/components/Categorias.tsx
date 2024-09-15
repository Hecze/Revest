import Image from 'next/image';

interface CategoriaProps {
  title: string;
  imgSrc: string;
}

const Categoria: React.FC<CategoriaProps> = ({ title, imgSrc }) => {
  return (
    <div className="relative h-24 w-full rounded-lg overflow-hidden">
      {/* Imagen recortada para encajar en el contenedor */}
      <Image
        src={imgSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />

      {/* Div blanco con opacidad y bordes redondeados más pronunciados */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 py-1 px-3 rounded-tl-xl rounded-br-xl w-36">
        <h3 className="text-black text-center text-sm font-semibold">{title}</h3>
      </div>
    </div>
  );
};

const Categorias: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10 px-44">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
        {/* Componente Categoria con título y ruta de imagen */}
        <Categoria title="Hombres" imgSrc="/path/to/hombres.jpg" />
        <Categoria title="Mujeres" imgSrc="/path/to/mujeres.jpg" />
        <Categoria title="Bebes" imgSrc="/path/to/bebes.jpg" />
        <Categoria title="Niños" imgSrc="/path/to/ninos.jpg" />
      </div>
    </section>
  );
};

export default Categorias;
