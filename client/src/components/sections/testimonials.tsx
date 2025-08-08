import TestimonialCard from "@/components/ui/testimonial-card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function Testimonials() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const testimonials = [
    {
      name: "Rajesh Sharma",
      company: "CEO, TechInnovate Solutions",
      content: "Advibe transformed our social media presence completely. Our engagement increased by 400% within just 3 months. Their creative content and strategic approach exceeded our expectations.",
      avatar: "RS",
    },
    {
      name: "Priya Kapoor",
      company: "Marketing Director, FashionForward",
      content: "The team at Advibe is incredibly professional and results-driven. Our website traffic doubled, and we're generating 3x more leads than before. Highly recommend their services!",
      avatar: "PK",
    },
    {
      name: "Amit Singh",
      company: "Founder, GreenEarth Organics",
      content: "Working with Advibe has been a game-changer for our business. Their strategic approach to digital marketing helped us achieve a 250% increase in online sales within 6 months.",
      avatar: "AS",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-700 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-advibe-dark mb-4">What Our Clients Say</h2>
          <p className="text-lg text-advibe-dark/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Advibe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              company={testimonial.company}
              content={testimonial.content}
              avatar={testimonial.avatar}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
