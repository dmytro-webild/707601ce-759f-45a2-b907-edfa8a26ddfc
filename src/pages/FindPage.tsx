import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function FindPage() {
  return (
    <>
  <div id="find-charger-map" data-section="find-charger-map">
    <SectionErrorBoundary name="find-charger-map">
          <FeaturesRevealCardsBento
      tag="Interactive Map"
      title="Locate Your Station"
      description="Explore our interactive map to find the nearest charger to you."
      items={[
        {
          title: "Downtown Hub",
          description: "High-speed charging, open 24/7.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-battery-charge-level-diminishing-icons_107791-17178.jpg",
        },
        {
          title: "Westside Station",
          description: "Level 2 chargers near local retail.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-environment-project-scene_23-2148896033.jpg",
        },
        {
          title: "Airport Terminal",
          description: "Reliable fast chargers for long travel.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-choosing-charging-options_23-2149530106.jpg",
        },
        {
          title: "Community Park",
          description: "Ideal for quick afternoon top-offs.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-electric-car-france_23-2149169764.jpg",
        },
        {
          title: "Tech Center",
          description: "High-speed charging for business needs.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-vector/electric-car-infographics_23-2148003576.jpg",
        },
        {
          title: "Shopping Mall",
          description: "Multi-connector stations for convenience.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-vector/renewable-energy-logo-design_23-2150011443.jpg",
        },
        {
          title: "Interstate Rest",
          description: "Ultrafast chargers for road travelers.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/cybersecurity-concept-illustration_23-2151883575.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Scale"
      title="Growing Daily"
      description="We are expanding our network every week."
      metrics={[
        {
          value: "12",
          title: "New Locations",
          features: [
            "Upcoming",
            "Fast Charge",
          ],
        },
        {
          value: "50k",
          title: "Total Charges",
          features: [
            "Verified",
            "Trusted",
          ],
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
