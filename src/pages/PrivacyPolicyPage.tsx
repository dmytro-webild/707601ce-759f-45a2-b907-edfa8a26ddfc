import PolicyContent from "@/components/sections/legal/PolicyContent";

export default function PrivacyPolicyPage() {
  return (
    <>
      <div data-webild-section="PolicyContent"><PolicyContent
        title="Privacy Policy"
        subtitle="J&E Technologies"
        sections={[{"heading":"Policy Details","content":[{"type":"paragraph","text":"J&E Technologies respects your privacy and is committed to protecting your personal information. We collect and use information only to provide, improve, and support our EV charging services, respond to inquiries, and enhance your experience.

We do not sell your personal information. Any information collected is handled responsibly and shared only when necessary to operate our services, provide support, or comply with legal obligations.

By using our website or services, you agree to this Privacy Policy. If you have any questions about your information, please contact J&E Technologies."}]}]}
      /></div>
    </>
  );
}
