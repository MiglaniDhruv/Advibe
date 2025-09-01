import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Check, X } from "lucide-react";

export default function Plans() {
  const heroRef = useIntersectionObserver();
  const plansRef = useIntersectionObserver();
  const comparisonRef = useIntersectionObserver();
  const ctaRef = useIntersectionObserver();

  const plans = [
    {
      name: "Silver Plan",
      price: "₹15,000",
      description: "Perfect for startups and small businesses",
      features: [
        "8 Social Media Posts",
        "2 Professional Reels",
        "8 Story Posts",
        "Instagram & Facebook Management",
        "Custom Flyer Designs",
        "Reel Editing & Production",
        "Post Boosting & Promotion",
        "250 Printed Pamphlets",
        "3 Marketing Banners",
      ],
    },
    {
      name: "Gold Plan",
      price: "₹21,000",
      description: "Ideal for growing businesses",
      isPopular: true,
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
    },
    {
      name: "Diamond Plan",
      price: "₹36,000",
      description: "Premium solution for established businesses",
      features: [
        "12 Posts + 3 LinkedIn Posts",
        "8 Premium Reels",
        "16 Story Posts",
        "Full Platform Management (Instagram, Facebook, LinkedIn)",
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

  const comparisonFeatures = [
    { feature: "Monthly Price", silver: "₹15,000", gold: "₹21,000", diamond: "₹36,000" },
    { feature: "Social Media Posts", silver: "8", gold: "12", diamond: "15" },
    { feature: "Professional Reels", silver: "2", gold: "4", diamond: "8" },
    { feature: "Story Posts", silver: "8", gold: "12", diamond: "16" },
    { feature: "Platform Management", silver: "Instagram, Facebook", gold: "Instagram, Facebook, LinkedIn", diamond: "All Platforms" },
    { feature: "Google My Business", silver: false, gold: true, diamond: true },
    { feature: "Google Ads", silver: false, gold: false, diamond: true },
    { feature: "SEO Services", silver: false, gold: false, diamond: true },
    { feature: "Website Development", silver: false, gold: false, diamond: true },
    { feature: "Printed Pamphlets", silver: "250", gold: "350", diamond: "500" },
    { feature: "Marketing Banners", silver: "3", gold: "5", diamond: "7" },
    { feature: "Performance Reports", silver: "Monthly", gold: "Bi-weekly", diamond: "Weekly" },
    { feature: "Account Manager", silver: "Shared", gold: "Priority", diamond: "Dedicated" },
  ];

  return (
    <div>
      {/* Plans Hero */}
      <section className="gradient-bg py-20 pt-32">
        <div className="container mx-auto px-4">
          <div
            ref={heroRef.elementRef}
            className={`text-center max-w-4xl mx-auto transition-all duration-700 ${
              heroRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-advibe-dark mb-6 fade-slide">Plans & Pricing</h1>
            <p className="text-xl text-advibe-dark/80 leading-relaxed">
              Choose the perfect plan for your business needs. All plans include dedicated account management and transparent reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div
            ref={plansRef.elementRef}
            className={`grid md:grid-cols-3 gap-8 max-w-7xl mx-auto transition-all duration-700 ${
              plansRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`bg-white rounded-3xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl ${
                  plan.isPopular ? "border-2 border-advibe-pink relative" : ""
                }`}
                style={{
        backgroundImage: `url("/src/assets/Blue Pink Gradient Kindness Day Flyer.svg")`,
        backgroundSize: "fit",
        backgroundPosition: "center",
      }}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-advibe-pink to-advibe-blue text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-advibe-dark mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-advibe-pink mb-2">
                    {plan.price}
                  </div>
                  <span className="text-advibe-dark/60">/month</span>
                  <p className="text-advibe-dark/70 mt-4">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-advibe-dark/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/inquiry">
                  <Button
                    className={`w-full py-3 rounded-full font-semibold ${
                      plan.isPopular
                        ? "btn-gradient text-white"
                        : "border-2 border-advibe-pink text-advibe-pink hover:bg-advibe-pink hover:text-white"
                    }`}
                    variant={plan.isPopular ? "default" : "outline"}
                  >
                    Subscribe Now
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            ref={comparisonRef.elementRef}
            className={`text-center mb-12 transition-all duration-700 ${
              comparisonRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl font-bold text-advibe-dark mb-4">Compare Plans</h2>
            <p className="text-lg text-advibe-dark/70">Detailed comparison of all our marketing packages</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="service-icon text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Features</th>
                  <th className="px-6 py-4 text-center font-semibold">Silver</th>
                  <th className="px-6 py-4 text-center font-semibold">Gold</th>
                  <th className="px-6 py-4 text-center font-semibold">Diamond</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonFeatures.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="px-6 py-4 font-medium text-advibe-dark">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.silver === "boolean" ? (
                        row.silver ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )
                      ) : row.feature === "Monthly Price" ? (
                        <span className="font-bold text-advibe-pink">{row.silver}</span>
                      ) : (
                        row.silver
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.gold === "boolean" ? (
                        row.gold ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )
                      ) : row.feature === "Monthly Price" ? (
                        <span className="font-bold text-advibe-pink">{row.gold}</span>
                      ) : (
                        row.gold
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.diamond === "boolean" ? (
                        row.diamond ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )
                      ) : row.feature === "Monthly Price" ? (
                        <span className="font-bold text-advibe-pink">{row.diamond}</span>
                      ) : (
                        row.diamond
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div
            ref={ctaRef.elementRef}
            className={`text-center transition-all duration-700 ${
              ctaRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-3xl font-bold text-advibe-dark mb-6">Still Have Questions?</h3>
            <p className="text-lg text-advibe-dark/70 mb-8 max-w-2xl mx-auto">
              Our team is here to help you choose the right plan for your business needs and answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-gradient text-white font-semibold text-lg px-8 py-4 rounded-full">
                  Contact Us
                </Button>
              </Link>
              <Link href="/inquiry">
                <Button variant="outline" className="border-2 border-advibe-pink text-advibe-pink px-8 py-4 rounded-full font-semibold text-lg hover:bg-advibe-pink hover:text-white transition-all">
                  Get Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
