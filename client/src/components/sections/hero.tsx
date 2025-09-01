import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function Hero() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section
      ref={elementRef}
      className="gradient-bg min-h-screen flex items-center pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
          {/* Left Content */}
          <div
            className={`lg:w-1/2 w-full transition-all duration-700 ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold hero-text leading-tight mb-6 ml-20">
              Vibe Your Brand.
              <br />
              <span className="gradient-text">Grow Your Reach.</span>
            </h1>
            <p className="text-[clamp(1rem,2vw,1.25rem)] text-advibe-dark/80 mb-8 leading-relaxed max-w-prose ml-20">
              We help brands shine with creative content, targeted ads, and
              growth strategies that deliver real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/inquiry">
                <Button className="btn-gradient text-white font-semibold text-[clamp(0.9rem,1.5vw,1.125rem)] shadow-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full ml-20">
                  Get a Free Consultation
                </Button>
              </Link>
              <Link href="/plans">
                <Button
                  variant="outline"
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-advibe-pink text-advibe-pink font-semibold text-[clamp(0.9rem,1.5vw,1.125rem)] hover:bg-advibe-pink hover:text-white transition-all ml-10"
                >
                  View Plans
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`lg:w-1/2 w-full flex justify-center transition-all duration-700 delay-300 ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Digital marketing team collaborating on creative strategy"
              className="rounded-2xl shadow-2xl w-full max-w-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
