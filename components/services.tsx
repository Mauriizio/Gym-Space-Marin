import { Dumbbell, Swords, Award, Building } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: "Gimnasio",
      description:
        "Equipamiento de última generación para entrenamientos de fuerza, cardio y funcional. Entrenadores certificados a tu disposición.",
    },
    {
      icon: Swords,
      title: "Club de Boxeo",
      description:
        "Aprende las técnicas del noble arte del boxeo con Felipe Sáez, entrenador certificado en México por el INAF (Instituto Internacional de Acondicionamiento Físico y Nutrición Deportiva).",
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            En Space Marine ofrecemos entrenamientos completos para que alcances tus metas fitness
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm">
              <Award className="w-4 h-4 mr-2" />
              Aprobado por IND
            </Badge>
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm">
              <Building className="w-4 h-4 mr-2" />
              Inscrito en Municipalidad de Puente Alto
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
