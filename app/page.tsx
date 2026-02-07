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
  return (
    <main className="min-h-screen bg-background">
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
  )
}
