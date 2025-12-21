import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
   <section className="relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex items-center justify-center pt-20 md:pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/galeria/box 9.png"
          alt="Entrenamiento en Space Marine Gym"
          fill
          priority
          quality={90}
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/60 to-background/90" />
        <div className="absolute inset-0 bg-gradient-radial from-background/30 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-pulse">
            <Image
              src="/images/image.png"
              alt="Space Marine Gym Logo"
              width={300}
              height={300}
              className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain drop-shadow-[0_0_30px_rgba(212,168,75,0.3)]"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-display">
            Club de Boxeo <span className="text-primary">Space Marine</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Boxeo de alto rendimiento • Gimnasio completo
          </p>

          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mb-8">
             Vive la experiencia de un club de boxeo enfocado en técnica y disciplina, con el respaldo de un gym
            equipado para fortalecer tu desempeño y tu físico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              asChild
            >
              <a
                href="https://wa.me/56990758022?text=Hola%20quiero%20inscribirme%20en%20Space%20Marine%20Gym"
                target="_blank"
                rel="noopener noreferrer"
              >
                ¡Quiero Inscribirme!
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 bg-transparent"
              asChild
            >
              <a href="#servicios">Conocer Más</a>
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#servicios" aria-label="Scroll down">
              <ChevronDown className="w-8 h-8 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
