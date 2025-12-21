import { Check, CreditCard } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Pricing() {
  const plans = [
    {
      name: "Gym Mensual",
      price: "25.000",
      period: "/mes",
      description: "Acceso completo al gimnasio",
      popular: false,
      benefits: [
        "Acceso ilimitado al gimnasio",
        "Sin costo de inscripción",
        "Equipamiento completo",
        "Baños disponibles",
        "Balanzas para control de peso",
        "Entrenadores disponibles",
      ],
      whatsappMessage: "Hola%20quiero%20inscribirme%20al%20plan%20Gym%20Mensual%20$25.000",
    },
    {
      name: "Gym Semestral",
      price: "120.000",
      period: "/6 meses",
      description: "Ahorra $30.000 en total",
      popular: true,
      savings: "Ahorra $5.000/mes",
      benefits: [
        "Acceso ilimitado al gimnasio",
        "Sin costo de inscripción",
        "6 meses de entrenamiento",
        "Baños disponibles",
        "Balanzas para control de peso",
        "Entrenadores disponibles",
        "Precio congelado",
      ],
      whatsappMessage: "Hola%20quiero%20el%20plan%20Gym%20Semestral%20$120.000%20(6%20meses)",
    },
    {
      name: "Gym Anual",
      price: "204.000",
      period: "/año",
      description: "La mejor inversión en tu salud",
      popular: false,
      savings: "Ahorra $8.000/mes",
      benefits: [
        "Acceso ilimitado al gimnasio",
        "Sin costo de inscripción",
        "12 meses completos",
        "Baños disponibles",
        "Balanzas para control de peso",
        "Entrenadores disponibles",
        "Mejor precio garantizado",
        "Pago de contado",
      ],
      whatsappMessage: "Hola%20quiero%20el%20plan%20Gym%20Anual%20$204.000%20(pago%20contado)",
    },
  ]

  const boxingPlans = [
    {
      name: "Club de Boxeo",
      price: "25.000",
      period: "/mes",
      description: "Entrenamiento profesional de boxeo",
      benefits: ["Clases de Boxeo", "Entrenador certificado INAF", "Equipamiento incluido", "Aprobado por IND"],
      whatsappMessage: "Hola%20quiero%20inscribirme%20al%20Club%20de%20Boxeo%20$25.000",
    },
    {
      name: "Combo Completo",
      price: "40.000",
      period: "/mes",
      description: "Gym + Club de Boxeo",
      popular: true,
      benefits: [
        "Acceso ilimitado al gimnasio",
        "Clases de Boxeo incluidas",
        "Entrenador certificado INAF",
        "Baños disponibles",
        "Balanzas para control de peso",
        "El mejor valor",
      ],
      whatsappMessage: "Hola%20quiero%20el%20Combo%20Completo%20(Gym%20+%20Boxeo)%20$40.000",
    },
  ]

  return (
    <section
      id="precios"
        className="py-16 md:py-20 bg-gradient-to-b from-secondary/25 via-background to-secondary/20 min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)]"
    >
      <div className="container mx-auto px-4 w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros <span className="text-primary">Planes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            Elige el plan que mejor se adapte a tus objetivos. Sin costos de inscripción ocultos.
          </p>
          <div className="flex items-center justify-center gap-2 text-foreground font-medium">
            <CreditCard className="w-5 h-5 text-primary" />
            <span>Aceptamos tarjetas de crédito y débito</span>
          </div>
        </div>

       <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Membresía Gimnasio</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`bg-card relative overflow-hidden h-full flex flex-col  ${
                  plan.popular ? "border-primary border-2" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                    MÁS POPULAR
                  </div>
                )}
                {plan.savings && (
                  <Badge className="absolute top-0 left-0 bg-green-600 text-white rounded-none rounded-br-lg">
                    {plan.savings}
                  </Badge>
                )}
                <CardHeader className="text-center pt-8 flex flex-col gap-2">
                  <CardTitle className="text-xl text-foreground">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">${plan.price}</span>
                    <span className="text-muted-foreground text-sm"> CLP{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="pb-6 flex flex-col flex-1">
                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-primary" />
                        </div>
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                     className={`w-full mt-auto border ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 border-primary"
                        : "bg-secondary/80 text-foreground border-primary/20 hover:bg-secondary/90"
                    }`}
                    asChild
                  >
                    <a
                      href={`https://wa.me/56990758022?text=${plan.whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Elegir Plan
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Club de Boxeo & Combos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {boxingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`bg-card relative overflow-hidden h-full flex flex-col ${
                  plan.popular ? "border-primary border-2" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                    MEJOR VALOR
                  </div>
                )}
                 <CardHeader className="text-center pt-8 flex flex-col gap-2">
                  <CardTitle className="text-xl text-foreground">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">${plan.price}</span>
                    <span className="text-muted-foreground text-sm"> CLP{plan.period}</span>
                  </div>
                </CardHeader>
    <CardContent className="pb-6 flex flex-col flex-1">
                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-primary" />
                        </div>
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                 <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-auto" asChild>
                    <a
                      href={`https://wa.me/56990758022?text=${plan.whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Inscribirme
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
