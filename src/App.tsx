import Navbar from "@/components/Navbar"
import HeroBanner from "@/components/HeroBanner"
import Carrusel from "@/components/Carrusel"
import CombosSeccion from "@/components/CombosSeccion"
import ProductosSeccion from "@/components/ProductosSeccion"
import ContactoSeccion from "@/components/ContactoSeccion"
import Footer from "@/components/Footer"

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main>
        <HeroBanner />
        <Carrusel />
        <CombosSeccion />
        <ProductosSeccion />
        <ContactoSeccion />
      </main>
      <Footer />
    </div>
  )
}

export default App