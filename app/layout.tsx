import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Orbitron, Rajdhani } from "next/font/google"
import { ScrollToTopOnLoad } from "@/components/scroll-to-top"
import "./globals.css"



const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700", "800"] })
const rajdhani = Rajdhani({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600", "700"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://spacemarinegym.cl"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Space Marine Gym & Club de Boxeo | Puente Alto",
    template: "%s | Space Marine Gym",
  },
  description:
    "Space Marine Gym y Club de Boxeo en Puente Alto. Entrenamiento de gimnasio y boxeo profesional con Felipe Sáez, certificado INAF. Aprobado por IND. Mensualidad $25.000 CLP. Aceptamos tarjetas.",
  keywords: "gimnasio, gym, boxeo, club de boxeo, artes marciales, puente alto, space marine, IND, INAF",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Space Marine Gym & Club de Boxeo | Puente Alto",
    description:
      "Entrena en Space Marine Gym: gimnasio completo, club de boxeo profesional y planes accesibles en Puente Alto.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og/og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Space Marine Gym & Club de Boxeo en Puente Alto",
      },
    ],
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Space Marine Gym & Club de Boxeo | Puente Alto",
    description:
      "Entrena en Space Marine Gym: gimnasio completo, club de boxeo profesional y planes accesibles en Puente Alto.",
    images: ["/og/og-1200x630.png"],
  },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16.png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon-180.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${orbitron.variable} ${rajdhani.variable} font-sans antialiased`}>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>
        <ScrollToTopOnLoad />
        {children}     
      </body>
    </html>
  )
}
