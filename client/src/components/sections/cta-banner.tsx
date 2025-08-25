import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function CTABanner() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section className="gradient-bg py-20">
      <div className="container mx-auto px-4">
        <div
          ref={elementRef}
          className={`text-center transition-all duration-700 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-advibe-dark mb-6">
            Let's Vibe With Your Brand Today!
          </h2>
          <p className="text-xl text-advibe-dark/80 mb-8 max-w-2xl mx-auto">
            Ready to transform your digital presence and accelerate your growth? Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inquiry">
              <Button className="bg-white text-advibe-pink px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all">
                Start Your Journey
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-2 border-advibe-dark text-advibe-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-advibe-dark hover:text-white transition-all">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
