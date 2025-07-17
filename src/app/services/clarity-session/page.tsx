import Link from "next/link";
import { Brain, Target, ArrowRight } from "lucide-react";
import { 
  ServiceHero, 
  ServiceIncludes, 
  ServiceProcess, 
  ServiceTargetAudience 
} from "@/components";

export default function ClaritySession() {
  // Service data for components
  const serviceIncludes = [
    {
      title: "90-Minute Deep Dive Session",
      description: "Focused exploration of your specific challenge with expert guidance"
    },
    {
      title: "Visual Clarity Map", 
      description: "Custom-designed visual representation of your situation and pathways forward"
    },
    {
      title: "Actionable Insights",
      description: "Practical recommendations you can implement immediately"
    },
    {
      title: "Summary Document",
      description: "Comprehensive follow-up document with key insights and next steps"
    },
    {
      title: "Resource Library Access",
      description: "30-day access to relevant frameworks and tools"
    },
    {
      title: "Follow-up Email Support", 
      description: "One week of email support for clarification questions"
    }
  ];

  const processSteps = [
    {
      title: "Pre-Session Preparation",
      description: "Complete our structured intake form and receive a preparation guide to maximize session value."
    },
    {
      title: "Context & Challenge Mapping",
      description: "We begin by thoroughly understanding your situation, constraints, and desired outcomes."
    },
    {
      title: "Multi-Perspective Analysis",
      description: "Using proven frameworks and AI-assisted analysis, we examine your challenge from multiple angles."
    },
    {
      title: "Insight Synthesis",
      description: "We distill complex analysis into clear insights and create your personalized clarity map."
    },
    {
      title: "Action Planning",
      description: "Together, we develop concrete next steps and implementation strategies."
    }
  ];

  const targetAudience = {
    leftColumn: {
      title: "Business Leaders Who:",
      items: [
        "Face complex strategic decisions",
        "Need to navigate organizational change", 
        "Want to validate their thinking",
        "Seek an outside perspective"
      ]
    },
    rightColumn: {
      title: "Situations Like:",
      items: [
        "Market entry decisions",
        "Team restructuring challenges",
        "Technology adoption strategies", 
        "Crisis response planning"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Brain className="h-8 w-8 text-blue-600 mr-2" />
                <span className="text-xl font-bold text-gray-900">CognitiveInsight.ai</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/services" className="text-blue-600 font-semibold">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
              <Link href="/auth/signin" className="text-blue-600 hover:text-blue-800 transition-colors">Sign In</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ServiceHero 
          icon={Target}
          title="Clarity Session"
          description="A focused 90-minute session designed to transform complexity into actionable clarity"
          price="$297"
        />

        <ServiceIncludes items={serviceIncludes} />

        <ServiceProcess steps={processSteps} />

        <ServiceTargetAudience 
          leftColumn={targetAudience.leftColumn}
          rightColumn={targetAudience.rightColumn}
        />

        {/* Testimonial */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <div className="text-center">
            <div className="text-4xl text-blue-600 mb-4">&quot;</div>
            <p className="text-lg text-gray-600 italic mb-6">
              The Clarity Session gave me the confidence to make a decision I&apos;d been struggling with for months. 
              The visual map they created is still on my wall as a daily reminder of our strategic direction.
            </p>
            <div className="flex items-center justify-center">
              <div className="bg-gray-200 w-12 h-12 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold text-gray-900">Sarah Chen</p>
                <p className="text-gray-600">CEO, TechStart Inc.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-green-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Real Results</h2>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Market Entry Decision - Technology Executive</h3>
            <p className="text-gray-600 mb-4">
              <strong>Challenge:</strong> Senior executive at a Fortune 500 company facing a critical market entry decision 
              worth $50M+ but struggling with internal stakeholder alignment and unclear success metrics.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>90-Minute Session Result:</strong> Created a comprehensive clarity map identifying 3 key decision 
              factors, aligned stakeholder priorities, and established clear go/no-go criteria.
            </p>
            <p className="text-gray-600">
              <strong>Outcome:</strong> Decision made within 2 weeks (previously stalled for 4 months), 
              successful market entry launched 6 months ahead of original timeline.
            </p>
          </div>
        </div>

        {/* Additional Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-2xl text-blue-600 mb-3">&quot;</div>
            <p className="text-gray-600 italic mb-4">
              Saved our team weeks of analysis. The clarity map revealed blind spots we never would have found on our own.
            </p>
            <div>
              <p className="font-semibold text-gray-900">Marcus Rivera</p>
              <p className="text-sm text-gray-600">VP Strategy, FinTech Startup</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-2xl text-blue-600 mb-3">&quot;</div>
            <p className="text-gray-600 italic mb-4">
              The structured approach transformed our chaotic expansion planning into a clear, actionable strategy.
            </p>
            <div>
              <p className="font-semibold text-gray-900">Jennifer Wu</p>
              <p className="text-sm text-gray-600">Chief Operating Officer, Healthcare SaaS</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How soon can I schedule a session?</h3>
              <p className="text-gray-600">Most Clarity Sessions can be scheduled within 48-72 hours of booking.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I reschedule if needed?</h3>
              <p className="text-gray-600">Yes, we offer flexible rescheduling up to 24 hours before your session.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my information kept confidential?</h3>
              <p className="text-gray-600">Absolutely. We use zero-knowledge encryption and can sign NDAs when required.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I need more time?</h3>
              <p className="text-gray-600">Sessions can be extended in 30-minute increments, or you can book additional sessions at a discount.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/auth/signup?service=clarity_session" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Book Your Clarity Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <p className="text-gray-600 mt-4">Money-back guarantee if you&apos;re not completely satisfied</p>
        </div>
      </div>
    </div>
  );
}
