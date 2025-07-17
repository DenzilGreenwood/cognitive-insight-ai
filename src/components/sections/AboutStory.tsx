import { Shield, Zap, Target } from "lucide-react";

interface StorySection {
  title: string;
  content: string[];
}

interface DifferentiatorItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface AboutStoryProps {
  storySection: StorySection;
  differentiators?: DifferentiatorItem[];
}

const defaultDifferentiators: DifferentiatorItem[] = [
  {
    icon: <Shield className="h-6 w-6 text-blue-200 mr-3 mt-1" />,
    title: "Privacy-First Architecture",
    description: "Zero-knowledge encryption ensures your data never leaves your control."
  },
  {
    icon: <Zap className="h-6 w-6 text-blue-200 mr-3 mt-1" />,
    title: "AI-Human Synthesis",
    description: "We augment human insight with AI capabilities, not replace judgment with algorithms."
  },
  {
    icon: <Target className="h-6 w-6 text-blue-200 mr-3 mt-1" />,
    title: "Action-Oriented Results",
    description: "Every insight comes with clear, practical next steps you can implement immediately."
  }
];

export default function AboutStory({ 
  storySection,
  differentiators = defaultDifferentiators
}: AboutStoryProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 mb-16">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{storySection.title}</h2>
        <div className="space-y-4 text-gray-600">
          {storySection.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-6">What Makes Us Different</h3>
        <div className="space-y-4">
          {differentiators.map((item, index) => (
            <div key={index} className="flex items-start">
              {item.icon}
              <div>
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-blue-100 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
