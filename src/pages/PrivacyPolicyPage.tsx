import PolicyContent from "@/components/sections/legal/PolicyContent";

export default function PrivacyPolicyPage() {
  return (
    <>
      <div data-webild-section="PolicyContent"><PolicyContent
        title="Privacy Policy"
        subtitle="J&E Technologies"
        sections={[{"heading":"Policy Details","content":[{"type":"paragraph","text":"We respect your privacy and are committed to protecting your personal information. We collect and use information only to provide, improve, and support our EV charging services, respond to inquiries, and enhance your experience. We do not sell your personal information. Any information collected is handled responsibly and shared only when necessary to operate our services, provide support, or comply with legal obligations. By using our website or service, you agree to this Privacy Policy. If you have questions about your information, please contact J&E Technologies."}]}]}
      /></div>
    </>
  );
}
