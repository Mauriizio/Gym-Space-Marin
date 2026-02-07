"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const FORM_SUBMIT_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSUBMIT_ENDPOINT || "https://formsubmit.co/ajax/spacemarinegym@gmail.com"

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    servicio: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const response = await fetch(FORM_SUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          telefono: formData.telefono,
          servicio: formData.servicio,
          _subject: "Nuevo contacto desde Space Marine Gym",
          _captcha: "false",
          _template: "table",
        }),
      })

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario")
      }

      setSubmitted(true)
      setFormData({ nombre: "", telefono: "", servicio: "" })
      setTimeout(() => setSubmitted(false), 4000)
    } catch (error) {
      setErrorMessage("No pudimos enviar tu mensaje. Intenta nuevamente en unos minutos.")
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-secondary/20 via-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Contáctanos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Déjanos tus datos y te contactaremos para resolver todas tus dudas
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card border-border lift-on-hover">
          <CardHeader>
            <CardTitle className="text-xl text-foreground text-center">Formulario de Contacto</CardTitle>
            <CardDescription className="text-center">Tus datos llegarán directo al correo del entrenador</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-foreground">
                  Nombre
                </Label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  required
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Correo electrónico
                </Label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="+56 9 1234 5678"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  required
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="servicio" className="text-foreground">
                  Servicio de interés
                </Label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                  className="w-full rounded-md border border-border bg-secondary text-foreground px-3 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="" disabled>
                    Selecciona un servicio
                  </option>
                  <option>Gym Mensual</option>
                  <option>Gym Semestral</option>
                  <option>Gym Anual</option>
                  <option>Club de Boxeo</option>
                  <option>Combo Completo</option>
                  <option>Personal Trainer</option>
                </select>
              </div>

              {submitted && (
                <p className="text-sm text-center text-green-500">¡Mensaje enviado! Te responderemos pronto.</p>
              )}

              {errorMessage && <p className="text-sm text-center text-red-500">{errorMessage}</p>}

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.01] transition-transform"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar mensaje
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
