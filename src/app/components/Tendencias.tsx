import Image from 'next/image';

interface TendenciaProps {
  title: string;
  imgSrc: string;
}

const Tendencia: React.FC<TendenciaProps> = ({ title, imgSrc }) => {
  return (
    <div className="relative w-full shadow-md cursor-pointer hover:opacity-90 transition aspect-w-1" style={{ paddingBottom: '200%' }}>
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
    </div>
  );
};


const Tendencias: React.FC = () => {
  return (
    <section className="bg-gray-200 py-10  px-4 sm:px-12 md:px-24 xl:px-56">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Tendencias que no te puedes perder</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-5">
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
