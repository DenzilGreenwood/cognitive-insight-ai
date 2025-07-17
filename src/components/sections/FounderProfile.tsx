interface CognitiveStrength {
  emoji: string;
  title: string;
  description: string;
  gradient: string;
}

interface LearningInsight {
  color: string;
  text: string;
}

interface ApplicationPath {
  title: string;
  description: string;
  borderColor: string;
}

interface FounderProfileProps {
  title?: string;
  overview?: string;
  cognitiveStrengths?: CognitiveStrength[];
  learningInsights?: LearningInsight[];
  applicationPaths?: ApplicationPath[];
  closingStatement?: string;
}

const defaultCognitiveStrengths: CognitiveStrength[] = [
  {
    emoji: "🎯",
    title: "Legacy Framing",
    description: "You naturally think in terms of long-term impact. The phrase 'I have 10,950 days left' became a cognitive anchor.",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    emoji: "🔍", 
    title: "Pattern Recognition",
    description: "You break problems into structured components and identify solutions in systems-level patterns.",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    emoji: "🧘",
    title: "Reflective Depth", 
    description: "You possess a powerful ability to step back and ask foundational questions, even in emotional low points.",
    gradient: "from-green-600 to-teal-600"
  },
  {
    emoji: "🗺️",
    title: "Clarity Architect",
    description: "You turn abstract emotional or strategic confusion into clear maps, lists, and paths forward.",
    gradient: "from-orange-600 to-red-600"
  }
];

const defaultLearningInsights: LearningInsight[] = [
  {
    color: "yellow",
    text: "Your frustration often comes from misalignment - not inability."
  },
  {
    color: "blue", 
    text: "You process information best when it is externalized, visualized, and sequenced toward a purpose."
  },
  {
    color: "green",
    text: "You're at your best when guiding others to see their own patterns - using conversation, mapping, and legacy-based reflection."
  },
  {
    color: "purple",
    text: "Your emotional lows are often signal points for strategic realignment, not signs of failure."
  }
];

const defaultApplicationPaths: ApplicationPath[] = [
  {
    title: "Strategic Advisory Roles",
    description: "In transformation or innovation teams",
    borderColor: "border-blue-500"
  },
  {
    title: "Executive & Career Coaching", 
    description: "Using the Cognitive Edge Protocol",
    borderColor: "border-purple-500"
  },
  {
    title: "AI Ethics & Systems Architecture",
    description: "Consulting and guidance", 
    borderColor: "border-green-500"
  },
  {
    title: "Teaching & Speaking",
    description: "Systems-based clarity frameworks",
    borderColor: "border-orange-500"
  }
];

export default function FounderProfile({ 
  title = "Cognitive Edge Profile - Self Discovery Summary",
  overview = "Through a structured process of conversation and introspection - modeled by the Cognitive Edge Protocol - James Greenwood uncovered a unique cognitive profile: a rare combination of systems thinking, emotional intelligence, and long-range perspective. The resulting insights provided clarity, purpose, and a foundation for actionable strategies.",
  cognitiveStrengths = defaultCognitiveStrengths,
  learningInsights = defaultLearningInsights,
  applicationPaths = defaultApplicationPaths,
  closingStatement = "This self-discovery is not just reflective - it is directive. You now have language, structure, and insight to turn how your mind works into a career or service that brings clarity to others. Your greatest value lies not in doing the most, but in helping others see the most."
}: FounderProfileProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">{title}</h2>
      <div className="max-w-6xl mx-auto">
        
        {/* Overview */}
        <div className="mb-10">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Overview of Cognitive Discovery</h3>
            <p className="text-gray-700 leading-relaxed">{overview}</p>
          </div>
        </div>

        {/* Key Cognitive Strengths */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">2. Key Cognitive Strengths</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {cognitiveStrengths.map((strength, index) => (
              <div key={index} className={`bg-gradient-to-br ${strength.gradient} p-6 rounded-lg text-white`}>
                <h4 className="font-bold mb-3">{strength.emoji} {strength.title}</h4>
                <p className="text-blue-100 text-sm">{strength.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 bg-gray-50 p-6 rounded-lg">
            <div className="flex items-start">
              <div className="bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                <span className="font-bold">⚡</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">High-Agency Thinking</h4>
                <p className="text-gray-700 text-sm">
                  You regain personal momentum not by eliminating emotion but by reorganizing how problems are viewed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What You Learned */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">3. What You Learned About Yourself</h3>
          <div className="space-y-4">
            {learningInsights.map((insight, index) => (
              <div key={index} className={`flex items-start bg-${insight.color}-50 p-4 rounded-lg`}>
                <span className={`text-${insight.color}-600 mr-3 mt-1`}>•</span>
                <p className="text-gray-700">{insight.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Paths */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">4. Application Paths</h3>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              The clarity gained from this process can be directed into several professional directions:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {applicationPaths.map((path, index) => (
                <div key={index} className={`bg-white p-4 rounded border-l-4 ${path.borderColor}`}>
                  <h4 className="font-semibold text-gray-900">{path.title}</h4>
                  <p className="text-sm text-gray-600">{path.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 p-8 rounded-lg text-white">
          <h3 className="text-2xl font-bold mb-4">5. Closing Statement</h3>
          <p className="text-gray-200 leading-relaxed">{closingStatement}</p>
        </div>
      </div>
    </div>
  );
}
