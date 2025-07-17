import React from 'react';
import { Target, LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  price?: string;
  className?: string;
}

export default function ServiceHero({ 
  icon: Icon = Target,
  title, 
  description, 
  price,
  className = ""
}: ServiceHeroProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
        <Icon className="h-10 w-10 text-blue-600" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {title}
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        {description}
      </p>
      {price && (
        <div className="text-3xl font-bold text-blue-600 mb-8">
          {price}
        </div>
      )}
    </div>
  );
}
