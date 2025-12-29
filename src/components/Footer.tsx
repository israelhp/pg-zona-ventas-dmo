import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Zona de Ventas GT</h3>
            <p className="text-sm text-slate-300">
              Audio, DJ y car media de las mejores marcas.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Enlaces</h4>
            <nav className="space-y-2 text-sm text-slate-300">
              <a className="block hover:text-white" href="#marcas">Marcas</a>
              <a className="block hover:text-white" href="#combos">Promociones</a>
              <a className="block hover:text-white" href="#productos">Productos</a>
              <a className="block hover:text-white" href="#contacto">Contacto</a>
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Contacto</h4>
            <div className="flex items-start gap-2 text-sm text-slate-300">
              <Phone className="h-4 w-4 mt-0.5" />
              <a href="tel:+50212345678" className="hover:text-white">+502 1234 5678</a>
            </div>
            <div className="flex items-start gap-2 text-sm text-slate-300">
              <Mail className="h-4 w-4 mt-0.5" />
              <a href="mailto:contacto@zonadeventasgt.com" className="hover:text-white">
                contacto@zonadeventasgt.com
              </a>
            </div>
            <div className="flex items-start gap-2 text-sm text-slate-300">
              <MapPin className="h-4 w-4 mt-0.5" />
              <span>10a Avenida 15-25, Zona 10<br />Ciudad de Guatemala</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Síguenos</h4>
            <div className="flex gap-3 text-slate-300">
              <a aria-label="Facebook" className="hover:text-white" href="https://facebook.com"> <Facebook className="h-5 w-5" /> </a>
              <a aria-label="Instagram" className="hover:text-white" href="https://instagram.com"> <Instagram className="h-5 w-5" /> </a>
              <a aria-label="Twitter" className="hover:text-white" href="https://twitter.com"> <Twitter className="h-5 w-5" /> </a>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-800" />

        <div className="flex flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Zona de Ventas GT. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <a className="hover:text-white" href="#privacidad">Política de privacidad</a>
            <a className="hover:text-white" href="#terminos">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  )
}