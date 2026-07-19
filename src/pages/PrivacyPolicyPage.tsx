import PolicyContent from "@/components/sections/legal/PolicyContent";

export default function PrivacyPolicyPage() {
  return (
    <>
      <div data-webild-section="PolicyContent"><PolicyContent
        title="Privacy Policy"
        subtitle="J&E Technologies"
        sections={[{"heading":"Policy Details","content":[{"type":"paragraph","text":"At J&E Technologies, we respect your privacy and are committed to protecting your personal information. We collect and use information only to provide, improve, and support our EV charging services, respond to inquiries, and enhance your customer experience.

We do not sell your personal information. Any information you provide is handled responsibly and may only be shared with trusted service providers when necessary to operate our business, maintain our services, or comply with legal requirements.

We are committed to creating a safe, transparent, and inclusive experience for all customers. If you have questions about how your information is handled, please contact our support team."}]}]}
      /></div>
    </>
  );
}
