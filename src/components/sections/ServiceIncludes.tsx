import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceIncludesProps {
  title?: string;
  items: ServiceItem[];
  className?: string;
}

export default function ServiceIncludes({ 
  title = "What's Included", 
  items,
  className = ""
}: ServiceIncludesProps) {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-lg mb-12 ${className}`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
