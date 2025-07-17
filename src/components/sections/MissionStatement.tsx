import { Target } from "lucide-react";

interface MissionStatementProps {
  title?: string;
  mission: string;
  icon?: React.ReactNode;
}

export default function MissionStatement({ 
  title = "Our Mission",
  mission,
  icon = <Target className="h-8 w-8 text-blue-600" />
}: MissionStatementProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
      <div className="text-center">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          {icon}
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          {mission}
        </p>
      </div>
    </div>
  );
}
