"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import {
  Hash,
  TrendingUp,
  Palette,
  Code,
  Lightbulb,
  BarChart3,
} from "lucide-react";

// <-- update these imports to match your filenames/paths -->
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
  const ref = useRef<HTMLElement | null>(null);

  // track scroll progress inside the whole section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"], // map when section enters and leaves viewport
  });

  // maps [0..1] -> [0 .. services.length - 1] (continuous)
  const position = useTransform(scrollYProgress, [0, 1], [0, services.length - 1]);

  // integer index used for zIndex + eager loading
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    // subscribe to motion value changes and round to nearest index
    const unsubscribe = (position as MotionValue<number>).on("change", (v) => {
      setCurrentIndex(Math.round(Math.max(0, Math.min(services.length - 1, v))));
    });
    return () => unsubscribe();
  }, [position]);

  return (
    // total height: one viewport per service (so user scrolls through each service)
    <section
      ref={ref}
      id="services-section"
      style={{ height: `${services.length * 100}vh` }}
      className="relative"
    >
      {/* pinned / sticky area */}
      <div className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#0a0a0a]">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-6 items-center">
          {/* Left: images stacked absolute, each driven by position MotionValue */}
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[480px]">
            {services.map((service, i) => {
              // opacity & scale map so only the relevant image is visible and scaled
              const opacity = useTransform(position, [i - 0.5, i, i + 0.5], [0, 1, 0]);
              const scale = useTransform(position, [i - 0.5, i, i + 0.5], [0.96, 1, 0.96]);

              return (
                <motion.img
                  key={i}
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
                  style={{
                    opacity,
                    scale,
                    zIndex: i === currentIndex ? 2 : 1, // ensure active image sits on top
                    pointerEvents: "none",
                    willChange: "opacity, transform",
                  }}
                  loading={i === currentIndex ? "eager" : "lazy"}
                />
              );
            })}
          </div>

          {/* Right: content stack (absolute) — each item animated based on position */}
          <div className="relative h-[260px] sm:h-[320px] md:h-[420px] lg:h-[480px]">
            {services.map((service, i) => {
              const opacity = useTransform(position, [i - 0.45, i, i + 0.45], [0, 1, 0]);
              const x = useTransform(position, [i - 0.45, i, i + 0.45], [40, 0, -40]);

              return (
                <motion.div
                  key={i}
                  className="absolute inset-0 flex flex-col justify-center md:pl-6"
                  style={{
                    opacity,
                    x,
                    pointerEvents: i === currentIndex ? "auto" : "none",
                    willChange: "opacity, transform",
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-[#8CCCEC] to-[#DF98BB]">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-3">
                    {service.description}
                  </p>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
                    Our approach blends creativity with data, ensuring that your
                    campaigns not only look great but also deliver measurable
                    business growth. We tailor solutions to your unique needs so
                    your brand stands out in a crowded digital space.
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
