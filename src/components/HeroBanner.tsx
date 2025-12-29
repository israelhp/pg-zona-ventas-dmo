import { Button } from "@/components/ui/button"

const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE

const handleWhatsappConsulta = () => {
  const mensaje = "Hola, me interesa conocer más sobre los sistemas de audio para auto. ¿Podrías brindarme más información?"
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(mensaje)}`
  window.open(url, "_blank")
}

export default function HeroBanner() {
  return (
    <section id="inicio" className="w-full px-4 py-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-black shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80"
          alt="Tablero de auto con sistema de audio"
          className="h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center text-white">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Experimenta el sonido en movimiento
          </h1>
          <p className="max-w-3xl text-base sm:text-lg md:text-xl text-white/90">
            Mejora tu viaje con los mejores sistemas de audio para auto. Agudos cristalinos y bajos que estremecen.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={handleWhatsappConsulta}
          >
            Consultar por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}