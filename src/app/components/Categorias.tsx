import Image from 'next/image';

interface CategoriaProps {
  title: string;
  imgSrc: string;
}

const Categoria: React.FC<CategoriaProps> = ({ title, imgSrc }) => {
  return (
    <div className="relative h-36 w-full rounded-xl overflow-hidden shadow-md cursor-pointer hover:opacity-90 transition">
      {/* Imagen recortada para encajar en el contenedor */}
      <Image
        src={imgSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />

      {/* Div blanco con opacidad y bordes redondeados más pronunciados */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 py-1 px-3 rounded-tl-xl rounded-br-xl w-36">
        <h3 className="text-black text-center text-md font-medium">{title}</h3>
      </div>
    </div>
  );
};

const Categorias: React.FC = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-24">
        {/* Componente Categoria con título y ruta de imagen */}
        <Categoria title="Hombres" imgSrc="/hombres.png" />
        <Categoria title="Mujeres" imgSrc="/mujeres.png" />
        <Categoria title="Bebes" imgSrc="/bebes.png" />
        <Categoria title="Niños" imgSrc="/niños.png" />
      </div>
    </section>
  );
};

export default Categorias;
