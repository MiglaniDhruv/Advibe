import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const heroRef = useIntersectionObserver();
  const featuredRef = useIntersectionObserver();
  const newsletterRef = useIntersectionObserver();

  const blogPosts = [
    {
      id: 1,
      category: "SOCIAL MEDIA",
      categoryColor: "text-advibe-pink",
      title: "How to Build an Engaged Social Media Community",
      description: "Learn proven strategies for building authentic relationships with your audience and creating a thriving online community around your brand.",
      date: "March 15, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1554177255-61502b352de3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Social media engagement strategies and community building tactics",
    },
    {
      id: 2,
      category: "SEO TIPS",
      categoryColor: "text-advibe-blue",
      title: "SEO Best Practices for Small Businesses in 2024",
      description: "Discover actionable SEO strategies that small businesses can implement to improve their search rankings and drive organic traffic.",
      date: "March 12, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "SEO optimization and website performance analysis dashboard",
    },
    {
      id: 3,
      category: "EMAIL MARKETING",
      categoryColor: "text-advibe-pink",
      title: "Email Marketing Automation That Actually Works",
      description: "Master the art of email automation with these proven workflows that nurture leads and drive conversions for your business.",
      date: "March 10, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Email marketing campaign design and automation workflow",
    },
    {
      id: 4,
      category: "CONTENT STRATEGY",
      categoryColor: "text-advibe-blue",
      title: "Creating Content That Converts: A Step-by-Step Guide",
      description: "Transform your content strategy with these actionable tips for creating engaging content that drives results and builds brand loyalty.",
      date: "March 8, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Content marketing strategy development and brand storytelling workshop",
    },
    {
      id: 5,
      category: "PPC ADVERTISING",
      categoryColor: "text-advibe-pink",
      title: "Maximizing ROI from Google Ads: Advanced Strategies",
      description: "Take your Google Ads campaigns to the next level with advanced optimization techniques that seasoned marketers use to maximize ROI.",
      date: "March 5, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "PPC advertising campaign optimization and performance analysis",
    },
    {
      id: 6,
      category: "BRANDING",
      categoryColor: "text-advibe-blue",
      title: "Building a Brand Identity That Stands Out",
      description: "Learn how to create a distinctive brand identity that resonates with your target audience and sets you apart from competitors.",
      date: "March 3, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Brand identity design process and visual communication elements",
    },
  ];

  const featuredPost = {
    category: "Featured Article",
    title: "10 Digital Marketing Trends That Will Dominate 2024",
    description: "Discover the latest digital marketing trends that are shaping the industry and learn how to implement them in your marketing strategy for maximum impact and ROI.",
    author: "Sarah Anderson",
    authorInitials: "SA",
    role: "Marketing Director",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    alt: "Digital marketing strategy analysis with performance metrics and analytics",
  };

  return (
    <div>
      {/* Blog Hero */}
      <section className="gradient-bg py-20 pt-32">
        <div className="container mx-auto px-4">
          <div
            ref={heroRef.elementRef}
            className={`text-center max-w-4xl mx-auto transition-all duration-700 ${
              heroRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-advibe-dark mb-6 fade-slide">Marketing Insights</h1>
            <p className="text-xl text-advibe-dark/80 leading-relaxed">
              Stay ahead of the curve with our latest marketing tips, industry trends, and success stories.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div
            ref={featuredRef.elementRef}
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              featuredRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.alt}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="uppercase tracking-wide text-sm text-advibe-pink font-semibold mb-2">
                    {featuredPost.category}
                  </div>
                  <h2 className="text-2xl font-bold text-advibe-dark mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-advibe-dark/70 mb-6">
                    {featuredPost.description}
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 service-icon rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold text-sm">{featuredPost.authorInitials}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-advibe-dark">{featuredPost.author}</p>
                      <p className="text-sm text-advibe-dark/60">
                        {featuredPost.role} • {featuredPost.readTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => {
              const postRef = useIntersectionObserver();
              
              return (
                <article
                  key={post.id}
                  ref={postRef.elementRef}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover transition-all duration-700 ${
                    postRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className={`${post.categoryColor} text-sm font-semibold mb-2`}>
                      {post.category}
                    </div>
                    <h3 className="text-xl font-bold text-advibe-dark mb-3">
                      {post.title}
                    </h3>
                    <p className="text-advibe-dark/70 mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-advibe-dark/60">{post.date}</span>
                      <span className="text-sm text-advibe-dark/60">{post.readTime}</span>
                    </div>
                    <div className="mt-4">
                      <button className="text-advibe-pink font-semibold hover:text-advibe-blue transition-colors flex items-center">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div
            ref={newsletterRef.elementRef}
            className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
              newsletterRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-3xl font-bold text-advibe-dark mb-4">Stay Updated</h3>
            <p className="text-lg text-advibe-dark/70 mb-8">
              Subscribe to our newsletter and never miss our latest marketing insights, tips, and industry updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:border-advibe-pink focus:outline-none"
                required
              />
              <Button
                type="submit"
                className="btn-gradient text-white px-8 py-4 rounded-full font-semibold whitespace-nowrap"
              >
                Subscribe Now
              </Button>
            </form>
            <p className="text-sm text-advibe-dark/60 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
