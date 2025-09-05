import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import advibeLogoPath from "@assets/WhatsApp Image 2025-07-29 at 12.52.24_cd622bf7_1754653488876.jpg";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#0a0a0a] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src={advibeLogoPath}
                alt="Advibe Digital Marketing Agency Logo"
                className="w-20 h-20 rounded-full object-cover shadow-lg"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Transform your brand with creative digital marketing solutions
              that drive real results and sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-advibe-pink rounded-lg flex items-center justify-center hover:bg-advibe-blue hover:scale-105 transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-advibe-pink rounded-lg flex items-center justify-center hover:bg-advibe-blue hover:scale-105 transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-advibe-pink rounded-lg flex items-center justify-center hover:bg-advibe-blue hover:scale-105 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-advibe-pink rounded-lg flex items-center justify-center hover:bg-advibe-blue hover:scale-105 transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/plans" className="footer-link">Plans & Pricing</a></li>
              <li><a href="/blog" className="footer-link">Blog</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="/services#social-media-management" className="footer-link">Social Media Management</a></li>
              <li><a href="/services#performance-marketing" className="footer-link">Performance Marketing</a></li>
              <li><a href="/services#branding-content" className="footer-link">Branding & Content Creation</a></li>
              <li><a href="/services#website-seo" className="footer-link">Website Development & SEO</a></li>
              <li><a href="/services#strategy-consulting" className="footer-link">Strategy & Consulting</a></li>
              <li><a href="/services#data-tracking" className="footer-link">Data Tracking & Reporting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-advibe-pink" />
                <span className="text-gray-300">+91 75749 68609</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-advibe-pink" />
                <span className="text-gray-300">+91 98790 02715</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-advibe-pink" />
                <span className="text-gray-300">connect@advibe.club</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-advibe-pink mt-1" />
                <span className="text-gray-300">
                  B-1/302 Sarthak Resideny, Pal
                  <br />
                  Surat, Gujarat 394510
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Advibe. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy" className="footer-link">Privacy Policy</a>
            <a href="/terms" className="footer-link">Terms of Service</a>
            <a href="/cookies" className="footer-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ✅ Add a shared class for links (keeps code clean)
const linkClass = "text-gray-300 hover:text-advibe-pink transition-all duration-300 hover:translate-x-1";
