import Link from "next/link";
import { Brain, Target, CheckCircle, ArrowRight } from "lucide-react";

export default function ClaritySession() {
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

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Clarity Session
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A focused 90-minute session designed to transform complexity into actionable clarity
          </p>
          <div className="text-3xl font-bold text-blue-600 mb-8">$297</div>
        </div>

        {/* What You Get */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What&apos;s Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">90-Minute Deep Dive Session</h3>
                <p className="text-gray-600">Focused exploration of your specific challenge with expert guidance</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Visual Clarity Map</h3>
                <p className="text-gray-600">Custom-designed visual representation of your situation and pathways forward</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Actionable Insights</h3>
                <p className="text-gray-600">Practical recommendations you can implement immediately</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Summary Document</h3>
                <p className="text-gray-600">Comprehensive follow-up document with key insights and next steps</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Resource Library Access</h3>
                <p className="text-gray-600">30-day access to relevant frameworks and tools</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Follow-up Email Support</h3>
                <p className="text-gray-600">One week of email support for clarification questions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Process</h2>
          <div className="space-y-8">
            <div className="flex">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-bold">1</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pre-Session Preparation</h3>
                <p className="text-gray-600">Complete our structured intake form and receive a preparation guide to maximize session value.</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-bold">2</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Context & Challenge Mapping</h3>
                <p className="text-gray-600">We begin by thoroughly understanding your situation, constraints, and desired outcomes.</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-bold">3</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Perspective Analysis</h3>
                <p className="text-gray-600">Using proven frameworks and AI-assisted analysis, we examine your challenge from multiple angles.</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-bold">4</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Insight Synthesis</h3>
                <p className="text-gray-600">We distill complex analysis into clear insights and create your personalized clarity map.</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-bold">5</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Action Planning</h3>
                <p className="text-gray-600">Together, we develop concrete next steps and implementation strategies.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Who It&apos;s For */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Perfect For</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Business Leaders Who:</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Face complex strategic decisions</li>
                <li>• Need to navigate organizational change</li>
                <li>• Want to validate their thinking</li>
                <li>• Seek an outside perspective</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Situations Like:</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Market entry decisions</li>
                <li>• Team restructuring challenges</li>
                <li>• Technology adoption strategies</li>
                <li>• Crisis response planning</li>
              </ul>
            </div>
          </div>
        </div>

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
