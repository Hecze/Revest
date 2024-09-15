import Image from 'next/image';

interface TendenciaProps {
  title: string;
  imgSrc: string;
}

const Tendencia: React.FC<TendenciaProps> = ({ title, imgSrc }) => {
  return (
    <div className="relative h-[600px] w-full">
      {/* Imagen de la tendencia */}
      <Image
        src={imgSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />

      {/* Div negro con texto blanco */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3">
        <h3 className="text-white text-center text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};

const Tendencias: React.FC = () => {
  return (
    <section className="bg-gray-200 py-10 px-24">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Tendencias que no te puedes perder</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
        {/* Aquí llamamos al componente Tendencia con la imagen y el título */}
        <Tendencia title="Verano" imgSrc="/verano.jpg" />
        <Tendencia title="Aesthetic" imgSrc="/aesthetic.jpg" />
        <Tendencia title="Elegante" imgSrc="/elegante.jpg" />
        <Tendencia title="Tendencia" imgSrc="/tendencia.jpg" />
      </div>
    </section>
  );
};

export default Tendencias;
