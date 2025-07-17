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
      
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services">
            <Button size="lg" className="group">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
