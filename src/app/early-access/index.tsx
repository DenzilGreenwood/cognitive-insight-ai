import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Early Access | CognitiveInsight.ai",
  description: "Get early access to CognitiveInsight.ai and help shape the future of strategic consulting.",
};

export default function EarlyAccessIndex() {
  redirect('/early-access');
}
