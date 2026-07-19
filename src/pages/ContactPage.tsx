import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function ContactPage() {
  return (
    <>
  <div id="contact-section" data-section="contact-section">
    <SectionErrorBoundary name="contact-section">
          <ContactCta
      tag="Contact Us"
      text="Ready to learn more? Our support team is here to help you get connected."
      primaryButton={{
        text: "Email Support",
        href: "mailto:contact@jecharging.com",
      }}
      secondaryButton={{
        text: "Call Us",
        href: "tel:8048962312",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="Support FAQ"
      title="Quick Answers"
      description="Answers to common contact-related inquiries."
      items={[
        {
          question: "How to report an issue?",
          answer: "Should you experience an issue while using a J&E Technologies charging station, please contact us by email at contact@jecharging.com or by phone at (804) 896-2312. Please include the charging station location, a description of the issue, and any relevant details so we can assist you quickly.",
        },
        {
          question: "Response time?",
          answer: "We are committed to responding to customer inquiries within 24–48 hours. We work to resolve charging issues as quickly as possible and ensure a reliable experience for all EV drivers.",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
