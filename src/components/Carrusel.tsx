import { Card, CardContent } from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

function Carrusel() {
  const marcas = [
    { name: "Pioneer", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Pioneer_logo.svg/2560px-Pioneer_logo.svg.png" },
    { name: "Denon DJ", img: "https://www.radiocolon.com/archivos/DenonDJauthorised.png" },
    { name: "Numark", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs7RlVt5MkzpaOoT4_Zqv2vcct3N6VC4u01w&s" },
    { name: "Allen&Heath", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6wg98eoxKIwWNz4qsUrwz0vnbQjL7DxsxQ&s" },
    { name: "Hola mundo", img: "https://i0.wp.com/blog.madridhifi.com/wp-content/uploads/2021/02/rane-logo.png?ssl=1" },
    { name: "Otra marca", img: "https://www.microfusa.com/media/wysiwyg/marcas/reloop_dj_1.png" },
    { name: "Marca X", img: "https://www.kirstein.de/out/pictures/master/manufacturer/icon/Omnitronic_2024.jpg" },
    { name: "Marca Y", img: "https://sub-zeromx.com/wp-content/uploads/2022/05/Subzero.png" },
  ]

  return (
    <section id="marcas" className="w-full px-4 sm:px-6 lg:px-8 py-8 space-y-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900">Marcas destacadas</h2>
        <p className="text-sm text-slate-600">
          Conoce nuestras marcas aliadas
        </p>
      </div>

      <Carousel
        plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent>
          {marcas.map((marca, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
            >
              <div className="p-1">
                <Card className="overflow-hidden h-40">
                  <CardContent className="p-0 h-full flex items-center justify-center">
                    <img
                      src={marca.img}
                      alt={marca.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default Carrusel