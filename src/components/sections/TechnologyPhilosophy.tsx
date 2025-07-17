import { Brain } from "lucide-react";

interface TechnologyPhilosophyProps {
  title?: string;
  description?: string;
  features?: string[];
  securityTitle?: string;
  securityFeatures?: {
    title: string;
    description: string;
  }[];
}

const defaultFeatures = [
  "Enhance pattern recognition and data analysis",
  "Accelerate research and insight generation", 
  "Maintain complete data privacy and security",
  "Support human judgment, not supplant it"
];

const defaultSecurityFeatures = [
  {
    title: "Zero-Knowledge Architecture:",
    description: "Your sensitive data is encrypted on your device before it ever reaches our servers. We literally cannot see your confidential information."
  },
  {
    title: "Military-Grade Encryption:",
    description: "We use AES-256 encryption with PBKDF2 key derivation and 310,000 iterations to protect your data."
  },
  {
    title: "No Data Mining:",
    description: "Your data is not sold, AI models are not trained on your information, and your insights are not used for any purpose other than serving you."
  },
  {
    title: "Compliance Ready:",
    description: "Our architecture supports GDPR, HIPAA, and other regulatory requirements out of the box."
  }
];

export default function TechnologyPhilosophy({ 
  title = "CognitiveInsight.ai's Technology Philosophy",
  description = "AI is designed to augment human intelligence, not replace it. The technology stack is designed to:",
  features = defaultFeatures,
  securityTitle = "Security & Privacy",
  securityFeatures = defaultSecurityFeatures
}: TechnologyPhilosophyProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 mb-16">
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <Brain className="h-12 w-12 text-indigo-200 mb-6" />
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-indigo-100 mb-4">{description}</p>
        <ul className="space-y-2 text-indigo-100">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{securityTitle}</h2>
        <div className="space-y-4 text-gray-600">
          {securityFeatures.map((feature, index) => (
            <p key={index}>
              <strong>{feature.title}</strong> {feature.description}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
