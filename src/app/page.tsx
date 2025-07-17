import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import SecuritySection from "@/components/sections/SecuritySection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Home | CognitiveInsight.ai",
  description: "Navigate complexity with clarity through secure, AI-augmented consulting. Transform uncertainty into competitive advantage.",
};

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <FeaturesGrid />
      <SecuritySection />
      <CTASection />
    </PageLayout>
  );
}
