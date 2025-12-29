import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactoSeccion() {
  return (
    <section id="contacto" className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-slate-900">Contacto</h2>
          <p className="text-sm text-slate-600">
            Escríbenos o visítanos, estaremos felices de ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="h-full">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-slate-800">Correo</p>
                  <a href="mailto:contacto@zonadeventasgt.com" className="text-sm text-blue-600 hover:underline">
                    contacto@zonadeventasgt.com
                  </a>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-slate-800">Teléfono</p>
                  <a href="tel:+50212345678" className="text-sm text-blue-600 hover:underline">
                    +502 1234 5678
                  </a>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-slate-800">Dirección</p>
                  <p className="text-sm text-slate-600">
                    10a Avenida 15-25, Zona 10<br />Ciudad de Guatemala
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-slate-800">Horario</p>
                  <p className="text-sm text-slate-600">Lunes a Sábado: 9:00 AM - 7:00 PM</p>
                  <p className="text-sm text-slate-600">Domingo: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardContent className="p-0">
              <iframe
                title="Ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.3804!2d-90.513!3d14.6038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM2JzEzLjciTiA5MMKwMzAnNDYuOCJX!5e0!3m2!1ses-419!2sgt!4v0000000000000"
                className="w-full h-[320px] border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}