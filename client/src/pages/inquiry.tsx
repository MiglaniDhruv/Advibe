import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { TrendingUp, Users, Headphones } from "lucide-react";
import type { InsertInquirySubmission } from "@shared/schema";

export default function Inquiry() {
  const heroRef = useIntersectionObserver();
  const formRef = useIntersectionObserver();
  const benefitsRef = useIntersectionObserver();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    planInterest: "",
    message: "",
  });

  const inquiryMutation = useMutation({
    mutationFn: async (data: InsertInquirySubmission) => {
      const response = await apiRequest("POST", "/api/inquiry", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted!",
        description: "Thank you for your inquiry. We'll contact you within 24 hours with a customized proposal.",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        planInterest: "",
        message: "",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "There was an error submitting your inquiry. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    inquiryMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      planInterest: value,
    }));
  };

  return (
    <div>
      {/* Inquiry Hero */}
      <section className="gradient-bg py-20 pt-32">
        <div className="container mx-auto px-4">
          <div
            ref={heroRef.elementRef}
            className={`text-center max-w-4xl mx-auto transition-all duration-700 ${
              heroRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-advibe-dark mb-6">Get Your Free Consultation</h1>
            <p className="text-xl text-advibe-dark/80 leading-relaxed">
              Take the first step towards transforming your digital presence. Fill out the form below and our experts will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div
              ref={formRef.elementRef}
              className={`bg-white p-8 md:p-12 rounded-2xl shadow-xl transition-all duration-700 ${
                formRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-advibe-dark mb-4">Tell Us About Your Project</h2>
                <p className="text-lg text-advibe-dark/70">The more details you provide, the better we can tailor our solution to your needs.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="inquiry-name">Full Name *</Label>
                    <Input
                      id="inquiry-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-3 py-4 text-lg"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="inquiry-email">Email Address *</Label>
                    <Input
                      id="inquiry-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-3 py-4 text-lg"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="inquiry-phone">Phone Number *</Label>
                    <Input
                      id="inquiry-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-3 py-4 text-lg"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <Label htmlFor="business-name">Business Name</Label>
                    <Input
                      id="business-name"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="mt-3 py-4 text-lg"
                      placeholder="Your business name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="plan-interest">Plan of Interest</Label>
                  <Select onValueChange={handleSelectChange} value={formData.planInterest}>
                    <SelectTrigger className="mt-3 py-4 text-lg">
                      <SelectValue placeholder="Select a plan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="silver">Silver Plan - ₹15,000/month</SelectItem>
                      <SelectItem value="gold">Gold Plan - ₹21,000/month</SelectItem>
                      <SelectItem value="diamond">Diamond Plan - ₹36,000/month</SelectItem>
                      <SelectItem value="custom">Custom Solution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="inquiry-message">Tell Us About Your Goals *</Label>
                  <Textarea
                    id="inquiry-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="mt-3 py-4 text-lg resize-none"
                    placeholder="Describe your business, current marketing challenges, and what you hope to achieve..."
                  />
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-advibe-dark mb-4">What happens next?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-advibe-pink rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-semibold">1</span>
                      </div>
                      <span className="text-advibe-dark/80">We'll review your inquiry within 24 hours</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-advibe-blue rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-semibold">2</span>
                      </div>
                      <span className="text-advibe-dark/80">Schedule a free 30-minute consultation call</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-advibe-pink rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-semibold">3</span>
                      </div>
                      <span className="text-advibe-dark/80">Receive a customized marketing strategy proposal</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="btn-gradient text-white font-bold text-xl shadow-lg px-12 py-5 rounded-full"
                    disabled={inquiryMutation.isPending}
                  >
                    {inquiryMutation.isPending ? "Submitting..." : "Get My Free Consultation"}
                  </Button>
                  <p className="text-sm text-advibe-dark/60 mt-4">No spam, no commitment. Just valuable insights for your business.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Quick Highlights */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div
            ref={benefitsRef.elementRef}
            className={`text-center mb-12 transition-all duration-700 ${
              benefitsRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-3xl font-bold text-advibe-dark mb-4">Why Businesses Choose Advibe</h3>
            <p className="text-lg text-advibe-dark/70">Join hundreds of successful businesses who trust us with their digital marketing.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center fade-in">
              <div className="w-16 h-16 service-icon rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-advibe-dark mb-3">Proven Results</h4>
              <p className="text-advibe-dark/70">Average 300% increase in online engagement within the first 3 months.</p>
            </div>

            <div className="text-center fade-in">
              <div className="w-16 h-16 service-icon rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-advibe-dark mb-3">Expert Team</h4>
              <p className="text-advibe-dark/70">Certified marketing professionals with 5+ years of industry experience.</p>
            </div>

            <div className="text-center fade-in">
              <div className="w-16 h-16 service-icon rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-advibe-dark mb-3">24/7 Support</h4>
              <p className="text-advibe-dark/70">Dedicated account managers and round-the-clock support for your success.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
