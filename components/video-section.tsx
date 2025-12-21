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

         <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-card border border-border">
            <video
              src="/galeria/vid.mp4"
              controls
              preload="metadata"
              className="w-full h-full object-cover"
              poster="/galeria/box 11.png"
            />
             <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
