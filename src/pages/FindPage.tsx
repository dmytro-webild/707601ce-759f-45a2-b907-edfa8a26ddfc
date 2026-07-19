import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FindPage() {
  return (
    <>
      <div id="find-charger-map" data-section="find-charger-map">
        <SectionErrorBoundary name="find-charger-map">
          <section aria-label="Locate Your Station section" className="">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center gap-2 w-content-width mx-auto">
                <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
                  <p>Interactive Map</p>
                </div>
                <TextAnimation
                  text="Locate Your Station"
                  variant="fade-blur"
                  gradientText={true}
                  tag="h2"
                  className="md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
                />
                <TextAnimation
                  text="Explore our interactive map to find the nearest charger to you."
                  variant="fade-blur"
                  gradientText={false}
                  tag="p"
                  className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance"
                />
              </div>
              <ScrollReveal variant="fade-blur">
                <div className="w-content-width mx-auto card rounded p-2 md:p-4 h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                  {/* HTML/Embed Code Block */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019284200355!2d-122.41941548468205!3d37.7749295153232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050f14!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1625680000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, borderRadius: 'calc(var(--radius) - 4px)' }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Interactive Map"
                  ></iframe>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </SectionErrorBoundary>
      </div>
    </>
  );
}