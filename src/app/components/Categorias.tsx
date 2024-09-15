const Categorias = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
        <div className="bg-yellow-400 h-24 flex items-center justify-center">Hombres</div>
        <div className="bg-blue-200 h-24 flex items-center justify-center">Mujeres</div>
        <div className="bg-pink-200 h-24 flex items-center justify-center">Bebes</div>
        <div className="bg-green-200 h-24 flex items-center justify-center">Niños</div>
      </div>
    </section>
  );
};

export default Categorias;
