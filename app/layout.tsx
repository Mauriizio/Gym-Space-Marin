import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"



const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Space Marine Gym & Club de Boxeo | Puente Alto",
  description:
    "Space Marine Gym y Club de Boxeo en Puente Alto. Entrenamiento de gimnasio y boxeo profesional con Felipe Sáez, certificado INAF. Aprobado por IND. Mensualidad $25.000 CLP. Aceptamos tarjetas.",
  keywords: "gimnasio, gym, boxeo, club de boxeo, artes marciales, puente alto, space marine, IND, INAF",
}

export const viewport = {
  themeColor: "#0a1628",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16.png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon-180.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}       
      </body>
    </html>
  )
}
