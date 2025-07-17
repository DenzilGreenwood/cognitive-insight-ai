import { Target, Users, FileText, Brain, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const visionItems = [
  {
    icon: Target,
    title: "90-Minute Clarity Sessions",
    description: "Focused strategic sessions that transform complex challenges into actionable insights with visual clarity maps.",
    status: "In Development"
  },
  {
    icon: Users,
    title: "Monthly Strategic Retainers",
    description: "Ongoing partnership providing continuous strategic support with priority access and quarterly reviews.",
    status: "Designed"
  },
  {
    icon: FileText,
    title: "Deep Research Projects",
    description: "Comprehensive 4-6 week research initiatives with implementation roadmaps for complex strategic challenges.",
    status: "Planned"
  },
  {
    icon: Brain,
    title: "AI-Augmented Analysis",
    description: "Advanced AI tools that enhance human expertise to deliver deeper insights and pattern recognition.",
    status: "Core Feature"
  },
  {
    icon: Shield,
    title: "Zero-Knowledge Security",
    description: "Client-side AES-GCM encryption ensures your strategic data never reaches servers unencrypted.",
    status: "Implemented"
  },
  {
    icon: Zap,
    title: "Real-Time Collaboration",
    description: "Secure workspace for strategic planning with encrypted team collaboration features.",
    status: "Future Release"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Implemented": return "bg-green-100 text-green-800";
    case "In Development": return "bg-blue-100 text-blue-800";
    case "Core Feature": return "bg-purple-100 text-purple-800";
    case "Designed": return "bg-yellow-100 text-yellow-800";
    case "Planned": return "bg-gray-100 text-gray-800";
    case "Future Release": return "bg-orange-100 text-orange-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export default function PlatformVision() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          The Vision: Strategic Consulting Reimagined
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          CognitiveInsight.ai combines human expertise with AI capabilities to deliver 
          strategic insights that are faster, deeper, and more actionable than traditional consulting.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visionItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Card 
              key={index}
              className="border-orange-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative"
            >
              <CardContent className="text-center pt-6">
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </div>
                
                <IconComponent className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
