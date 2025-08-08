import Hero from "@/components/sections/hero";
import ServicesSnapshot from "@/components/sections/services-snapshot";
import PlansOverview from "@/components/sections/plans-overview";
import Testimonials from "@/components/sections/testimonials";
import CTABanner from "@/components/sections/cta-banner";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function Home() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <div>
      <Hero />
      
      {/* About Advibe Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            ref={elementRef}
            className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-advibe-dark mb-6">About Advibe</h2>
            <p className="text-lg text-advibe-dark/80 mb-8 leading-relaxed">
              Advibe is a dynamic digital marketing agency that transforms brands through innovative strategies, creative content, and data-driven campaigns. We believe every brand has a unique vibe that deserves to be amplified.
            </p>
            <Link href="/about">
              <Button className="btn-gradient text-white font-semibold px-8 py-3 rounded-full">
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ServicesSnapshot />
      <PlansOverview />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
