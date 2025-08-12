import { Star } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface TestimonialCardProps {
  name: string;
  company: string;
  content: string;
  avatar: string;
  delay?: number;
}

export default function TestimonialCard({ 
  name, 
  company, 
  content, 
  avatar, 
  delay = 0 
}: TestimonialCardProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className={`bg-white p-8 rounded-2xl shadow-lg transition-all duration-700 ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
      </div>
      <p className="text-advibe-dark/80 mb-6 italic">"{content}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 service-icon rounded-full flex items-center justify-center mr-4">
          <span className="text-white font-semibold">{avatar}</span>
        </div>
        <div>
          <p className="font-semibold text-advibe-dark">{name}</p>
          <p className="text-sm text-advibe-dark/60">{company}</p>
        </div>
      </div>
    </div>
  );
}
