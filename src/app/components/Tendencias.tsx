const Tendencias = () => {
  return (
    <section className="bg-gray-200 py-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Tendencias que no te puedes perder</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
        <div className="bg-blue-200 h-80 flex items-center justify-center">Verano</div>
        <div className="bg-gray-300 h-80 flex items-center justify-center">Aesthetic</div>
        <div className="bg-orange-200 h-80 flex items-center justify-center">Elegante</div>
        <div className="bg-yellow-200 h-80 flex items-center justify-center">Tendencia</div>
      </div>
    </section>
  );
};

export default Tendencias;
