"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Droplets, Zap, FlaskConical, Package, ShoppingCart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Store() {
  const whatsappUrl =
    "https://wa.me/56990758022?text=Hola%20quiero%20comprar%20Creatina%20Monohidrato%20Space%20Marin"

  const [creatineIndex, setCreatineIndex] = useState(0)
  const creatineImages = [
    {
      src: "/images/creatina-frontal.jpg",
      alt: "Creatina Monohidrato Space Marin - Vista frontal",
      label: "Vista frontal",
    },
    {
      src: "/images/creatina-trasera.jpg",
      alt: "Creatina Monohidrato Space Marin - Vista posterior",
      label: "Vista posterior",
    },
  ]
  const activeCreatineImage = creatineImages[creatineIndex]
  const handleCreatinePrev = () => {
    setCreatineIndex((prev) => (prev - 1 + creatineImages.length) % creatineImages.length)
  }
  const handleCreatineNext = () => {
    setCreatineIndex((prev) => (prev + 1) % creatineImages.length)
  }

  const products = [
    {
      icon: Droplets,
      title: "Bebestibles",
      description: "Agua, bebidas energizantes y más para mantenerte hidratado durante tu entrenamiento.",
      background: "url('/galeria/box 3.png')",
    },
    {
      icon: FlaskConical,
      title: "Dosis de Suplementos",
      description:
        "Proteína, Pre-entreno y Creatina en dosis individuales. Ideal para probar o entrenamientos puntuales.",
      background: "url('/galeria/box 1.png')",
    },
    {
      icon: Package,
      title: "Potes Completos",
      description: "Adquiere tus suplementos favoritos en presentación completa: Proteína, Pre-entreno y Creatina.",
      background: "url('/galeria/box 9.png')",
    },
    {
      icon: Zap,
      title: "Energizantes",
      description: "Bebidas energéticas para potenciar tu rendimiento y mantener la energía al máximo.",
      background: "url('/galeria/box 6.png')",
    },
  ]

  return (
    <section id="tienda" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestra <span className="text-primary">Tienda</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dentro del gym encontrarás todo lo que necesitas para complementar tu entrenamiento
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-stretch max-w-6xl mx-auto">
          <Card className="relative h-full overflow-hidden border-primary/30 bg-gradient-to-br from-background via-background to-secondary/40 shadow-lg">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_55%)]" />
            <CardHeader className="relative z-10 space-y-2">
              <CardTitle className="text-2xl md:text-3xl text-foreground">
                Creatina Monohidrato <span className="text-primary">Space Marin</span>
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Producto registrado y legal de la casa. Potencia tu fuerza, recuperación y rendimiento con nuestra
                creatina oficial.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <div className="relative h-72 overflow-hidden rounded-xl border border-border/60 bg-muted/40 sm:h-80">
                  <Image
                    src={activeCreatineImage.src}
                    alt={activeCreatineImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-y-0 flex w-full items-center justify-between px-3">
                    <button
                      type="button"
                      onClick={handleCreatinePrev}
                      className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm ring-1 ring-border backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
                      aria-label="Ver creatina anterior"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleCreatineNext}
                      className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm ring-1 ring-border backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
                      aria-label="Ver creatina siguiente"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <p className="text-sm font-medium text-muted-foreground">{activeCreatineImage.label}</p>
              </div>
              <div className="flex h-full flex-col justify-between gap-6">
                <div className="space-y-3 rounded-xl border border-border/60 bg-background/70 p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground">Beneficios clave</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Aumenta la potencia en entrenamientos de alta intensidad.</li>
                    <li>• Mejora la recuperación muscular y el rendimiento diario.</li>
                    <li>• Fabricada para atletas Space Marin, con respaldo profesional.</li>
                  </ul>
                </div>
                <Button asChild size="lg" className="w-full">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    <ShoppingCart className="h-4 w-4" />
                    Comprar por WhatsApp
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground">
                  Coordinamos despacho y disponibilidad directamente contigo vía WhatsApp.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid h-full gap-5">
            <div className="rounded-2xl border border-border/60 bg-background/70 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">Otros productos y servicios</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Mantén tu entrenamiento completo con nuestra selección en tienda.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {products.map((product, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden bg-card border-border/60 transition-colors group text-left"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity group-hover:opacity-30"
                    style={{ backgroundImage: product.background }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background/90" />
                  <CardHeader className="relative z-10">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <product.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base text-foreground">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-muted-foreground text-sm">
                      {product.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            Consulta precios y disponibilidad directamente en el gym o por WhatsApp
          </p>
        </div>
      </div>
    </section>
  )
}
