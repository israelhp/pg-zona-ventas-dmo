import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { ShoppingCart } from "lucide-react"

const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE

const handleWhatsappCombo = (combo: typeof combos[0]) => {
  const mensaje = `Hola, me interesa el combo: ${combo.nombre}\n\nDescripción: ${combo.descripcion}\nPrecio: Q${combo.precioCombo.toFixed(2)}\nAhorro: Q${combo.ahorro.toFixed(2)}\n\nProductos incluidos:\n${combo.productos.map(p => `• ${p}`).join("\n")}\n\n¿Puedes brindarme más información?`
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(mensaje)}`
  window.open(url, "_blank")
}

export default function CombosSeccion() {
  const combos = [
    {
      id: 1,
      nombre: "Combo Básico Audio",
      descripcion: "Radio + Bocinas 6.5",
      precioNormal: 450.00,
      precioCombo: 349.99,
      ahorro: 100.01,
      imagen: "https://eurocaraudio.com/wp-content/uploads/2022/06/combo-euro.jpg",
      productos: ["Radio Pioneer", "2 Bocinas JBL 6.5\""]
    },
    {
      id: 2,
      nombre: "Combo Premium Sound",
      descripcion: "Radio + Amplificador + Subwoofer",
      precioNormal: 899.00,
      precioCombo: 699.99,
      ahorro: 199.01,
      imagen: "https://musical.com.gt/wp-content/uploads/COMBO-CAR-AUDIO-4.jpg",
      productos: ["Radio Alpine", "Amplificador 4 canales", "Subwoofer 12\""]
    },
    {
      id: 3,
      nombre: "Combo DJ Starter",
      descripcion: "Controlador + Audífonos",
      precioNormal: 650.00,
      precioCombo: 549.99,
      ahorro: 100.01,
      imagen: "https://dcdn-us.mitiendanube.com/stores/158/903/products/combo-audiocenter-6000x6000-0011-9e6efa849fb454f82716170262693979-480-0.webp",
      productos: ["Controlador Numark", "Audífonos Pioneer HDJ-X5"]
    },
    {
      id: 4,
      nombre: "Combo Instalación Pro",
      descripcion: "Kit completo instalación",
      precioNormal: 280.00,
      precioCombo: 199.99,
      ahorro: 80.01,
      imagen: "https://cdn.kemik.gt/2023/11/radioboss-526x388.-499x368.jpeg",
      productos: ["Kit cables calibre 4", "Conectores", "Fusibles"]
    },
    {
      id: 5,
      nombre: "Combo Bass Extremo",
      descripcion: "2 Subwoofers + Amplificador",
      precioNormal: 1200.00,
      precioCombo: 999.99,
      ahorro: 200.01,
      imagen: "https://m.media-amazon.com/images/I/61BnzA5stxL._AC_UF894,1000_QL80_.jpg",
      productos: ["2 Subwoofers Kicker 12\"", "Amplificador mono 2000W"]
    },
    {
      id: 6,
      nombre: "Combo Completo Car Audio",
      descripcion: "Sistema completo 4 vías",
      precioNormal: 1800.00,
      precioCombo: 1499.99,
      ahorro: 300.01,
      imagen: "https://geniusaudiopanama.com/cdn/shop/files/Combo_C3JUL-0041-1web_1000x.jpg?v=1721765499",
      productos: ["Radio touchscreen", "4 Bocinas", "Amplificador", "Subwoofer"]
    },
  ]

  const calcularPorcentajeAhorro = (ahorro: number, precioNormal: number) => {
    return Math.round((ahorro / precioNormal) * 100)
  }

  return (
    <section id="combos" className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Promociones y Combos</h2>
          <p className="text-sm text-slate-600 mt-2">
            Ahorra con nuestros paquetes especiales diseñados para ti
          </p>
        </div>

        <div className="relative px-12">
          <Carousel
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {combos.map((combo) => (
                <CarouselItem
                  key={combo.id}
                  className="basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                    <div className="relative">
                      <Badge className="absolute top-3 right-3 bg-red-500 text-white font-bold z-10">
                        Ahorra {calcularPorcentajeAhorro(combo.ahorro, combo.precioNormal)}%
                      </Badge>
                      <img
                        src={combo.imagen}
                        alt={combo.nombre}
                        className="w-full h-48 object-cover"
                      />
                    </div>

                    <CardHeader className="pb-3">
                      <h3 className="font-bold text-xl">{combo.nombre}</h3>
                      <p className="text-sm text-slate-600">{combo.descripcion}</p>
                    </CardHeader>

                    <CardContent className="flex-1 space-y-3">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-slate-700">Incluye:</p>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {combo.productos.map((producto, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{producto}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 border-t">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-blue-600">
                            Q{combo.precioCombo.toFixed(2)}
                          </span>
                          <span className="text-sm text-slate-500 line-through">
                            Q{combo.precioNormal.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-green-600 mt-1">
                          Ahorras: Q{combo.ahorro.toFixed(2)}
                        </p>
                      </div>
                    </CardContent>

                    <CardFooter className="pt-0">
                      <Button 
                        className="w-full" 
                        size="lg"
                        onClick={() => handleWhatsappCombo(combo)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Agregar al carrito
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious  />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}