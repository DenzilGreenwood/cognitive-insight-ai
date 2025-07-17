interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceProcessProps {
  title?: string;
  steps: ProcessStep[];
  className?: string;
}

export default function ServiceProcess({ 
  title = "Our Process", 
  steps,
  className = ""
}: ServiceProcessProps) {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-lg mb-12 ${className}`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        {title}
      </h2>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-bold shrink-0">
              {index + 1}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
