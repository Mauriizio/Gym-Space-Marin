import { Dumbbell, Swords, Award, Building, UserRoundCheck } from "lucide-react"
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
    {
      icon: UserRoundCheck,
      title: "Personal Trainer",
      description:
        "Planes personalizados para esculpir tu físico, mejorar tu condición y acompañarte paso a paso hacia tus objetivos individuales.",
    },
  ]

  return (
    <section
      id="servicios"
     className="py-16 md:py-20 bg-gradient-to-b from-secondary/30 via-background/60 to-secondary/20 min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex items-center"
    >
      <div className="container mx-auto px-4 w-full">
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
             <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm">
              <Swords className="w-4 h-4 mr-2" />
              Atletas que compiten a nivel nacional
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
