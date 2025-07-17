import { Shield, Heart, Award, Users } from "lucide-react";

interface CoreValue {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CoreValuesProps {
  title?: string;
  values?: CoreValue[];
}

const defaultValues: CoreValue[] = [
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "Privacy",
    description: "Your sensitive information is protected with military-grade encryption and never stored unencrypted."
  },
  {
    icon: <Heart className="h-8 w-8 text-blue-600" />,
    title: "Integrity", 
    description: "Honest, unbiased insights are provided even when they challenge conventional thinking or popular trends."
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: "Excellence",
    description: "The highest standards are upheld in both analytical rigor and service delivery."
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Partnership",
    description: "I work alongside you as a partner in your success, not as a distant consultant with predetermined solutions."
  }
];

export default function CoreValues({ 
  title = "CognitiveInsight.ai's Core Values",
  values = defaultValues
}: CoreValuesProps) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div key={index} className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              {value.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
