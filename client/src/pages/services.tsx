import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import {
    Hash,
    TrendingUp,
    Palette,
    Code,
    Lightbulb,
    BarChart3,
    Check,
} from "lucide-react";

export default function Services() {
    const heroRef = useIntersectionObserver();
    const ctaRef = useIntersectionObserver();

    const services = [
        {
            icon: (
                <div className="w-full h-full flex items-center justify-center rounded-lg bg-gradient-to-r from-[#8CCCEC] to-[#DF98BB] card-shimmer">
                    <Hash className="text-white text-2xl" />
                </div>
            ),
            title: "Social Media Management",
            description:
                "Transform your social media presence with our comprehensive management services. We create engaging content, build authentic communities, and drive meaningful interactions across all major platforms including Instagram, Facebook, Twitter, LinkedIn, and TikTok.",
            features: [
                "Strategic content planning and calendar management",
                "Professional graphic design and video content creation",
                "Community management and audience engagement",
                "Hash research and optimization strategies",
            ],
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
            alt: "Social media marketing dashboard with analytics and engagement metrics",
        },
        {
            icon: (
                <div className="w-full h-full flex items-center justify-center rounded-lg bg-gradient-to-r from-[#8CCCEC] to-[#DF98BB] card-shimmer">
                    <TrendingUp className="text-white text-2xl" />
                </div>
            ),
            title: "Performance Marketing",
            description:
                "Drive measurable results with our data-driven performance marketing strategies. We create and optimize advertising campaigns across Google Ads, Facebook Ads, Instagram Ads, and other platforms to maximize your ROI and achieve your business objectives.",
            features: [
                "Google Ads campaign creation and optimization",
                "Facebook and Instagram advertising management",
                "Conversion tracking and ROI optimization",
                "A/B testing and performance analysis",
            ],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
            alt: "Performance marketing analytics dashboard showing ROI and campaign metrics",
        },
        {
            icon: (
                <div className="w-full h-full flex items-center justify-center rounded-lg bg-gradient-to-r from-[#8CCCEC] to-[#DF98BB] card-shimmer">
                    <Palette className="text-white text-2xl" />
                </div>
            ),
            title: "Branding & Content Creation",
            description:
                "Build a distinctive brand identity that resonates with your target audience. Our creative team develops compelling visual identities, engaging content, and cohesive brand experiences that tell your unique story and differentiate you from competitors.",
            features: [
                "Logo design and brand identity development",
                "Content writing and copywriting services",
                "Video production and motion graphics",
                "Brand guidelines and style documentation",
            ],
            image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
            alt: "Creative designer working on brand identity and visual content creation",
        },
        {
            icon: (
                <div className="w-full h-full flex items-center justify-center rounded-lg bg-gradient-to-r from-[#8CCCEC] to-[#DF98BB] card-shimmer">
                    <Code className="text-white text-2xl" />
                </div>
            ),
            title: "Website Development & SEO",
            description:
                "Create powerful, user-friendly websites that drive conversions and rank well in search engines. Our development team builds responsive, fast-loading websites optimized for both user experience and search engine visibility.",
            features: [
                "Custom website design and development",
                "Search engine optimization (SEO) strategies",
                "Mobile-responsive and fast-loading designs",
                "E-commerce and CMS implementation",
            ],
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
            alt: "Web developer creating responsive websites with SEO optimization",
        },
        {
            icon: (
                <div className="w-full h-full flex items-center justify-center rounded-lg bg-gradient-to-r from-[#8CCCEC] to-[#DF98BB] card-shimmer">
                    <Lightbulb className="text-white text-2xl" />
                </div>
            ),
            title: "Strategy & Consulting",
            description:
                "Navigate the complex digital landscape with expert guidance and strategic planning. Our consultants work closely with your team to develop comprehensive marketing strategies aligned with your business goals and market opportunities.",
            features: [
                "Digital marketing strategy development",
                "Market research and competitor analysis",
                "Brand positioning and messaging frameworks",
                "Campaign planning and budget optimization",
            ],
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
            alt: "Strategic marketing consultation meeting with business experts",
        },
        {
            icon: (
                <div className="w-full h-full flex items-center justify-center rounded-lg bg-gradient-to-r from-[#8CCCEC] to-[#DF98BB] card-shimmer">
                    <BarChart3 className="text-white text-2xl" />
                </div>
            ),
            title: "Data Tracking & Reporting",
            description:
                "Make informed decisions with comprehensive analytics and transparent reporting. We provide detailed insights into campaign performance, user behavior, and ROI metrics to help you understand what's working and optimize for better results.",
            features: [
                "Google Analytics setup and configuration",
                "Custom dashboard creation and monitoring",
                "Monthly performance reports and insights",
                "KPI tracking and goal measurement",
            ],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
            alt: "Analytics dashboard displaying marketing performance data and reporting metrics",
        },
    ];

    return (
        <div>
            {/* Services Hero */}
            <section className="gradient-bg py-20 pt-32">
                <div className="container mx-auto px-4">
                    <div
                        ref={heroRef.elementRef}
                        className={`text-center max-w-4xl mx-auto transition-all duration-700 ${
                            heroRef.isIntersecting
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-advibe-dark mb-6 fade-slide">
                            Our Services
                        </h1>
                        <p className="text-xl text-advibe-dark/80 leading-relaxed">
                            Comprehensive digital marketing solutions designed
                            to elevate your brand, engage your audience, and
                            drive measurable results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Detail */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    {services.map((service, index) => {
                        const serviceRef = useIntersectionObserver();
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={service.title}
                                ref={serviceRef.elementRef}
                                className={`mb-20 transition-all duration-700 ${
                                    serviceRef.isIntersecting
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-8"
                                }`}
                            >
                                <div
                                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                                        isEven ? "" : "lg:grid-flow-col-dense"
                                    }`}
                                >
                                    <div className={isEven ? "" : "lg:order-2"}>
                                        <div className="flex items-center mb-6">
                                            <div className="w-16 h-16 service-icon rounded-2xl flex items-center justify-center mr-4 text-white animate-pulse-glow ">
                                                {service.icon}
                                            </div>
                                            <h2 className="text-3xl font-bold text-advibe-dark">
                                                {service.title}
                                            </h2>
                                        </div>
                                        <p className="text-lg text-advibe-dark/80 leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-3 mb-8">
                                            {service.features.map(
                                                (feature, featureIndex) => (
                                                    <li
                                                        key={featureIndex}
                                                        className="flex items-center opacity-0 animate-fade-slide-up"
                                                        style={{
                                                            animationDelay: `${
                                                                featureIndex *
                                                                0.15
                                                            }s`,
                                                        }}
                                                    >
                                                        <Check
                                                            className={`h-5 w-5 mr-3 ${
                                                                index % 2 === 0
                                                                    ? "text-advibe-pink"
                                                                    : "text-advibe-blue"
                                                            }`}
                                                        />
                                                        <span>{feature}</span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <Link href="/inquiry">
                                            <Button className="btn-gradient text-white font-semibold px-6 py-3 rounded-full">
                                                Get Started
                                            </Button>
                                        </Link>
                                    </div>
                                    <div className="relative overflow-hidden rounded-2xl shadow-lg group">
  <img
    src={service.image}
    alt={service.alt}
    className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
  />
</div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div
                        ref={ctaRef.elementRef}
                        className={`text-center transition-all duration-700 ${
                            ctaRef.isIntersecting
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <h3 className="text-3xl font-bold text-advibe-dark mb-6">
                            Ready to Elevate Your Marketing?
                        </h3>
                        <p className="text-lg text-advibe-dark/70 mb-8 max-w-2xl mx-auto">
                            Let's discuss which services are right for your
                            business and create a customized strategy for your
                            success.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/inquiry">
                                <Button className="btn-gradient text-white font-semibold text-lg px-8 py-4 rounded-full transform transition-transform hover:scale-105 hover:shadow-xl">
                                    Get a Free Consultation
                                </Button>
                            </Link>
                            <Link href="/plans">
                                <Button
                                    variant="outline"
                                    className="border-2 border-advibe-pink text-advibe-pink px-8 py-4 rounded-full font-semibold text-lg hover:bg-advibe-pink hover:text-white transition-all"
                                >
                                    View Our Plans
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
