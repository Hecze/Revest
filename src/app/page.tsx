import Header from './components/Header'
import Tendencias from './components/Tendencias'
import Categorias from './components/Categorias'
import Accesorios from './components/Accesorios'
import Calzado from './components/Calzado'
import OutfitIA from './components/OutfitIA'
import DescubreMas from './components/DescubreMas'

export default function Home() {
  return (
    <>
      <Header />
      <Tendencias />
      <Categorias />
      <Accesorios />
      <Calzado />
      <OutfitIA />
      <DescubreMas />
    </>
  )
}
