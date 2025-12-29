import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Marcas", href: "#marcas" },
    { label: "Promociones (Combos)", href: "#combos" },
    { label: "Productos", href: "#productos" },
    { label: "Contacto", href: "#contacto" },
  ]

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Nombre de la empresa */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-slate-900">Zona de Ventas GT</h1>
          </div>

          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Menú móvil */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Menú desplegable móvil */}
        {isOpen && (
          <div className="md:hidden border-t">
            <div className="space-y-1 px-2 py-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar