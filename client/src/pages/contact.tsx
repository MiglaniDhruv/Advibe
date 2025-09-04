"use client";

import { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function Contact() {
  const formRef = useRef<HTMLDivElement>(null);
  const heroRef = useIntersectionObserver();

  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send message");
      return res.json();
    },
    onSuccess: () => {
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        reason: "",
        message: "",
      });
    },
    onError: () => {
      toast.error("Failed to send message. Try again later.");
    },
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // create WhatsApp message
    const whatsappMessage = `Hello, my name is ${formData.name}.
Email: ${formData.email}
Phone: ${formData.phone}
Reason: ${formData.reason}
Message: ${formData.message}`;

    // your WhatsApp number (international format, no + or spaces)
    const whatsappNumber = "917574968609"; // example: +91 75749 68609 → 917574968609

    // encode message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // open WhatsApp in new tab
    window.open(whatsappLink, "_blank");

    // still send to API for record-keeping
    contactMutation.mutate(formData);
  };

  return (
    <>
      {/* Contact Hero */}
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
              Contact Us
            </h1>
            <p className="text-xl text-advibe-dark/80 leading-relaxed">
              Ready to take your marketing to the next level? Let's start a
              conversation about your goals and how we can help achieve them.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div
              ref={formRef}
              className="transition-all duration-700 opacity-100 translate-y-0"
            >
              <h2 className="text-3xl font-bold text-advibe-dark mb-8">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-6">
                Have a question or business inquiry? We’d love to hear from you.
              </p>

              <div className="space-y-4">
                <p className="text-lg">📞 +91 75749 68609</p>
                <p className="text-lg">✉️ connect@advibe.club</p>
                <p className="text-lg">📍 Surat, Gujarat, India</p>
              </div>

              <div className="flex gap-4 mt-6">
                <a href="#" className="text-advibe-pink hover:underline">
                  Twitter
                </a>
                <a href="#" className="text-advibe-pink hover:underline">
                  LinkedIn
                </a>
                <a href="#" className="text-advibe-pink hover:underline">
                  Instagram
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-advibe-dark mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <Label htmlFor="reason">Reason for Contacting *</Label>
                    <select
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-advibe-pink"
                    >
                      <option value="">-- Select Reason --</option>
                      <option value="advertising">Advertising Inquiry</option>
                      <option value="partnership">
                        Partnership / Collaboration
                      </option>
                      <option value="general">General Questions</option>
                      <option value="technical">Technical Support</option>
                      <option value="feedback">Feedback / Suggestions</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message / Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="mt-2 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-gradient text-white py-4 rounded-lg font-semibold text-lg"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
