import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { TrendingUp, Users, Headphones } from "lucide-react";
import ConsultationHero from "../assets/ConsultationHero.jpg"

export default function Inquiry() {
  const heroRef = useIntersectionObserver();
  const formRef = useIntersectionObserver();
  const benefitsRef = useIntersectionObserver();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    planInterest: "",
    message: "",
  });

  // default target number
  const [targetNumber, setTargetNumber] = useState("917574968609");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
📩 New Inquiry:
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
🏢 Business: ${formData.businessName || "N/A"}
📌 Plan Interest: ${formData.planInterest || "Not specified"}
📝 Message: ${formData.message}
    `;

    // Open WhatsApp with selected number
    const url = `https://wa.me/${targetNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
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
      <section
                className="relative h-[60vh] md:h-[75vh] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${ConsultationHero})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Get Your Free Consultation
                    </h1>
                    <p className="text-xl text-gray-200 leading-relaxed">
                        Take the first step towards transforming your digital presence. Fill out the form below and our experts will get back to you on WhatsApp.
                    </p>
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
                <p className="text-lg text-advibe-dark/70">
                  The more details you provide, the better we can tailor our solution to your needs.
                </p>
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

                {/* Plan Interest */}
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

                {/* WhatsApp Number Selection */}
                <div>
                  <Label htmlFor="contact-number">Send To *</Label>
                  <Select onValueChange={setTargetNumber} value={targetNumber}>
                    <SelectTrigger className="mt-3 py-4 text-lg">
                      <SelectValue placeholder="Choose a number" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="917574968609">+91 75749 68609</SelectItem>
                      <SelectItem value="919879002715">+91 98790 02715</SelectItem>
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

                <div className="text-center">
                  <Button
                    type="submit"
                    className="btn-gradient text-white font-bold text-xl shadow-lg px-12 py-5 rounded-full"
                  >
                    Send on WhatsApp
                  </Button>
                  <p className="text-sm text-advibe-dark/60 mt-4">
                    You’ll be redirected to WhatsApp with your inquiry details.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div
            ref={benefitsRef.elementRef}
            className={`text-center mb-12 transition-all duration-700 ${
              benefitsRef.isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-3xl font-bold text-advibe-dark mb-4">Why Businesses Choose Advibe</h3>
            <p className="text-lg text-advibe-dark/70">
              Join hundreds of successful businesses who trust us with their digital marketing.
            </p>
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
