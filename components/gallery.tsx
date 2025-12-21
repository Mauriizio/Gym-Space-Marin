import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Gallery() {
  const images = [
    { src: "/galeria/box 1.png", alt: "Entrenamiento 1" },
    { src: "/galeria/box 11.png", alt: "Club de Box" },
    { src: "/galeria/box 8.png", alt: "Clases grupales" },
    { src: "/galeria/box 6.png", alt: "Entrenamiento 2" },
    { src: "/galeria/box 3.png", alt: "Entrenamiento personal" },
    { src: "/galeria/box 10.png", alt: "Entrenamiento 3" },
  ]

  return (
    <section id="galeria" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestra <span className="text-primary">Galería</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conoce nuestras instalaciones y únete a la familia Space Marine
          </p>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <button
                  type="button"
                   className="group relative overflow-hidden rounded-xl bg-muted/40 shadow-sm min-h-[340px] sm:min-h-[420px] lg:min-h-[480px]"
                  aria-label={`Ver ${image.alt}`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-[95vw] sm:w-full p-4 sm:p-6">
                <DialogHeader>
                  <DialogTitle>{image.alt}</DialogTitle>
                </DialogHeader>
                <div className="relative w-full h-[65vh] sm:h-[70vh]">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    sizes="100vw"
                   className="object-contain rounded-md bg-black"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
