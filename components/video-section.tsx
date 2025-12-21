export function VideoSection() {
  return (
    <section className="py-16 md:py-20 bg-secondary/30 min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex items-center">
      <div className="container mx-auto px-4 w-full flex flex-col gap-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mira <span className="text-primary">Space Marine</span> en Acción
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Descubre el ambiente de entrenamiento que te espera</p>
        </div>

          <div className="max-w-4xl mx-auto w-full">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-card border border-border max-h-[60vh]">
            <video
              src="/galeria/vid.mp4"
              controls
              preload="metadata"
             className="w-full h-full object-contain bg-black"
              poster="/galeria/box 11.png"
            />
             <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
