import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="text-center py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Navigate Complexity with
          <span className="text-brand-600 block">Clarity</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
          A secure, AI-augmented consulting platform that helps you develop insight, 
          make confident decisions, and act with purpose in an uncertain world.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
          <p className="text-orange-800 font-medium text-sm">
            🚀 Currently in development - Your feedback shapes what this becomes
          </p>
        </div>
      
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/early-access">
            <Button size="lg" className="group bg-orange-600 hover:bg-orange-700">
              Early Access Preview
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg">
              Explore Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
