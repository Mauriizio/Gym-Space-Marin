import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook, CreditCard } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image src="/images/image.png" alt="Space Marine Logo" fill className="object-contain" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/90" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/image.png"
                alt="Space Marine Gym Logo"
                width={60}
                height={60}
                className="w-14 h-14 object-contain"
              />
              <span className="text-primary font-bold text-xl">SPACE MARINE</span>
            </div>
            <p className="text-muted-foreground text-center md:text-left text-sm mb-3">
              Tu gimnasio de confianza en Puente Alto. Gimnasio y Club de Boxeo.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CreditCard className="w-4 h-4 text-primary" />
              <span>Tarjetas de crédito y débito</span>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-foreground font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+56990758022"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+569 9075 8022</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:spacemarinegym@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>spacemarinegym@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Sargento+Menadier+1458+Puente+Alto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Sargento Menadier 1458, Puente Alto</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Enlaces rápidos */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-foreground font-semibold text-lg mb-4">Enlaces</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
                Servicios
              </Link>
              <Link href="#galeria" className="text-muted-foreground hover:text-primary transition-colors">
                Galería
              </Link>
              <Link href="#precios" className="text-muted-foreground hover:text-primary transition-colors">
                Precios
              </Link>
              <Link href="#horarios" className="text-muted-foreground hover:text-primary transition-colors">
                Horarios
              </Link>
              <Link href="#contacto" className="text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
        </div>

        {/* Redes sociales y copyright */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="mailto:spacemarinegym@gmail.com"
                className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                aria-label="Correo"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>


            </div>
            <p className="text-muted-foreground text-sm text-center">
              © {new Date().getFullYear()} Space Marine Gym & Club de Boxeo. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
