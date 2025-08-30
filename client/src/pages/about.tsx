import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Target, Eye, Check, Star, Heart, Users } from "lucide-react";

export default function About() {
  const heroRef = useIntersectionObserver();
  const contentRef = useIntersectionObserver();
  const expertiseRef = useIntersectionObserver();
  const missionRef = useIntersectionObserver();
  const valuesRef = useIntersectionObserver();
  const whyChooseRef = useIntersectionObserver();
  const ctaRef = useIntersectionObserver();

  const benefits = [
    "Data-Driven Approach - Every strategy is backed by research and analytics to ensure maximum ROI.",
    "Creative Excellence - Award-winning creative team delivering stunning and engaging content.",
    "Transparent Reporting - Detailed reports keeping you informed on performance and progress.",
    "24/7 Support - Dedicated account managers and round-the-clock help for your marketing needs.",
    "Scalable Solutions - Flexible packages that grow with your business and adapt to changes.",
    "Industry Expertise - Deep knowledge of various industries and their unique challenges.",
  ];

  const expertise = [
    {
      title: "Digital Strategy",
      desc: "Crafting tailored strategies that align with your goals and deliver measurable results.",
      img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Creative Design",
      desc: "From brand identity to ad creatives, we make your brand visually unforgettable.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Performance Marketing",
      desc: "ROI-driven campaigns across search, social, and programmatic platforms.",
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const coreValues = [
    {
      icon: <Star className="h-7 w-7 text-white" />,
      color: "bg-advibe-pink",
      title: "Excellence",
      desc: "We set the bar high and continuously raise it, striving for excellence in every campaign.",
    },
    {
      icon: <Heart className="h-7 w-7 text-white" />,
      color: "bg-advibe-blue",
      title: "Integrity",
      desc: "Transparency and honesty are at the heart of our client relationships and work ethic.",
    },
    {
      icon: <Users className="h-7 w-7 text-white" />,
      color: "bg-advibe-dark",
      title: "Collaboration",
      desc: "We believe the best results come from teamwork—within our team and with our clients.",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50">
      {/* Hero with background */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80"
            alt="Digital marketing background"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
        </div>

        {/* Content */}
        <div
          ref={heroRef.elementRef}
          className={`relative z-10 max-w-4xl px-6 transition-all duration-700 ${
            heroRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            About <span className="text-advibe-pink">Advibe</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            We're not just another marketing agency. We're storytellers, strategists, and growth partners who
            believe in the power of authentic brand experiences.
          </p>
        </div>

        {/* Floating accents */}
        <div className="absolute top-10 left-10 animate-pulse">
          <div className="w-16 h-16 rounded-full bg-advibe-pink/40 blur-2xl" />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce">
          <div className="w-12 h-12 rounded-full bg-advibe-blue/40 blur-xl" />
        </div>
      </section>

      {/* What is Advibe */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div
            ref={contentRef.elementRef}
            className={`grid md:grid-cols-2 gap-14 items-center transition-all duration-700 ${
              contentRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-advibe-dark mb-8">
                What is Advibe?
              </h2>
              <div className="space-y-6 text-base md:text-lg text-advibe-dark/80 leading-relaxed">
                <p>
                  Advibe is a digital marketing agency founded on the belief that every brand has a unique story worth telling. 
                  We create compelling experiences that capture attention and drive sustainable growth.
                </p>
                <p>
                  By combining creative expertise with data-driven strategies, we deliver solutions that resonate with your audience and achieve measurable results.
                </p>
                <p>
                  From startups to established brands, we partner with businesses to amplify their voice and build meaningful connections in the digital world.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="Digital Marketing Team"
                className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-gray-50">
        <div
          ref={expertiseRef.elementRef}
          className={`max-w-6xl mx-auto px-6 text-center transition-all duration-700 ${
            expertiseRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-advibe-dark mb-14">Our Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-xl transition"
              >
                <img src={item.img} alt={item.title} className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-advibe-dark mb-3">{item.title}</h4>
                  <p className="text-advibe-dark/70 text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div
          ref={missionRef.elementRef}
          className={`grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 transition-all duration-700 ${
            missionRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="p-8 bg-white rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-advibe-dark mb-4 flex items-center">
              <div className="w-10 h-10 bg-advibe-pink rounded-lg flex items-center justify-center mr-3">
                <Target className="h-6 w-6 text-white" />
              </div>
              Our Mission
            </h3>
            <p className="text-advibe-dark/80 leading-relaxed">
              To empower brands with innovative strategies that drive authentic connections and sustainable growth. 
              We deliver creative solutions that exceed expectations and create real impact.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-advibe-dark mb-4 flex items-center">
              <div className="w-10 h-10 bg-advibe-blue rounded-lg flex items-center justify-center mr-3">
                <Eye className="h-6 w-6 text-white" />
              </div>
              Our Vision
            </h3>
            <p className="text-advibe-dark/80 leading-relaxed">
              To be the leading agency recognized for transforming brands through creativity and data-driven insights. 
              Our vision is a digital future where every business thrives.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-r from-advibe-blue/5 via-white to-advibe-pink/5">
        <div
          ref={valuesRef.elementRef}
          className={`max-w-6xl mx-auto px-6 text-center transition-all duration-700 ${
            valuesRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-advibe-dark mb-14">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div
                  className={`w-14 h-14 ${val.color} rounded-full flex items-center justify-center mx-auto mb-5`}
                >
                  {val.icon}
                </div>
                <h4 className="text-xl font-semibold text-advibe-dark mb-3">{val.title}</h4>
                <p className="text-advibe-dark/70 text-base">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div
          ref={whyChooseRef.elementRef}
          className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
            whyChooseRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-advibe-dark mb-12 text-center">
            Why Choose <span className="text-advibe-pink">Advibe?</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const [title, description] = benefit.split(" - ");
              return (
                <div key={index} className="flex items-start space-x-5">
                  <div className="w-10 h-10 bg-advibe-pink rounded-full flex items-center justify-center mt-1 flex-shrink-0 shadow-md">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-advibe-dark text-xl mb-2">{title}</h4>
                    <p className="text-advibe-dark/70 text-base">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-24">
        <div
          ref={ctaRef.elementRef}
          className={`max-w-5xl mx-auto px-6 text-center transition-all duration-700 ${
            ctaRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-advibe-dark mb-6">
            Ready to Start Your Journey?
          </h3>
          <p className="text-lg md:text-xl text-advibe-dark/70 mb-10 max-w-2xl mx-auto">
            Let's discuss how Advibe can transform your brand and accelerate your growth.
          </p>
          <Link href="/inquiry">
            <Button className="btn-gradient text-white font-semibold text-lg px-10 py-5 rounded-full shadow-lg hover:scale-105 transition">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}