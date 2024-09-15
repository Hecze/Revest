const Calzado = () => {
  return (
    <section className="bg-gray-200 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Calzado</h2>
      <div className="flex flex-col md:flex-row gap-6 px-5 justify-between">
        <div className="bg-gray-400 h-48 w-full md:w-1/3 flex items-center justify-center">Zapato 1</div>
        <div className="bg-gray-400 h-48 w-full md:w-1/3 flex items-center justify-center">Zapato 2</div>
        <div className="bg-gray-400 h-48 w-full md:w-1/3 flex items-center justify-center">Zapato 3</div>
      </div>
    </section>
  );
};

export default Calzado;
