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
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms Of Service", href: "/terms-of-service" },


];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
      logo="J&E Technologies"
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
      brand="J&E Technologies"
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
              href: "/privacy-policy",
            },
            {
              label: "Terms of Service",
              href: "/terms-of-service",
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
