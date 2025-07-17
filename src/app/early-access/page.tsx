import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { 
  EarlyAccessHero, 
  PlatformVision, 
  FeedbackForm, 
  DevelopmentRoadmap, 
  ExploreMore 
} from "@/components/EarlyRelease";

export const metadata: Metadata = {
  title: "Early Access Preview | CognitiveInsight.ai",
  description: "Get an early look at the future of strategic consulting. AI-augmented, privacy-first, and designed to help leaders navigate complexity with clarity. Your feedback shapes what this becomes.",
  keywords: ["strategic consulting", "AI consulting", "early access", "feedback", "beta testing"],
  openGraph: {
    title: "Early Access Preview | CognitiveInsight.ai",
    description: "Shape the future of strategic consulting with your feedback and insights.",
    type: "website",
  },
};

export default function EarlyAccess() {
  return (
    <PageLayout>
      <EarlyAccessHero />
      <PlatformVision />
      <div id="feedback-form">
        <FeedbackForm />
      </div>
      <DevelopmentRoadmap />
      <ExploreMore />
    </PageLayout>
  );
}
