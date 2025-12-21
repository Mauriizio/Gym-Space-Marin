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

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <VideoSection />
      <Pricing />
      <Store />
      <Schedule />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
