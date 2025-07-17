interface AboutHeroProps {
  title?: string;
  subtitle?: string;
  description: string;
}

export default function AboutHero({ 
  title = "About",
  subtitle = "CognitiveInsight.ai",
  description
}: AboutHeroProps) {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {title}
        <span className="text-blue-600 block">{subtitle}</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}
