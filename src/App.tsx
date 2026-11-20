import { ApproachSection } from "@/components/blocks/approach-section"
import { CasesSection } from "@/components/blocks/cases-section"
import { ContactSection } from "@/components/blocks/contact-section"
import { FaqSection } from "@/components/blocks/faq-section"
import { FooterSection } from "@/components/blocks/footer-section"
import { HeroSection } from "@/components/blocks/hero-section"
import { ServicesSection } from "@/components/blocks/services-section"
import { TeamSection } from "@/components/blocks/team-section"
import { TestimonialsSection } from "@/components/blocks/testimonials-section"

export default function App() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <CasesSection />
      <TestimonialsSection />
      <TeamSection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
