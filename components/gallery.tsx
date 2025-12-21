import Image from "next/image"

export function Gallery() {
  const images = [
    { src: "/modern-gym-interior-with-weights-and-equipment.jpg", alt: "Interior del gimnasio" },
    { src: "/boxing-ring-with-punching-bags-in-gym.jpg", alt: "Área de boxeo" },
    { src: "/kickboxing-training-class-in-gym.jpg", alt: "Clase de kickboxing" },
    { src: "/gym-equipment-dumbbells-and-machines.jpg", alt: "Equipamiento" },
    { src: "/personal-trainer-helping-client-in-gym.jpg", alt: "Entrenamiento personal" },
    { src: "/group-fitness-class-in-modern-gym.jpg", alt: "Clases grupales" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-video overflow-hidden rounded-lg group">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
