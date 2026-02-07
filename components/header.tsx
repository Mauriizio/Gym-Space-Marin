"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#galeria", label: "Galería" },
    { href: "#precios", label: "Precios" },
    { href: "#horarios", label: "Horarios" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/image.png"
              alt="Space Marine Gym Logo"
              width={50}
              height={50}
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <span className="text-primary font-bold text-lg md:text-xl">SPACE MARINE</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6" aria-label="Principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a
                href="https://wa.me/56990758022?text=Hola%20quiero%20inscribirme%20en%20Space%20Marine%20Gym"
                target="_blank"
                rel="noopener noreferrer"
              >
                ¡Inscríbete Ahora!
              </a>
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4" aria-label="Principal">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2">
                <a
                  href="https://wa.me/56990758022?text=Hola%20quiero%20inscribirme%20en%20Space%20Marine%20Gym"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ¡Inscríbete Ahora!
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
