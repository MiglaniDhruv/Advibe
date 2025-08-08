import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";
import advibeLogoPath from "@assets/WhatsApp Image 2025-07-29 at 12.52.24_cd622bf7_1754653488876.jpg";

export default function Footer() {
  return (
    <footer className="bg-advibe-dark text-white py-16 border-t-4 border-advibe-pink">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src={advibeLogoPath} 
                alt="Advibe Digital Marketing Agency Logo" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-xl font-bold">Advibe</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Transform your brand with creative digital marketing solutions that drive real results and sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-advibe-pink rounded-lg flex items-center justify-center hover:bg-advibe-blue transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-advibe-pink rounded-lg flex items-center justify-center hover:bg-advibe-blue transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-advibe-pink rounded-lg flex items-center justify-center hover:bg-advibe-blue transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-advibe-pink rounded-lg flex items-center justify-center hover:bg-advibe-blue transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="fade-in">
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-advibe-pink transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-advibe-pink transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-advibe-pink transition-all">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/plans" className="text-gray-300 hover:text-advibe-pink transition-all">
                  Plans & Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-advibe-pink transition-all">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-advibe-pink transition-all">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="fade-in">
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300">Social Media Management</span>
              </li>
              <li>
                <span className="text-gray-300">Performance Marketing</span>
              </li>
              <li>
                <span className="text-gray-300">Branding & Content Creation</span>
              </li>
              <li>
                <span className="text-gray-300">Website Development & SEO</span>
              </li>
              <li>
                <span className="text-gray-300">Strategy & Consulting</span>
              </li>
              <li>
                <span className="text-gray-300">Data Tracking & Reporting</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="fade-in">
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-advibe-pink" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-advibe-pink" />
                <span className="text-gray-300">hello@advibe.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-advibe-pink mt-1" />
                <span className="text-gray-300">
                  123 Business Hub, Tech City
                  <br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center fade-in">
          <p className="text-gray-400 mb-4 md:mb-0">© 2024 Advibe. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-advibe-pink transition-all">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-advibe-pink transition-all">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-advibe-pink transition-all">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
