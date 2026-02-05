"use client"

import Image from "next/image"
import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type GalleryImage = {
  src: string
  alt: string
}

type GalleryRowProps = {
  title: string
  description: string
  images: GalleryImage[]
}

function GalleryRow({ title, description, images }: GalleryRowProps) {
  const [itemsPerView, setItemsPerView] = useState(3)
  const [startIndex, setStartIndex] = useState(0)
  const lastWheelRef = useRef(0)
  const wheelDeltaRef = useRef(0)

  const visibleImageIndexes = useMemo(
    () =>
      Array.from({ length: itemsPerView }, (_, offset) =>
        (startIndex + offset) % images.length
      ),
    [images, itemsPerView, startIndex]
  )

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)")
    const updateItemsPerView = () => {
      setItemsPerView(mql.matches ? 3 : 1)
    }
    updateItemsPerView()
    mql.addEventListener("change", updateItemsPerView)
    return () => mql.removeEventListener("change", updateItemsPerView)
  }, [])

  useEffect(() => {
    setStartIndex(0)
  }, [images, itemsPerView])

  const canNavigate = images.length > itemsPerView

  const handlePrevious = () => {
    if (!canNavigate) return
    setStartIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    if (!canNavigate) return
    setStartIndex((prev) => (prev + 1) % images.length)
  }

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!canNavigate) return
    const { deltaX, deltaY } = event
    if (Math.abs(deltaX) <= Math.abs(deltaY)) return
    wheelDeltaRef.current += deltaX
    if (Math.abs(wheelDeltaRef.current) < 120) return
    const now = Date.now()
    if (now - lastWheelRef.current < 500) return
    lastWheelRef.current = now
    if (wheelDeltaRef.current > 0) {
      handleNext()
    } else {
      handlePrevious()
    }
    wheelDeltaRef.current = 0
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="relative" onWheel={handleWheel}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleImageIndexes.map((imageIndex) => {
            const image = images[imageIndex]
            return (
              <Dialog key={`${image.src}-${imageIndex}`}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group relative min-h-[320px] overflow-hidden rounded-xl bg-muted/40 shadow-sm sm:min-h-[420px] lg:min-h-[480px]"
                    aria-label={`Ver ${image.alt}`}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      priority={imageIndex < 3}
                    />
                    <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/10" />
                  </button>
                </DialogTrigger>
                <DialogContent className="flex h-[calc(90vh-2rem)] w-[calc(100vw-2rem)] max-w-none flex-col rounded-2xl bg-black/95 p-4 sm:p-6 md:w-[80vw] md:max-w-[80vw] lg:w-[75vw] lg:max-w-[75vw]">
                  <DialogHeader className="sr-only">
                    <DialogTitle>{image.alt}</DialogTitle>
                  </DialogHeader>
                  <div className="relative flex h-full w-full flex-1 items-center justify-center">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            )
          })}
        </div>

        {canNavigate && (
          <div className="pointer-events-none absolute inset-y-0 flex w-full items-center justify-between px-2">
            <button
              type="button"
              onClick={handlePrevious}
              className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-background/70 text-foreground shadow-sm ring-1 ring-border backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
              aria-label={`Ver ${title} anterior`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-background/70 text-foreground shadow-sm ring-1 ring-border backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
              aria-label={`Ver ${title} siguiente`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export function Gallery() {
  const trainingImages: GalleryImage[] = [
    { src: "/galeria/box 1.png", alt: "Entrenamiento 1" },
    { src: "/galeria/box 11.png", alt: "Club de box" },
    { src: "/galeria/box 8.png", alt: "Clases grupales" },
    { src: "/galeria/box 6.png", alt: "Entrenamiento 2" },
    { src: "/galeria/box 3.png", alt: "Entrenamiento personal" },
    { src: "/galeria/box 10.png", alt: "Entrenamiento 3" },
    { src: "/galeria/box 2.png", alt: "Entrenamiento en pareja" },
    { src: "/galeria/box 4.png", alt: "Práctica con costal" },
  ]

  const fightImages: GalleryImage[] = [
    { src: "/peleas/pelea1.png", alt: "Pelea reciente 1" },
    { src: "/peleas/pelea2.png", alt: "Pelea reciente 2" },
    { src: "/peleas/pelea3.png", alt: "Pelea reciente 3" },
    { src: "/peleas/pelea4.png", alt: "Pelea reciente 4" },
    { src: "/peleas/pelea5.png", alt: "Pelea reciente 5" },
    { src: "/peleas/pelea6.png", alt: "Pelea reciente 6" },
    { src: "/peleas/pelea7.png", alt: "Pelea reciente 7" },
  ]

  const gymImages: GalleryImage[] = [
    { src: "/gym/gym1.png", alt: "Areas Gym" },
    { src: "/gym/gym2.png", alt: "Área de sacos" },
    { src: "/gym/gym3.png", alt: "Área de cardio" },
    { src: "/gym/gym4.png", alt: "Zona de pesas" },
    { src: "/gym/gym5.png", alt: "Área de poleas" },
    { src: "/gym/gym6.png", alt: "Área de Practicas" },
  ]

  return (
    <section id="galeria" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Nuestra <span className="text-primary">Galería</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Conoce nuestras instalaciones y únete a la familia Space Marine
          </p>
        </div>

        <div className="space-y-12">
          <GalleryRow
            title="Entrenamientos"
            description="Sesiones de práctica y técnica con nuestros entrenadores"
            images={trainingImages}
          />
          <GalleryRow
            title="Peleas oficiales"
            description="Momentos destacados de nuestros eventos más recientes"
            images={fightImages}
          />
          <GalleryRow
            title="Instalaciones"
            description="Descubre cada rincón del gimnasio Space Marine"
            images={gymImages}
          />
        </div>
      </div>
    </section>
  )
}
