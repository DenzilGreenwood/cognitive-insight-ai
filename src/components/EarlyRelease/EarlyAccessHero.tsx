import { Lightbulb, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function EarlyAccessHero() {
  return (
    <section className="text-center py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Lightbulb className="h-10 w-10 text-orange-600" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Early Access Preview:
          <span className="text-orange-600 block">CognitiveInsight.ai</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
          I&apos;m building the future of strategic consulting—AI-augmented, privacy-first, and designed 
          to help leaders navigate complexity with clarity. Your feedback will shape what this becomes.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-orange-600 mr-2" />
            <span className="text-orange-800 font-semibold">Currently in Development</span>
          </div>
          <p className="text-orange-700 text-sm">
            This platform is actively being built. Your insights and feedback are invaluable 
            in creating something truly exceptional for strategic decision-makers.
          </p>
        </div>
      
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            <MessageSquare className="mr-2 h-5 w-5" />
            Share Your Thoughts
          </Button>
          <Button variant="outline" size="lg">
            Explore the Vision
          </Button>
        </div>
      </div>
    </section>
  );
}
