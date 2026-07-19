import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import { Users, Zap } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function AboutPage() {
  return (
    <>
  <div id="about-info" data-section="about-info">
    <SectionErrorBoundary name="about-info">
          <AboutTextSplit
      title="Our Family Mission"
      descriptions={[
        "VoltFamily was born from a simple belief: transportation should be clean, fast, and accessible for everyone.",
        "Starting as a small family-owned electrical shop, we transformed our passion for innovation into a network of reliable charging stations.",
        "Today, we are committed to building the infrastructure of the future, supporting our local community, and making the switch to electric simple and worry-free.",
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="Values"
      title="Our Core Philosophy"
      description="We believe in transparency, speed, and sustainability."
      imageSrc="http://img.b2bpic.net/free-photo/nice-small-family-are-together-kitchen-they-planning-cook-something_613910-3144.jpg"
      items={[
        {
          icon: Zap,
          title: "Speed",
          description: "Optimized delivery of charge.",
        },
        {
          icon: Users,
          title: "Community",
          description: "Built for our neighbors.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
