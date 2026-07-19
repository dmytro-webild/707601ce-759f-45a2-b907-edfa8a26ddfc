import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import PolicyContent from "@/components/sections/legal/PolicyContent";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function PrivacyPolicyPage() {
  const policySections = [
    {
      heading: "1. Information We Collect",
      content: [
        {
          type: "paragraph" as const,
          text: "We collect information you provide directly to us. For example, we collect information when you create an account, participate in any interactive features of our services, fill out a form, request customer support or otherwise communicate with us."
        },
        {
          type: "list" as const,
          items: [
            "Name and contact data",
            "Account credentials",
            "Payment information",
            "Usage data and analytics"
          ]
        }
      ]
    },
    {
      heading: "2. How We Use Information",
      content: [
        {
          type: "paragraph" as const,
          text: "We use the information we collect to provide, maintain, and improve our services, such as to administer your account and provide you with the products and services you request."
        }
      ]
    },
    {
      heading: "3. Sharing of Information",
      content: [
        {
          type: "paragraph" as const,
          text: "We may share the information we collect in various ways, including with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf."
        }
      ]
    },
    {
      heading: "4. Contact Us",
      content: [
        {
          type: "paragraph" as const,
          text: "If you have any questions about this Privacy Policy, please contact us at privacy@example.com."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Webild"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Started", href: "/contact" }}
      />
      
      <main className="flex-grow pt-24 pb-16">
        <PolicyContent
          title="Privacy Policy"
          subtitle="Last updated: October 26, 2023"
          sections={policySections}
        />
      </main>

      <FooterSimple
        brand="Webild"
        columns={[
          {
            title: "Legal",
            items: [
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms" }
            ]
          },
          {
            title: "Company",
            items: [
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" }
            ]
          }
        ]}
        copyright="© 2023 Webild. All rights reserved."
        links={[
          { label: "Twitter", href: "#" },
          { label: "LinkedIn", href: "#" }
        ]}
      />
    </div>
  );
}