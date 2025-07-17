import Link from "next/link";
import { Brain } from "lucide-react";

interface FooterLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Services",
    links: [
      { href: "/services/clarity-session", label: "Clarity Sessions" },
      { href: "/services/monthly-retainer", label: "Strategic Advisory" },
      { href: "/services/research-project", label: "Research Projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      
    ],
  },
  {
    title: "Legal",
    links: [
      { 
        href: "/terms-privacy-ethics", 
        label: "Terms, Privacy & Ethics",
        isExternal: true 
      },
      { 
        href: "/responsible-ai", 
        label: "Responsible AI",
        isExternal: true 
      },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <Brain className="h-6 w-6 text-brand-400" />
              <span className="ml-2 text-lg font-bold">CognitiveInsight.ai</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Navigate complexity with clarity through secure, AI-augmented consulting.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} CognitiveInsight.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
