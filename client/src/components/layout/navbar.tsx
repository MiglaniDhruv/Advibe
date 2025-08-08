import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import advibeLogoPath from "@assets/WhatsApp Image 2025-07-29 at 12.52.24_cd622bf7_1754653488876.jpg";

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Plans & Pricing", href: "/plans" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src={advibeLogoPath} 
              alt="Advibe Digital Marketing Agency Logo" 
              className="w-12 h-12 rounded-full object-cover"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-lg transition-all font-medium ${
                  isActive(item.href)
                    ? "text-advibe-pink bg-advibe-pink/10"
                    : "text-advibe-dark hover:text-advibe-pink"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/inquiry">
              <Button className="btn-gradient text-white font-medium">
                Get Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-advibe-dark" />
            ) : (
              <Menu className="h-6 w-6 text-advibe-dark" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-all font-medium ${
                    isActive(item.href)
                      ? "text-advibe-pink bg-advibe-pink/10"
                      : "text-advibe-dark hover:text-advibe-pink"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/inquiry" onClick={() => setIsMenuOpen(false)}>
                <Button className="btn-gradient text-white font-medium w-full mt-4">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
