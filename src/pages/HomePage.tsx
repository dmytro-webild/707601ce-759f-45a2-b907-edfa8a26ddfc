import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import HeroBrand from '@/components/sections/hero/HeroBrand';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBrand
      brand="Powering the Future of Electric Mobility"
      description="Your trusted family-owned partner for reliable, sustainable, and innovative EV charging solutions across the community."
      primaryButton={{
        text: "Find a Charger",
        href: "/find",
      }}
      secondaryButton={{
        text: "Contact Us",
        href: "/contact",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/woman-holding-car-charger-electric-vehicle-charging-station_107420-94919.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features-grid" data-section="features-grid">
    <SectionErrorBoundary name="features-grid">
          <FeaturesBentoGrid
      tag="Why Choose J&E Technologies?
"
      title="Unmatched Reliability and Service"
      description="Built on family values and a vision for a cleaner, sustainable tomorrow."
      features={[
        {
          title: "Lightning Speed",
          description: "High-powered charging stations minimizing your wait time.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-electric-car-charging-spot_23-2149530083.jpg",
        },
        {
          title: "100% Sustainable",
          description: "Powered entirely by certified renewable energy sources.",
          imageSrc: "http://img.b2bpic.net/free-photo/solar-panel-icon-renewable-energy-symbol_53876-167295.jpg",
        },
        {
          title: "Community Focus",
          description: "Local support and reliable service you can always count on.",
          imageSrc: "http://img.b2bpic.net/free-photo/favorite-star-icon-sign-symbol-button-blue-speech-bubble-white-background-3d-rendering_56104-1179.jpg",
        },
        {
          title: "Smart Connectivity",
          description: "Real-time status updates and simple charging control.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-charging-electric-car_23-2149530093.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>


  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Common Questions"
      title="Charging Explained"
      description="Your quick guide to our charging technology."
      categories={[
        {
          name: "General",
          items: [
            {
              question: "What charger types do you support?",
              answer: "We support J1772, CCS, and NACS (Tesla) standards.",
            },
            {
              question: "How do I pay?",
              answer: "Use our simple app or pay via credit card at the station.",
            },
          ],
        },
        {
          name: "Sustainability",
          items: [
            {
              question: "Is my energy green?",
              answer: "Yes, 100% of our energy is sourced from verified solar and wind farms.",
            },
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Impact Driven"
      title="Charging Metrics"
      description="Quantifiable data behind our commitment to excellence."
      metrics={[
        {
          value: "500+",
          title: "Active Chargers",
          features: [
            "High Speed",
            "Reliable Uptime",
          ],
        },
        {
          value: "100%",
          title: "Renewable Energy",
          features: [
            "Solar Sourced",
            "Wind Powered",
          ],
        },
        {
          value: "24/7",
          title: "Community Support",
          features: [
            "Local Experts",
            "Real-time Help",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
