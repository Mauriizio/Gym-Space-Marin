import { Clock, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Schedule() {
  const scheduleData = [
    { period: "Mañana", time: "10:00 AM - 1:00 PM" },
    { period: "Tarde/Noche", time: "5:00 PM - 10:00 PM" },
  ]

  return (
    <section id="horarios" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros <span className="text-primary">Horarios</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Flexibilidad para que entrenes cuando mejor te convenga
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">Lunes a Viernes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduleData.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border"
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{schedule.period}</span>
                    </div>
                    <span className="text-primary font-semibold">{schedule.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-6 text-sm">Sábados y Domingos: Cerrado</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
