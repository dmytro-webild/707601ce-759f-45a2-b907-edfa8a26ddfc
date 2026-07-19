import PolicyContent from "@/components/sections/legal/PolicyContent";

export default function PrivacyPolicyPage() {
  return (
    <>
      <div data-webild-section="PolicyContent"><PolicyContent
        title="Privacy Policy"
        subtitle="J&E Technologies"
        sections={[{"heading":"Policy Details","content":[{"type":"paragraph","text":"[Enter your Privacy Policy text here. This text box is reserved for your official data collection, usage, and protection guidelines.]"}]}]}
      /></div>
    </>
  );
}
