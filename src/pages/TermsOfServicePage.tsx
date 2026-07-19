import PolicyContent from "@/components/sections/legal/PolicyContent";

export default function TermsOfServicePage() {
  return (
    <>
      <div data-webild-section="PolicyContent"><PolicyContent
        title="Terms of Service"
        subtitle="Last updated: October 2023. Please read these terms carefully before using our services."
        sections={[{"heading":"1. Acceptance of Terms","content":[{"type":"paragraph","text":"By accessing or using J&E Technologies' charging solutions and website, you agree to be bound by these Terms of Service and all applicable laws and regulations."}]},{"heading":"2. Use of Services","content":[{"type":"paragraph","text":"You agree to use our charging products only for lawful purposes. You must not use our services in any way that causes damage or impairs their availability."},{"type":"list","items":["Do not misuse or vandalize our charging stations or hardware.","Do not attempt to reverse-engineer our proprietary charging technology.","Comply with all local safety regulations when operating our chargers."]}]},{"heading":"3. User Accounts","content":[{"type":"paragraph","text":"To access certain features, you must register for an account. You are responsible for maintaining the confidentiality of your credentials and all activities under your account."}]},{"heading":"4. Limitation of Liability","content":[{"type":"paragraph","text":"J&E Technologies shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of, or inability to use, our charging products and services."}]},{"heading":"5. Changes to Terms","content":[{"type":"paragraph","text":"We reserve the right to modify these terms at any time. We will notify users of any significant changes via email or a prominent notice on our website prior to the change becoming effective."}]}]}
      /></div>
    </>
  );
}
