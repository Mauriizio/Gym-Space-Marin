import { NextResponse } from "next/server"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const nombre = String(body.nombre ?? "").trim()
    const telefono = String(body.telefono ?? "").trim()
    const email = String(body.email ?? "").trim().toLowerCase()
    const servicio = String(body.servicio ?? "").trim()
    const mensaje = String(body.mensaje ?? "").trim()

    if (!nombre || !telefono || !email || !servicio || !mensaje) {
      return NextResponse.json({ error: "Todos los campos son obligatorios." }, { status: 400 })
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "El correo electrónico no es válido." }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_TO_EMAIL
    const from = process.env.CONTACT_FROM_EMAIL ?? "Formulario Web <onboarding@resend.dev>"

    if (!apiKey || !to) {
      return NextResponse.json(
        {
          error:
            "Faltan variables de entorno para el envío de correos. Configura RESEND_API_KEY y CONTACT_TO_EMAIL.",
        },
        { status: 500 },
      )
    }

    const subject = `Nuevo contacto web - ${servicio}`
    const html = `
      <h2>Nuevo mensaje desde el formulario web</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Servicio de interés:</strong> ${servicio}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje.replace(/\n/g, "<br />")}</p>
    `

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        html,
      }),
    })

    if (!resendResponse.ok) {
      const data = await resendResponse.text()
      return NextResponse.json(
        { error: "No se pudo enviar el correo", details: data },
        { status: resendResponse.status },
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Ocurrió un error al procesar el formulario." }, { status: 500 })
  }
}