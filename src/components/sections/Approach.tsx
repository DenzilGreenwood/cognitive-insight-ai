interface ApproachStep {
  title: string;
  description: string;
}

interface ApproachProps {
  title?: string;
  steps?: ApproachStep[];
}

const defaultSteps: ApproachStep[] = [
  {
    title: "Deep Understanding",
    description: "We invest time in truly understanding your context, challenges, and aspirations before proposing solutions."
  },
  {
    title: "Multi-Perspective Analysis",
    description: "We examine challenges from multiple angles using both human intuition and AI-powered pattern recognition."
  },
  {
    title: "Actionable Synthesis",
    description: "We distill complex analysis into clear insights and practical recommendations you can act on immediately."
  }
];

export default function Approach({ 
  title = "Our Approach",
  steps = defaultSteps
}: ApproachProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
