"use client";

import { motion } from "framer-motion";
import TestimonialCard from "@/components/ui/testimonial-card";

const testimonials = [
  {
    name: "Rajesh Sharma",
    company: "CEO, TechInnovate Solutions",
    content:
      "Advibe transformed our social media presence completely. Our engagement increased by 400% within just 3 months. Their creative content and strategic approach exceeded our expectations.",
    avatar: "RS",
  },
  {
    name: "Priya Kapoor",
    company: "Marketing Director, FashionForward",
    content:
      "The team at Advibe is incredibly professional and results-driven. Our website traffic doubled, and we're generating 3x more leads than before. Highly recommend their services!",
    avatar: "PK",
  },
  {
    name: "Amit Singh",
    company: "Founder, GreenEarth Organics",
    content:
      "Working with Advibe has been a game-changer for our business. Their strategic approach to digital marketing helped us achieve a 250% increase in online sales within 6 months.",
    avatar: "AS",
  },
  {
    name: "Vishwa Chaudhari",
    company: "Founder, Agariss IT",
    content:
      "Advibe played a vital role in helping Agariss IT uncover new possibilities. Their guidance and expertise gave us the clarity and direction we needed to scale faster and with confidence.",
    avatar: "VC",
  },
];

// Duplicate array for seamless loop
const scrollingTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-advibe-dark mb-3">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-advibe-dark/70 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients
            have to say about working with Advibe.
          </p>
        </div>

        {/* Infinite scrolling row */}
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {scrollingTestimonials.map((t, index) => (
            <div
              key={index}
              className="
                min-w-[240px] max-w-[240px]   /* mobile */
                sm:min-w-[280px] sm:max-w-[280px] /* tablet */
                md:min-w-[320px] md:max-w-[320px] /* desktop */
                flex
              "
            >
              <TestimonialCard
                name={t.name}
                company={t.company}
                content={t.content}
                avatar={t.avatar}
                delay={index * 100}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
