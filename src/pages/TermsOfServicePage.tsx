import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import PolicyContent from "@/components/sections/legal/PolicyContent";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import GridLinesBackground from "@/components/ui/GridLinesBackground";

export default function TermsOfServicePage() {
  const termsSections = [
    {
      heading: "1. Acceptance of Terms",
      content: [
        {
          type: "paragraph" as const,
          text: "By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services."
        }
      ]
    },
    {
      heading: "2. Description of Service",
      content: [
        {
          type: "paragraph" as const,
          text: "We provide users with access to a rich collection of resources, including various communications tools, search services, and personalized content. You understand and agree that the service is provided 'AS-IS' and that we assume no responsibility for the timeliness, deletion, mis-delivery, or failure to store any user communications or personalization settings."
        }
      ]
    },
    {
      heading: "3. User Conduct",
      content: [
        {
          type: "paragraph" as const,
          text: "You agree to not use the service to:"
        },
        {
          type: "list" as const,
          items: [
            "Upload, post, email, transmit or otherwise make available any content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable.",
            "Harm minors in any way.",
            "Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.",
            "Interfere with or disrupt the service or servers or networks connected to the service."
          ]
        }
      ]
    },
    {
      heading: "4. Modifications to Service",
      content: [
        {
          type: "paragraph" as const,
          text: "We reserve the right at any time and from time to time to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice. You agree that we shall not be liable to you or to any third party for any modification, suspension or discontinuance of the service."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative flex flex-col">
      <GridLinesBackground position="fixed" />
      
      <div className="relative z-10 flex-1 flex flex-col">
        <NavbarCentered
          logo="Webild"
          navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
          ctaButton={{ text: "Get Started", href: "/contact" }}
        />

        <main className="flex-1 pt-24 pb-16">
          <PolicyContent
            title="Terms of Service"
            subtitle="Last updated: October 26, 2023. Please read these terms carefully before using our services."
            sections={termsSections}
          />
        </main>

        <FooterSimple
          brand="Webild"
          columns={[
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms-of-service" }
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
            { label: "GitHub", href: "#" }
          ]}
        />
      </div>
    </div>
  );
}