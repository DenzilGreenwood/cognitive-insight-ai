import { 
  Navigation, 
  Footer, 
  AboutHero,
  MissionStatement,
  AboutStory,
  CoreValues,
  Approach,
  TechnologyPhilosophy,
  FounderProfile,
  CallToAction
} from "@/components";

export default function About() {
  const storyContent = {
    title: "Our Story",
    content: [
      "CognitiveInsight.ai was born from a simple observation: in our data-rich, hyper-connected world, leaders often find themselves drowning in information but starving for insight.",
      "Traditional consulting, while valuable, often falls short in our rapidly changing environment. Meanwhile, AI tools, despite their power, lack the nuanced understanding that complex business challenges require.",
      "We saw an opportunity to bridge this gap—combining the analytical power of artificial intelligence with deep human expertise, all while maintaining the highest standards of privacy and security.",
      "Today, we serve leaders across industries who need more than just data—they need clarity, confidence, and actionable pathways forward."
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AboutHero 
          description="We believe that in a world of overwhelming complexity, clarity is the ultimate competitive advantage. Our mission is to help leaders and organizations navigate uncertainty with confidence."
        />

        <MissionStatement 
          mission="To transform complexity into clarity through AI-augmented consulting that respects privacy, enhances human judgment, and delivers actionable insights that drive confident decision-making."
        />

        <AboutStory storySection={storyContent} />

        <CoreValues />

        <Approach />

        <TechnologyPhilosophy />

        <FounderProfile />

        <CallToAction />
      </div>

      <Footer />
    </div>
  );
}
