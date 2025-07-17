import Link from "next/link";
import { Brain, Compass, CheckCircle, Clock, Users, ArrowRight, Zap } from "lucide-react";

export default function MonthlyRetainer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-green-100">
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
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Compass className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Monthly Retainer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ongoing strategic partnership for continuous organizational evolution
          </p>
          <div className="text-3xl font-bold text-green-600 mb-8">$1,497/month</div>
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block text-sm font-semibold">
            Most Popular Choice
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Organizations Choose Monthly Retainers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Immediate Access</h3>
              <p className="text-gray-600">Skip the onboarding delay. Get strategic support when you need it most.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Evolution</h3>
              <p className="text-gray-600">Stay ahead of change with ongoing strategic guidance and insights.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Extended Team Member</h3>
              <p className="text-gray-600">I become part of your strategic thinking process, not just an external consultant.</p>
            </div>
          </div>
        </div>

        {/* What&apos;s Included */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Monthly Inclusions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">4 Strategic Sessions</h3>
                <p className="text-gray-600">Weekly 60-minute sessions for ongoing challenges and opportunities</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Unlimited Email Support</h3>
                <p className="text-gray-600">Quick questions and insights between sessions</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Monthly Strategy Report</h3>
                <p className="text-gray-600">Comprehensive analysis of progress, insights, and recommendations</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Priority Scheduling</h3>
                <p className="text-gray-600">Skip the waiting list for urgent strategic needs</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Custom Framework Development</h3>
                <p className="text-gray-600">Tailored tools and processes specific to your organization</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Team Training Sessions</h3>
                <p className="text-gray-600">Monthly workshops to build internal strategic thinking capabilities</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Resource Library Access</h3>
                <p className="text-gray-600">Full access to our framework library and strategic tools</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Quarterly Business Reviews</h3>
                <p className="text-gray-600">Deep-dive sessions to assess progress and recalibrate strategy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Areas We Cover</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Strategic Planning</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Vision & mission alignment</li>
                <li>• Goal setting & prioritization</li>
                <li>• Market analysis & positioning</li>
                <li>• Competitive strategy</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Organizational Development</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Team structure optimization</li>
                <li>• Culture transformation</li>
                <li>• Leadership development</li>
                <li>• Change management</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Process Innovation</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Workflow optimization</li>
                <li>• Technology integration</li>
                <li>• Quality improvement</li>
                <li>• Efficiency enhancement</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Decision Support</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Data-driven insights</li>
                <li>• Risk assessment</li>
                <li>• Scenario planning</li>
                <li>• Investment analysis</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Growth Strategy</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Market expansion</li>
                <li>• Product development</li>
                <li>• Partnership strategies</li>
                <li>• Scaling operations</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Crisis Management</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Rapid response planning</li>
                <li>• Stakeholder communication</li>
                <li>• Recovery strategies</li>
                <li>• Resilience building</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Client Success Story</h2>
          <div className="bg-white/10 rounded-lg p-6 mb-6">
            <div className="text-4xl text-green-200 mb-4">&quot;</div>
            <p className="text-lg text-green-100 italic mb-4">
              In our first 6 months with CognitiveInsight.ai&apos;s monthly retainer, we increased our operational efficiency by 40% 
              and successfully navigated a major market shift that could have devastated our business. Their ongoing support 
              has been invaluable to our growth.
            </p>
            <div className="flex items-center">
              <div className="bg-green-300 w-12 h-12 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold text-white">Marcus Rodriguez</p>
                <p className="text-green-200">COO, DataFlow Systems</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-200">40%</div>
              <div className="text-green-100">Efficiency Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-200">6</div>
              <div className="text-green-100">Months to Results</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-200">$2.5M</div>
              <div className="text-green-100">Additional Revenue</div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="space-y-8">
            <div className="flex">
              <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-bold">1</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Onboarding</h3>
                <p className="text-gray-600">Comprehensive assessment of your current state, goals, and challenges to create a customized engagement plan.</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-bold">2</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Weekly Strategic Sessions</h3>
                <p className="text-gray-600">Regular touchpoints to address immediate needs, review progress, and plan next steps.</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-bold">3</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Support</h3>
                <p className="text-gray-600">Email support and quick consultations between sessions for urgent strategic questions.</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-bold">4</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Monthly Reviews</h3>
                <p className="text-gray-600">Comprehensive progress assessment and strategic recalibration based on results and market changes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Details */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Investment Details</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What&apos;s Included</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">4 Strategic Sessions (60 min each)</span>
                  <span className="font-semibold">$1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Unlimited Email Support</span>
                  <span className="font-semibold">$200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Strategy Report</span>
                  <span className="font-semibold">$97</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-bold">
                  <span>Total Value</span>
                  <span>$1,497</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Commitment Options</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Monthly</span>
                    <span className="font-bold text-green-600">$1,497/month</span>
                  </div>
                  <p className="text-sm text-gray-600">Cancel anytime with 30 days notice</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg border-2 border-green-300">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Quarterly (Save 10%)</span>
                    <span className="font-bold text-green-600">$4,041/quarter</span>
                  </div>
                  <p className="text-sm text-gray-600">$13,473 per year • Best value</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Annual (Save 15%)</span>
                    <span className="font-bold text-green-600">$15,267/year</span>
                  </div>
                  <p className="text-sm text-gray-600">Maximum savings and priority support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I pause or cancel my retainer?</h3>
              <p className="text-gray-600">Yes, you can pause for up to 2 months per year or cancel with 30 days written notice.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I don&apos;t use all my sessions?</h3>
              <p className="text-gray-600">Unused sessions can be banked for up to 3 months or converted to additional support hours.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you work with my existing team?</h3>
              <p className="text-gray-600">Absolutely. I integrate seamlessly with your team and can participate in your regular strategic meetings.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you handle confidential information?</h3>
              <p className="text-gray-600">All information is protected by our zero-knowledge encryption system and standard NDAs.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/auth/signup?service=monthly_retainer" 
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
          >
            Start Your Strategic Partnership
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <p className="text-gray-600 mt-4">First month satisfaction guarantee • Cancel anytime</p>
          <div className="mt-6">
            <Link href="/contact" className="text-green-600 hover:text-green-800 transition-colors">
              Schedule a consultation call first →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
