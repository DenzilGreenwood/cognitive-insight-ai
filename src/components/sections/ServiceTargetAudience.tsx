import React from 'react';

interface TargetAudienceColumn {
  title: string;
  items: string[];
}

interface ServiceTargetAudienceProps {
  title?: string;
  leftColumn: TargetAudienceColumn;
  rightColumn: TargetAudienceColumn;
  className?: string;
}

export default function ServiceTargetAudience({ 
  title = "Perfect For",
  leftColumn,
  rightColumn,
  className = ""
}: ServiceTargetAudienceProps) {
  return (
    <div className={`bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white mb-12 ${className}`}>
      <h2 className="text-3xl font-bold mb-6 text-center">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">
            {leftColumn.title}
          </h3>
          <ul className="space-y-2 text-blue-100">
            {leftColumn.items.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">
            {rightColumn.title}
          </h3>
          <ul className="space-y-2 text-blue-100">
            {rightColumn.items.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
