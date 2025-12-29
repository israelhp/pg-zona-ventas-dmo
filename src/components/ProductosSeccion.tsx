import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"

const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE

interface Producto {
  id: number
  nombre: string
  descripcion: string
  precio: number
  imagen: string
  categoria: string
  rating: number
  reviews: number
  badge?: string
  badgeType?: "descuento" | "nuevo"
  precioAnterior?: number
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Sony XMS400D",
    descripcion: "Amplificador Mini de 4 Canales",
    precio: 198.00,
    imagen: "https://canada.crutchfieldonline.com/ImageHandler/trim/750/457/products/2016/20/158/g158XMS400D-o.jpg",
    categoria: "Amplificadores",
    rating: 4,
    reviews: 15,
  },
  {
    id: 2,
    nombre: "Sony XMS400D",
    descripcion: "Amplificador Mini de 4 Canales",
    precio: 198.00,
    imagen: "https://canada.crutchfieldonline.com/ImageHandler/trim/750/457/products/2016/20/158/g158XMS400D-o.jpg",
    categoria: "Amplificadores",
    rating: 4,
    reviews: 15,
  },
  {
    id: 3,
    nombre: "Kit de Instalación",
    descripcion: "Kit de Cableado de 0-Gauge",
    precio: 59.99,
    imagen: "https://eurocaraudio.com/wp-content/uploads/2022/06/combo-euro.jpg",
    categoria: "Accesorios",
    rating: 5,
    reviews: 210,
  },
  {
    id: 5,
    nombre: "Kit de Instalación",
    descripcion: "Kit de Cableado de 0-Gauge",
    precio: 59.99,
    imagen: "https://eurocaraudio.com/wp-content/uploads/2022/06/combo-euro.jpg",
    categoria: "Accesorios",
    rating: 5,
    reviews: 210,
  },
  {
    id: 6,
    nombre: "Kit de Instalación",
    descripcion: "Kit de Cableado de 0-Gauge",
    precio: 59.99,
    imagen: "https://geniusaudiopanama.com/cdn/shop/files/Combo_C3JUL-0041-1web_1000x.jpg?v=1721765499",
    categoria: "Accesorios",
    rating: 5,
    reviews: 210,
  },
  {
    id: 7,
    nombre: "Kit de Instalación",
    descripcion: "Kit de Cableado de 0-Gauge",
    precio: 59.99,
    imagen: "https://geniusaudiopanama.com/cdn/shop/files/Combo_C3JUL-0041-1web_1000x.jpg?v=1721765499",
    categoria: "Accesorios",
    rating: 5,
    reviews: 210,
  },
  {
    id: 8,
    nombre: "Sony XMS400D",
    descripcion: "Amplificador Mini de 4 Canales",
    precio: 198.00,
    imagen: "https://canada.crutchfieldonline.com/ImageHandler/trim/750/457/products/2016/20/158/g158XMS400D-o.jpg",
    categoria: "Amplificadores",
    rating: 4,
    reviews: 15,
  },
  {
    id: 9,
    nombre: "Sony XMS400D",
    descripcion: "Amplificador Mini de 4 Canales",
    precio: 198.00,
    imagen: "https://canada.crutchfieldonline.com/ImageHandler/trim/750/457/products/2016/20/158/g158XMS400D-o.jpg",
    categoria: "Amplificadores",
    rating: 4,
    reviews: 15,
  },
]

