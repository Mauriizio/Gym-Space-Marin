export function VideoSection() {
  return (
    <section className="py-12 md:py-20 bg-secondary/30 md:min-h-[calc(100vh-80px)] md:flex md:items-center">
      <div className="mx-auto w-full max-w-6xl lg:max-w-7xl px-4 flex flex-col items-center gap-8 md:gap-10">
        <div className="text-center w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mira <span className="text-primary">Space Marine</span> en Acción
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Descubre el ambiente de entrenamiento que te espera</p>
        </div>

        <div className="w-full mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-border max-h-[75vh] shadow-lg lift-on-hover">
            <video
              src="/galeria/vid.mp4"
              controls
              preload="metadata"
              className="w-full h-full object-contain object-center bg-black"
              poster="/galeria/box 11.png"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
