import ServiceCard from "@/components/ui/service-card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { 
  Hash, 
  TrendingUp, 
  Palette, 
  Code, 
  Lightbulb, 
  BarChart3 
} from "lucide-react";

export default function ServicesSnapshot() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const services = [
    {
      icon: <Hash className="text-2xl" />,
      title: "Social Media Management",
      description: "Strategic content creation and community management to build your brand presence across all social platforms.",
    },
    {
      icon: <TrendingUp className="text-2xl" />,
      title: "Performance Marketing",
      description: "Data-driven advertising campaigns that deliver measurable ROI across Google Ads, Facebook, and other platforms.",
    },
    {
      icon: <Palette className="text-2xl" />,
      title: "Branding & Content Creation",
      description: "Compelling visual identity and content that tells your brand story and connects with your target audience.",
    },
    {
      icon: <Code className="text-2xl" />,
      title: "Website Development & SEO",
      description: "Custom websites optimized for performance, user experience, and search engine visibility.",
    },
    {
      icon: <Lightbulb className="text-2xl" />,
      title: "Strategy & Consulting",
      description: "Expert guidance and strategic planning to align your marketing efforts with business objectives.",
    },
    {
      icon: <BarChart3 className="text-2xl" />,
      title: "Data Tracking & Reporting",
      description: "Comprehensive analytics and transparent reporting to measure success and optimize performance.",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-700 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-advibe-dark mb-4">Our Services</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to elevate your brand and drive measurable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
