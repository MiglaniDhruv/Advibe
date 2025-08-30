import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface PlanCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}

export default function PlanCard({ 
  name, 
  price, 
  description, 
  features, 
  isPopular = false,
  delay = 0 
}: PlanCardProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className={`bg-white p-8 rounded-2xl shadow-lg transition-all duration-700 hover:shadow-xl relative ${
        isPopular ? "border-2 border-advibe-pink transform scale-105" : ""
      } ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        backgroundImage: `url("/src/assets/Blue Pink Gradient Kindness Day Flyer.svg")`,
        backgroundSize: "fit",
        backgroundPosition: "center",
      }}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-advibe-pink to-advibe-blue text-white px-6 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-advibe-dark mb-2">{name}</h3>
        <div className="text-4xl font-bold text-advibe-pink mb-2">
          {price}
          <span className="text-lg text-advibe-dark/60">/month</span>
        </div>
        <p className="text-advibe-dark/70">{description}</p>
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
            <span className="text-advibe-dark/80">{feature}</span>
          </div>
        ))}
      </div>

      <Link href="/inquiry">
        <Button
          className={`w-full py-3 rounded-full font-semibold ${
            isPopular
              ? "btn-gradient text-white"
              : "border-2 border-advibe-pink text-advibe-pink hover:bg-advibe-pink hover:text-white"
          }`}
          variant={isPopular ? "default" : "outline"}
        >
          Subscribe Now
        </Button>
      </Link>
    </div>
  );
}