const handleWhatsappProducto = (producto: typeof productos[0]) => {
  const mensaje = `Hola, me interesa el producto:\n\n${producto.nombre}\nDescripción: ${producto.descripcion}\nPrecio: Q${producto.precio.toFixed(2)}\n\n¿Puedes brindarme más información?`
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(mensaje)}`
  window.open(url, "_blank")
}

export default function ProductosSeccion() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string[]>(["Altavoces"])
  const [precioSeleccionado, setPrecioSeleccionado] = useState<string>("")
  const [paginaActual, setPaginaActual] = useState(1)
  const productosPorPagina = 6

  const categorias = ["Subwoofers", "Altavoces", "Amplificadores", "Receptores"]
  const rangosPrecios = [
    { label: "Menos de Q100", value: "0-100" },
    { label: "Q100 - Q300", value: "100-300" },
    { label: "Q300 - Q500", value: "300-500" },
    { label: "Q500+", value: "500+" },
  ]

  const handleCategoriaChange = (categoria: string) => {
    setCategoriaSeleccionada(prev =>
      prev.includes(categoria)
        ? prev.filter(c => c !== categoria)
        : [...prev, categoria]
    )
  }

  const limpiarFiltros = () => {
    setCategoriaSeleccionada([])
    setPrecioSeleccionado("")
  }

  const productosFiltrados = productos.filter(producto => {
    const cumpleCategoria = categoriaSeleccionada.length === 0 || categoriaSeleccionada.includes(producto.categoria)
    
    let cumplePrecio = true
    if (precioSeleccionado) {
      const [min, max] = precioSeleccionado.split("-").map(p => p === "+" ? Infinity : parseFloat(p))
      cumplePrecio = producto.precio >= min && producto.precio < max
    }

    return cumpleCategoria && cumplePrecio
  })

  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina)
  const indiceInicio = (paginaActual - 1) * productosPorPagina
  const productosPaginados = productosFiltrados.slice(indiceInicio, indiceInicio + productosPorPagina)

  return (
    <section id="productos" className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Productos Destacados</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filtros */}
          <aside className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">Filtros</h3>
                  <Button variant="ghost" size="sm" onClick={limpiarFiltros}>
                    Limpiar todo
                  </Button>
                </div>

                {/* Categorías */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-slate-700">CATEGORÍA</h4>
                  {categorias.map(categoria => (
                    <div key={categoria} className="flex items-center space-x-2">
                      <Checkbox
                        id={categoria}
                        checked={categoriaSeleccionada.includes(categoria)}
                        onCheckedChange={() => handleCategoriaChange(categoria)}
                      />
                      <Label htmlFor={categoria} className="text-sm cursor-pointer">
                        {categoria}
                      </Label>
                    </div>
                  ))}
                </div>

                {/* Rango de precio */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-slate-700">RANGO DE PRECIO</h4>
                  <RadioGroup value={precioSeleccionado} onValueChange={setPrecioSeleccionado}>
                    {rangosPrecios.map(rango => (
                      <div key={rango.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={rango.value} id={rango.value} />
                        <Label htmlFor={rango.value} className="text-sm cursor-pointer">
                          {rango.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Grid de productos */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productosPaginados.map(producto => (
                <Card key={producto.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    {producto.badge && (
                      <Badge
                        className={`absolute top-2 right-2 Q{
                          producto.badgeType === "descuento"
                            ? "bg-red-500"
                            : "bg-blue-500"
                        }`}
                      >
                        {producto.badge}
                      </Badge>
                    )}
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-4 space-y-2">
                    <h3 className="font-bold text-lg">{producto.nombre}</h3>
                    <p className="text-sm text-slate-600">{producto.descripcion}</p>
                    
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 Q{
                            i < Math.floor(producto.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-slate-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-slate-600 ml-1">({producto.reviews})</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-blue-600">Q{producto.precio}</p>
                      {producto.precioAnterior && (
                        <p className="text-sm text-slate-500 line-through">
                          Q{producto.precioAnterior}
                        </p>
                      )}
                    </div>
                    <Button 
                      size="icon" 
                      variant="outline"
                      onClick={() => handleWhatsappProducto(producto)}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Paginación */}
            {totalPaginas > 1 && (
              <div className="mt-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setPaginaActual(prev => Math.max(1, prev - 1))}
                        className={paginaActual === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    {Array.from({ length: totalPaginas }).map((_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink
                          onClick={() => setPaginaActual(i + 1)}
                          isActive={paginaActual === i + 1}
                          className="cursor-pointer"
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => setPaginaActual(prev => Math.min(totalPaginas, prev + 1))}
                        className={paginaActual === totalPaginas ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}