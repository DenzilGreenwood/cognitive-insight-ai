"use client";

import Link from "next/link";
import { ExternalLink, BookOpen, Lock, Brain, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const exploreItems = [
  {
    icon: Target,
    title: "Service Offerings",
    description: "Explore the clarity sessions, retainers, and research projects being built",
    link: "/services",
    linkText: "View Services"
  },
  {
    icon: Brain,
    title: "AI & Technology",
    description: "Learn about the responsible AI approach and privacy-first architecture",
    link: "/responsible-ai",
    linkText: "Read About AI"
  },
  {
    icon: BookOpen,
    title: "Mission & Vision",
    description: "Understand the story behind CognitiveInsight.ai and what drives this work",
    link: "/about",
    linkText: "About the Mission"
  },
  {
    icon: Lock,
    title: "Security & Privacy",
    description: "Dive deep into the zero-knowledge encryption and privacy commitments",
    link: "/terms-privacy-ethics",
    linkText: "Privacy Details"
  }
];

export default function ExploreMore() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <BookOpen className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore the Full Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dive deeper into the platform, understand the approach, and see how 
            CognitiveInsight.ai is being designed to transform strategic consulting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {exploreItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={index}
                className="border-orange-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        {item.description}
                      </p>
                      <Link href={item.link}>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-orange-200 text-orange-600 hover:bg-orange-50"
                        >
                          {item.linkText}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Shape the Future?
          </h3>
          <p className="text-xl mb-6 text-orange-100">
            Your insights and feedback are the foundation of what CognitiveInsight.ai becomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-orange-600 hover:bg-orange-50"
              onClick={() => {
                document.getElementById('feedback-form')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Share Your Feedback
            </Button>
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Schedule a Discussion
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
