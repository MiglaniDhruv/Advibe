import Hero from "@/components/sections/hero";
import ServicesSnapshot from "@/components/sections/services-snapshot";
import PlansOverview from "@/components/sections/plans-overview";
import Testimonials from "@/components/sections/testimonials";
import CTABanner from "@/components/sections/cta-banner";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import HomeAboutBg from "@/assets/home-about-bg.jpg"

export default function Home() {
    const { elementRef, isIntersecting } = useIntersectionObserver();

    return (
        <div>
            <Hero />

            {/* About Advibe Preview */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div
                        ref={elementRef}
                        className={`max-w-5xl mx-auto transition-all duration-700 ${
                            isIntersecting
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <section
                            className="relative flex items-center justify-center py-20 bg-white overflow-hidden rounded-2xl shadow-lg"
                            style={{
                                backgroundImage: `url(${HomeAboutBg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* Floating Icons */}
                            <div className="absolute top-10 left-20 animate-float-updown">
                                <div className="p-3 rounded-full bg-gradient-to-r from-[#8CCCEC] to-[#DF98BB] shadow-lg">
                                    <Facebook className="text-white w-6 h-6" />
                                </div>
                            </div>

                            <div className="absolute top-32 right-20 animate-float-leftright">
                                <div className="p-3 rounded-full bg-gradient-to-r from-[#8CCCEC] to-[#DF98BB] shadow-lg">
                                    <Instagram className="text-white w-6 h-6" />
                                </div>
                            </div>

                            <div className="absolute bottom-20 left-32 animate-float-circle">
                                <div className="p-3 rounded-full bg-gradient-to-r from-[#8CCCEC] to-[#DF98BB] shadow-lg">
                                    <Linkedin className="text-white w-6 h-6" />
                                </div>
                            </div>

                            <div className="absolute bottom-10 right-32 animate-float-diagonal">
                                <div className="p-3 rounded-full bg-gradient-to-r from-[#8CCCEC] to-[#DF98BB] shadow-lg">
                                    <Twitter className="text-white w-6 h-6" />
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="text-center max-w-3xl">
                                <h2 className="text-3xl md:text-4xl font-bold text-advibe-dark mb-6">
                                    About Advibe
                                </h2>
                                <p className="text-lg text-advibe-dark/80 mb-8 leading-relaxed">
                                    Advibe is a dynamic digital marketing agency
                                    that transforms brands through innovative
                                    strategies, creative content, and
                                    data-driven campaigns. We believe every
                                    brand has a unique vibe that deserves to be
                                    amplified.
                                </p>

                                <Link href="/about">
                                    <Button className="btn-gradient text-white font-semibold px-8 py-3 rounded-full">
                                        Read More
                                    </Button>
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            <ServicesSnapshot />
            <PlansOverview />
            <Testimonials />
            <CTABanner />
        </div>
    );
}
