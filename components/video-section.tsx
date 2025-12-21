import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mira <span className="text-primary">Space Marine</span> en Acción
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Descubre el ambiente de entrenamiento que te espera</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-card border border-border">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/epic-gym-training-video-thumbnail-with-boxing-and-.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-20 h-20 p-0"
                aria-label="Reproducir video"
              >
                <Play className="w-10 h-10 ml-1" />
              </Button>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-foreground text-sm md:text-base">
                Video próximamente - ¡Visítanos para vivir la experiencia!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
