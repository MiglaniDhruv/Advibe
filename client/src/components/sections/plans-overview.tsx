import PlanCard from "@/components/ui/plan-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function PlansOverview() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const plans = [
    {
      name: "Silver Plan",
      price: "₹15,000",
      description: "Perfect for startups and small businesses looking to establish their digital presence.",
      features: [
        "8 Social Media Posts",
        "2 Instagram Reels",
        "8 Instagram Stories",
        "Instagram & Facebook Management",
        "Custom Flyer Designs",
        "Reel Editing & Production",
        "Post Boosting & Promotion",
        "250 Printed Pamphlets",
        "3 Marketing Banners",
        "Monthly Performance Report",
      ],
    },
    {
      name: "Gold Plan",
      price: "₹21,000",
      description: "Ideal for growing businesses ready to scale their marketing efforts and reach.",
      features: [
        "12 Social Media Posts",
        "4 Professional Reels",
        "12 Story Posts",
        "Instagram, Facebook & LinkedIn Management",
        "Google My Business Optimization",
        "Lead Generation Campaigns",
        "350 Printed Pamphlets",
        "5 Marketing Banners",
        "Bi-weekly Performance Reports",
        "Priority Customer Support",
      ],
      isPopular: true,
    },
    {
      name: "Diamond Plan",
      price: "₹36,000",
      description: "Comprehensive solution for established businesses seeking premium marketing services.",
      features: [
        "12 Posts + 3 LinkedIn Posts",
        "8 Premium Reels",
        "16 Story Posts",
        "Full Platform Management",
        "Website Development & Maintenance",
        "Google Ads Management",
        "SEO Optimization",
        "500 Premium Pamphlets",
        "7 Professional Banners",
        "Weekly Performance Reports",
        "Dedicated Account Manager",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-700 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-advibe-light mb-4">Our Plans</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Flexible packages designed to meet your business needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              delay={index * 200}
            />
          ))}
        </div>

        <div className="text-center">
          <p className="text-advibe-dark/70 mb-4">Need something custom? We've got you covered.</p>
          <Link href="/inquiry">
            <Button variant="outline" className="border-2 border-advibe-dark text-advibe-dark px-8 py-3 rounded-full font-semibold hover:bg-advibe-dark hover:text-white">
              Get Custom Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
