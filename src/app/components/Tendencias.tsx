import Image from 'next/image';
import Link from 'next/link';

interface TendenciaProps {
  title: string;
  imgSrc: string;
}

const Tendencia: React.FC<TendenciaProps> = ({ title, imgSrc }) => {
  return (
    <Link className="relative w-full shadow-md cursor-pointer hover:opacity-90 transition aspect-w-1" style={{ paddingBottom: '200%' }} href={'/fashion/catalog'}>
      {/* Imagen de la tendencia justificada a la parte superior */}
      <Image
        src={imgSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        className=""
      />

      {/* Div negro con texto blanco */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-90 p-2">
        <h3 className="text-white text-center text-md font">{title}</h3>
      </div>
    </Link>
  );
};


const Tendencias: React.FC = () => {
  return (
    <section className="">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {/* Aquí llamamos al componente Tendencia con la imagen y el título */}
        <Tendencia title="Verano" imgSrc="/verano.png" />
        <Tendencia title="Aesthetic" imgSrc="/aesthetic.png" />
        <Tendencia title="Elegante" imgSrc="/elegante.png" />
        <Tendencia title="Tendencia" imgSrc="/tendencia.png" />
      </div>
    </section>
  );
};

export default Tendencias;
