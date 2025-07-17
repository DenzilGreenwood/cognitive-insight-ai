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
    description: "We provide honest, unbiased insights even when they challenge conventional thinking or popular trends."
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in both our analytical rigor and our service delivery."
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Partnership",
    description: "We work alongside you as partners in your success, not as distant consultants with predetermined solutions."
  }
];

export default function CoreValues({ 
  title = "Our Core Values",
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
