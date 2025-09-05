"use client";

import { motion } from "framer-motion";
import Hero from "@/components/sections/hero";
import ServicesSnapshot from "@/components/sections/services-snapshot";
import PlansOverview from "@/components/sections/plans-overview";
import Testimonials from "@/components/sections/testimonials";
import CTABanner from "@/components/sections/cta-banner";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import HomeAboutBg from "@/assets/home-about-bg.jpg";

export default function Home() {
    // Reusable animation variants
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    };

    return (
        <div className="relative">
            {/* Sticky Hero Section */}
            <section className="sticky top-0 h-screen">
                <Hero />
            </section>

            {/* About Advibe Preview */}
            <section className="relative py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                    >
                        <section
                            className="relative flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 bg-white overflow-hidden rounded-2xl shadow-lg"
                            style={{
                                backgroundImage: `url(${HomeAboutBg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* Floating Social Icons */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-6 sm:top-10 left-6 sm:left-16"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-[#8CCCEC] to-[#DF98BB] shadow-lg"
                                >
                                    <Facebook className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                                </motion.div>
                            </motion.div>

                            <motion.div
                                animate={{ x: [0, 20, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute top-20 sm:top-28 right-6 sm:right-16"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: -10 }}
                                    className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-[#8CCCEC] to-[#DF98BB] shadow-lg"
                                >
                                    <Instagram className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                                </motion.div>
                            </motion.div>

                            <motion.div
                                animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute bottom-16 sm:bottom-20 left-8 sm:left-20"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 15 }}
                                    className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-[#8CCCEC] to-[#DF98BB] shadow-lg"
                                >
                                    <Linkedin className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                                </motion.div>
                            </motion.div>

                            <motion.div
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity }}
                                className="absolute bottom-10 sm:bottom-16 right-8 sm:right-20"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: -20 }}
                                    className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-[#8CCCEC] to-[#DF98BB] shadow-lg"
                                >
                                    <Twitter className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                                </motion.div>
                            </motion.div>

                            {/* Main Content */}
                            <motion.div
                                variants={scaleIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-center max-w-2xl sm:max-w-3xl px-4"
                            >
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-advibe-dark mb-4 sm:mb-6">
                                    About Advibe
                                </h2>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="text-base sm:text-lg text-advibe-dark/80 mb-6 sm:mb-8 leading-relaxed"
                                >
                                    Advibe is a dynamic digital marketing agency
                                    that transforms brands through innovative
                                    strategies, creative content, and
                                    data-driven campaigns. We believe every
                                    brand has a unique vibe that deserves to be
                                    amplified.
                                </motion.p>

                                <Link href="/about">
                                    <motion.div whileHover={{ scale: 1.1 }}>
                                        <Button className="btn-gradient text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:scale-105 transition-transform">
                                            Read More
                                        </Button>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </section>
                    </motion.div>
                </div>
            </section>

            {/* Other Sections with Animations */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <ServicesSnapshot />
            </motion.div>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
            >
                <PlansOverview />
            </motion.div>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
            >
                <Testimonials />
            </motion.div>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
            >
                <CTABanner />
            </motion.div>
        </div>
    );
}
