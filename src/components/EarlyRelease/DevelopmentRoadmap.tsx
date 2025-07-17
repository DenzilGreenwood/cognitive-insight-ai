import { Calendar, TrendingUp, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const roadmapItems = [
  {
    quarter: "Q3 2025",
    title: "Foundation & Beta",
    status: "current",
    items: [
      "Complete security architecture",
      "Launch beta clarity sessions",
      "Gather user feedback",
      "Refine AI integration"
    ]
  },
  {
    quarter: "Q4 2025",
    title: "Core Platform",
    status: "planned",
    items: [
      "Full clarity session rollout",
      "Monthly retainer program",
      "Enhanced collaboration tools",
      "Mobile optimization"
    ]
  },
  {
    quarter: "Q1 2026",
    title: "Advanced Features",
    status: "planned",
    items: [
      "Research project capabilities",
      "Team workspace features",
      "Advanced analytics",
      "API integrations"
    ]
  },
  {
    quarter: "Q2 2026",
    title: "Enterprise Scale",
    status: "planned",
    items: [
      "Enterprise security features",
      "Custom integrations",
      "Advanced reporting",
      "White-label options"
    ]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "current": return "bg-orange-100 border-orange-300 text-orange-800";
    case "planned": return "bg-blue-100 border-blue-300 text-blue-800";
    default: return "bg-gray-100 border-gray-300 text-gray-800";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "current": return <Zap className="h-5 w-5" />;
    case "planned": return <Calendar className="h-5 w-5" />;
    default: return <TrendingUp className="h-5 w-5" />;
  }
};

export default function DevelopmentRoadmap() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Development Roadmap
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A transparent view of what&apos;s being built and when. Your feedback directly 
            influences these priorities and timelines.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {roadmapItems.map((item, index) => (
            <Card 
              key={index}
              className={`border-2 transition-all duration-300 hover:shadow-lg ${getStatusColor(item.status)}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {getStatusIcon(item.status)}
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm opacity-75">{item.quarter}</p>
                    </div>
                  </div>
                  {item.status === "current" && (
                    <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Active
                    </div>
                  )}
                </div>

                <ul className="space-y-2">
                  {item.items.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-current rounded-full mt-2 mr-3 flex-shrink-0 opacity-60" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <Users className="h-8 w-8 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Community-Driven Development
            </h3>
            <p className="text-gray-600 text-sm">
              This roadmap is flexible and responsive to user needs. The most requested 
              features and highest-impact improvements will be prioritized. Your voice 
              matters in shaping the future of strategic consulting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
