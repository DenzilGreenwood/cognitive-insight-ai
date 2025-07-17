import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="text-center py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to gain clarity?
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Start your journey toward confident decision-making today.
        </p>
        <Link href="/auth/signup">
          <Button size="lg" className="group">
            Start Your First Session
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
