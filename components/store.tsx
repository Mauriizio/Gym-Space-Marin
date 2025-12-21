import { Droplets, Zap, FlaskConical, Package } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Store() {
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="relative overflow-hidden bg-card border-border hover:border-primary/50 transition-colors group text-center"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"
                style={{ backgroundImage: product.background }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/85" />
              <CardHeader className="relative z-10">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-muted-foreground text-sm">{product.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Consulta precios y disponibilidad directamente en el gym o por WhatsApp
          </p>
        </div>
      </div>
    </section>
  )
}
