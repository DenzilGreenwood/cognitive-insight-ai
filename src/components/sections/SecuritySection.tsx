import Link from "next/link";
import { Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

interface SecurityFeature {
  text: string;
}

const leftFeatures: SecurityFeature[] = [
  { text: "Client-side AES-GCM encryption with PBKDF2 (310,000 iterations)" },
  { text: "Auto-timeout after 15 minutes of inactivity" },
  { text: "Recovery keys for secure passphrase recovery" },
];

const rightFeatures: SecurityFeature[] = [
  { text: "Privacy-first architecture with no server-side data access" },
  { text: "Versioned metadata with encrypted content blobs" },
  { text: "Transparent security practices with public whitepaper" },
];

export default function SecuritySection() {
  return (
    <section className="py-16">
      <Card className="border-brand-100 bg-gradient-to-br from-blue-50 to-indigo-50" padding="lg">
        <CardContent>
          <div className="text-center mb-8">
            <Shield className="h-16 w-16 text-brand-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Zero-Knowledge Security
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Your sensitive data is encrypted client-side with AES-GCM 256-bit encryption. 
              We never have access to your unencrypted information.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {leftFeatures.map((feature) => (
                <div key={feature.text} className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-brand-600 rounded-full mt-2 mr-3" />
                  <p className="text-gray-700 leading-relaxed">{feature.text}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              {rightFeatures.map((feature) => (
                <div key={feature.text} className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-brand-600 rounded-full mt-2 mr-3" />
                  <p className="text-gray-700 leading-relaxed">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/responsible-ai" 
              className="text-brand-600 hover:text-brand-700 font-semibold transition-colors"
            >
              Read our Security Whitepaper →
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
