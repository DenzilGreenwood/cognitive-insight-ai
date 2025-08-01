"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Brain, Menu, X } from "lucide-react";
import { AuthControls } from "@/components/auth";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
  isExternal?: boolean;
}

const navigationItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/early-access", label: "Early Access" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActiveLink = (href: string) => pathname === href;

  const getLinkClassName = (href: string, isMobile = false) => {
    const baseClasses = isMobile
      ? "block px-3 py-2 text-base font-medium transition-colors"
      : "text-gray-700 hover:text-brand-600 transition-colors font-medium";

    const activeClasses = isActiveLink(href)
      ? isMobile
        ? "text-brand-600 bg-brand-50"
        : "text-brand-600"
      : "";

    return cn(baseClasses, activeClasses);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-brand-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-brand-600" />
              <span className="text-xl font-bold text-gray-900">CognitiveInsight.ai</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className={getLinkClassName(item.href)}>
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <AuthControls onMenuClose={() => setIsMenuOpen(false)} />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-brand-600 focus:outline-none p-2"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm border-t border-brand-100">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={getLinkClassName(item.href, true)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Authentication */}
              <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
                <AuthControls 
                  isMobile={true} 
                  onMenuClose={() => setIsMenuOpen(false)} 
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
