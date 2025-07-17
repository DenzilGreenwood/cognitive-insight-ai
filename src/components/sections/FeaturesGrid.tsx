import { Target, Users, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Target,
    title: "Clarity Sessions",
    description: "90-minute focused sessions to navigate complexity and develop actionable insights with visual clarity maps delivered.",
  },
  {
    icon: Users,
    title: "Strategic Advisory",
    description: "Ongoing strategic support with monthly insights, priority access, and quarterly strategic reviews.",
  },
  {
    icon: Brain,
    title: "Insight Reports",
    description: "Deep-dive research and analysis for complex strategic challenges with implementation roadmaps.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-16">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <Card 
              key={feature.title}
              className="border-brand-100 hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="text-center">
                <IconComponent className="h-12 w-12 text-brand-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
