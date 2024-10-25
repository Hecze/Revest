import Header from './components/Header'
import Tendencias from './components/Tendencias'
import Categorias from './components/Categorias'
import AccesoriosCalzado from './components/AccesoriosCalzado'
import OutfitIA from './components/OutfitIA'
import DescubreMas from './components/DescubreMas'

export default function Home() {
  return (
    <>
      <Header />
      <Tendencias />
      <Categorias />
      <AccesoriosCalzado />
      <DescubreMas />
    </>
  )
}
