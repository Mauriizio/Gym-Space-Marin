"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío - en producción conectar con backend
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Abrir WhatsApp con los datos del formulario
    const message = `Hola, soy ${formData.nombre}. Mi teléfono es ${formData.telefono}. Quiero más información sobre Space Marine Gym.`
    window.open(`https://wa.me/56990758022?text=${encodeURIComponent(message)}`, "_blank")

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ nombre: "", telefono: "" })

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Contáctanos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Déjanos tus datos y te contactaremos para resolver todas tus dudas
          </p>
        </div>

        <Card className="max-w-md mx-auto bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground text-center">Formulario de Contacto</CardTitle>
            <CardDescription className="text-center">Te responderemos lo antes posible</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-foreground">
                  Nombre
                </Label>
                <Input
                  id="nombre"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  required
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono" className="text-foreground">
                  Teléfono
                </Label>
                <Input
                  id="telefono"
                  type="tel"
                  placeholder="+56 9 1234 5678"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  required
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : submitted ? (
                  "¡Enviado!"
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
