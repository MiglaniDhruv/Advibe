"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Hash,
  TrendingUp,
  Palette,
  Code,
  Lightbulb,
  BarChart3,
} from "lucide-react";

import SocialMediaImg from "@/assets/SocialMedia.jpg";
import PerformanceImg from "@/assets/PerformanceMarketing.jpg";
import BrandingImg from "@/assets/Branding.jpg";
import SeoImg from "@/assets/SEO.jpg";
import StrategyImg from "@/assets/StrategyConsulting.jpg";
import DataImg from "@/assets/Analytics.jpg";

const services = [
  {
    icon: <Hash className="w-10 h-10 text-white" />,
    title: "Social Media Management",
    description:
      "Strategic content creation and community management to build your brand presence across all social platforms.",
    image: SocialMediaImg,
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-white" />,
    title: "Performance Marketing",
    description:
      "Data-driven advertising campaigns that deliver measurable ROI across Google Ads, Facebook, and other platforms.",
    image: PerformanceImg,
  },
  {
    icon: <Palette className="w-10 h-10 text-white" />,
    title: "Branding & Content Creation",
    description:
      "Compelling visual identity and content that tells your brand story and connects with your target audience.",
    image: BrandingImg,
  },
  {
    icon: <Code className="w-10 h-10 text-white" />,
    title: "Website Development & SEO",
    description:
      "Custom websites optimized for performance, user experience, and search engine visibility.",
    image: SeoImg,
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-white" />,
    title: "Strategy & Consulting",
    description:
      "Expert guidance and strategic planning to align your marketing efforts with business objectives.",
    image: StrategyImg,
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-white" />,
    title: "Data Tracking & Reporting",
    description:
      "Comprehensive analytics and transparent reporting to measure success and optimize performance.",
    image: DataImg,
  },
];

export default function ServicesScroll() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("services-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // total scrollable height inside services-section
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / rect.height, 0),
        1
      );

      // map progress to index
      const newIndex = Math.min(
        services.length - 1,
        Math.floor(progress * services.length)
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="services-section"
      className={`relative h-[${services.length * 100}vh]`}
    >
      {/* Sticky inner container */}
      <div className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#0a0a0a]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl px-6">
          {/* Left side (Image) */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
            <AnimatePresence mode="wait">
              {services[activeIndex] && (
                <motion.img
                  key={activeIndex}
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Right side (Content) */}
          <div className="text-center md:text-left">
            <AnimatePresence mode="wait">
              {services[activeIndex] && (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                    <div className="p-4 rounded-lg bg-gradient-to-r from-[#8CCCEC] to-[#DF98BB]">
                      {services[activeIndex].icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                      {services[activeIndex].title}
                    </h3>
                  </div>

                  <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-4">
                    {services[activeIndex].description}
                  </p>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    Our approach blends creativity with data, ensuring that your
                    campaigns not only look great but also deliver measurable
                    business growth. We tailor solutions to your unique needs so
                    your brand stands out in a crowded digital space.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
