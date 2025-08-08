import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Target, Eye, Check } from "lucide-react";

export default function About() {
  const heroRef = useIntersectionObserver();
  const contentRef = useIntersectionObserver();
  const missionRef = useIntersectionObserver();
  const whyChooseRef = useIntersectionObserver();
  const ctaRef = useIntersectionObserver();

  const benefits = [
    "Data-Driven Approach - Every strategy is backed by comprehensive research and analytics to ensure maximum ROI.",
    "Creative Excellence - Award-winning creative team delivering visually stunning and engaging content.",
    "Transparent Reporting - Regular, detailed reports keeping you informed about campaign performance and progress.",
    "24/7 Support - Dedicated account management and round-the-clock support for all your marketing needs.",
    "Scalable Solutions - Flexible packages that grow with your business and adapt to changing market conditions.",
    "Industry Expertise - Deep understanding of various industries and their unique marketing challenges and opportunities.",
  ];

  return (
    <div>
      {/* About Hero */}
      <section className="gradient-bg py-20 pt-32">
        <div className="container mx-auto px-4">
          <div
            ref={heroRef.elementRef}
            className={`text-center max-w-4xl mx-auto transition-all duration-700 ${
              heroRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-advibe-dark mb-6">About Advibe</h1>
            <p className="text-xl text-advibe-dark/80 leading-relaxed">
              We're not just another marketing agency. We're creative storytellers, strategic thinkers, and growth hackers who believe in the power of authentic brand experiences.
            </p>
          </div>
        </div>
      </section>

      {/* What is Advibe */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              ref={contentRef.elementRef}
              className={`mb-16 transition-all duration-700 ${
                contentRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-advibe-dark mb-8">What is Advibe?</h2>
              <div className="space-y-6 text-lg text-advibe-dark/80 leading-relaxed">
                <p>
                  Advibe is a dynamic digital marketing agency founded on the belief that every brand has a unique story worth telling. We specialize in creating compelling digital experiences that not only capture attention but drive meaningful engagement and sustainable growth.
                </p>
                <p>
                  Our team combines creative expertise with data-driven strategies to deliver marketing solutions that resonate with your audience and achieve measurable results. From startups looking to make their mark to established brands seeking to evolve, we partner with businesses across industries to amplify their voice in the digital landscape.
                </p>
                <p>
                  At Advibe, we don't just follow trends – we create them. Our holistic approach to digital marketing encompasses everything from brand strategy and creative content to performance marketing and analytics, ensuring your brand not only stands out but thrives in today's competitive marketplace.
                </p>
              </div>
            </div>

            {/* Creative Marketing Image */}
            <div className="mb-16">
              <img
                src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600"
                alt="Creative marketing team brainstorming innovative strategies"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>

            {/* Mission & Vision */}
            <div
              ref={missionRef.elementRef}
              className={`grid md:grid-cols-2 gap-12 mb-16 transition-all duration-700 ${
                missionRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold text-advibe-dark mb-6 flex items-center">
                  <div className="w-8 h-8 bg-advibe-pink rounded-lg flex items-center justify-center mr-3">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  Our Mission
                </h3>
                <p className="text-advibe-dark/80 leading-relaxed">
                  To empower brands with innovative digital marketing strategies that drive authentic connections, sustainable growth, and measurable success. We're committed to delivering creative solutions that not only meet but exceed our clients' expectations while building lasting partnerships based on trust and results.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-advibe-dark mb-6 flex items-center">
                  <div className="w-8 h-8 bg-advibe-blue rounded-lg flex items-center justify-center mr-3">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                  Our Vision
                </h3>
                <p className="text-advibe-dark/80 leading-relaxed">
                  To become the leading digital marketing agency recognized for transforming brands through creative excellence and strategic innovation. We envision a future where every business, regardless of size, has access to world-class marketing solutions that enable them to thrive in the digital economy.
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div
              ref={whyChooseRef.elementRef}
              className={`transition-all duration-700 ${
                whyChooseRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-3xl font-bold text-advibe-dark mb-8">Why Choose Advibe?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => {
                  const [title, description] = benefit.split(" - ");
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-advibe-pink rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-advibe-dark mb-2">{title}</h4>
                        <p className="text-advibe-dark/70">{description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div
            ref={ctaRef.elementRef}
            className={`text-center transition-all duration-700 ${
              ctaRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-3xl font-bold text-advibe-dark mb-6">Ready to Start Your Journey?</h3>
            <p className="text-lg text-advibe-dark/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how Advibe can help transform your brand and accelerate your growth.
            </p>
            <Link href="/inquiry">
              <Button className="btn-gradient text-white font-semibold text-lg px-8 py-4 rounded-full">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
