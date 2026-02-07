import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { VideoSection } from "@/components/video-section"
import { Pricing } from "@/components/pricing"
import { Store } from "@/components/store"
import { Schedule } from "@/components/schedule"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Reveal } from "@/components/reveal"

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://spacemarinegym.cl"
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Space Marine Gym & Club de Boxeo",
        url: siteUrl,
        logo: `${siteUrl}/images/image.png`,
        email: "spacemarinegym@gmail.com",
        telephone: "+56990758022",
        sameAs: [
          "https://www.instagram.com/space_marine_gym?utm_source=qr&igsh=dTNlY2h5cGRwcDQ%3D",
          "https://www.tiktok.com/@space_marine_gym?is_from_webapp=1&sender_device=pc",
        ],
      },
      {
        "@type": "WebSite",
        name: "Space Marine Gym & Club de Boxeo",
        url: siteUrl,
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        name: "Space Marine Gym & Club de Boxeo | Puente Alto",
        url: siteUrl,
        description:
          "Gimnasio completo y club de boxeo profesional en Puente Alto. Entrenamiento con Felipe Sáez, certificado INAF.",
        inLanguage: "es-CL",
      },
      {
        "@type": "HealthClub",
        name: "Space Marine Gym & Club de Boxeo",
        url: siteUrl,
        image: `${siteUrl}/og/og-1200x630.png`,
        telephone: "+56990758022",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sargento Menadier 1458",
          addressLocality: "Puente Alto",
          addressRegion: "Región Metropolitana",
          addressCountry: "CL",
        },
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "10:00",
            closes: "22:00",
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: siteUrl,
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="contenido" className="min-h-screen bg-background">
      <Header />
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal delay={100}>
        <Services />
      </Reveal>
      <Reveal delay={150}>
        <Gallery />
      </Reveal>
      <Reveal delay={200}>
        <VideoSection />
      </Reveal>
      <Reveal delay={250}>
        <Pricing />
      </Reveal>
      <Reveal delay={300}>
        <Store />
      </Reveal>
      <Reveal delay={350}>
        <Schedule />
      </Reveal>
      <Reveal delay={400}>
        <ContactForm />
      </Reveal>
      <Reveal delay={450}>
        <Footer />
      </Reveal>
      <WhatsAppButton />
      </main>
    </>
  )
}
