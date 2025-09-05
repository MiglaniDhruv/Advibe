"use client";

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
      description:
        "Perfect for startups and small businesses looking to establish their digital presence.",
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
      description:
        "Ideal for growing businesses ready to scale their marketing efforts and reach.",
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
      description:
        "Comprehensive solution for established businesses seeking premium marketing services.",
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
    <section className="relative py-20 bg-white z-20 overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60A5FA" /> {/* blue */}
              <stop offset="100%" stopColor="#EC4899" /> {/* pink */}
            </linearGradient>
          </defs>

          {/* Top Wave */}
          <path
            d="M0,160 C360,80 1080,240 1440,160 L1440,0 L0,0 Z"
            fill="url(#gradient)"
            opacity="0.25"
          />

          {/* Middle Soft Wave */}
          <path
            d="M0,400 C360,480 1080,320 1440,400 L1440,800 L0,800 Z"
            fill="url(#gradient)"
            opacity="0.15"
          />

          {/* Bottom Wave */}
          <path
            d="M0,640 C360,720 1080,560 1440,640 L1440,800 L0,800 Z"
            fill="url(#gradient)"
            opacity="0.25"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        {/* Title */}
        <div
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-700 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-advibe-dark mb-4">
            Our Plans
          </h2>
          <p className="text-lg text-advibe-dark/70 max-w-2xl mx-auto">
            Flexible packages designed to meet your business needs and budget.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 relative z-10">
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

        {/* Custom Quote */}
        <div className="text-center relative z-10">
          <p className="text-advibe-dark/70 mb-4">
            Need something custom? We've got you covered.
          </p>
          <Link href="/inquiry">
            <Button
              variant="outline"
              className="border-2 border-advibe-dark text-advibe-dark px-8 py-3 rounded-full font-semibold hover:bg-advibe-dark hover:text-white"
            >
              Get Custom Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
