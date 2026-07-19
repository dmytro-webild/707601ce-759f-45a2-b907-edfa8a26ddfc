import FooterSimpleCard from '@/components/sections/footer/FooterSimpleCard';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "/"
  },
  {
    "name": "Find a Charger",
    "href": "/find"
  },
  {
    "name": "About",
    "href": "/about"
  },
  {
    "name": "Contact",
    "href": "/contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Features Grid",
    "href": "#features-grid"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  { name: "Privacy Policy", href: "/privacy-policy" },

];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
      logo="JECharging.com"
      ctaButton={{
        text: "Find a Charger",
        href: "/find",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleCard
      brand="JECharging.com"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "/about",
            },
            {
              label: "Mission",
              href: "/about",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact Us",
              href: "/contact",
            },
            {
              label: "FAQ",
              href: "/",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "/policy",
            },
            {
              label: "Terms of Service",
              href: "/policy",
            },
          ],
        },
      ]}
      copyright=""
      links={[]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
