import Link from "next/link";
import { Brain, Clock, Zap, Users, BarChart, Shield, Bell, ArrowRight } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
      {/* Navigation */}
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="h-10 w-10 text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            What&apos;s Coming Next
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re constantly innovating to bring you more powerful tools for strategic decision-making. 
            Here&apos;s what we&apos;re building for you.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Development Roadmap</h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-purple-200"></div>
            
            {/* Q3 2025 */}
            <div className="relative flex items-center mb-12">
              <div className="flex-1 pr-8 text-right">
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Q3 2025</h3>
                  <h4 className="text-lg font-semibold text-purple-600 mb-3">AI Dashboard & Analytics</h4>
                  <p className="text-gray-600">Interactive dashboards with real-time insights, trend analysis, and predictive modeling for strategic planning.</p>
                </div>
              </div>
              <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              <div className="flex-1 pl-8"></div>
            </div>

            {/* Q4 2025 */}
            <div className="relative flex items-center mb-12">
              <div className="flex-1 pr-8"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              <div className="flex-1 pl-8">
                <div className="bg-white p-6 rounded-lg shadow-lg border-r-4 border-blue-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Q4 2025</h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">Collaborative Workspaces</h4>
                  <p className="text-gray-600">Team collaboration tools for shared strategic planning, with role-based access and real-time co-editing capabilities.</p>
                </div>
              </div>
            </div>

            {/* Q1 2026 */}
            <div className="relative flex items-center mb-12">
              <div className="flex-1 pr-8 text-right">
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Q1 2026</h3>
                  <h4 className="text-lg font-semibold text-green-600 mb-3">Mobile App & Offline Mode</h4>
                  <p className="text-gray-600">Native mobile applications with offline capability, voice-to-text insights, and push notifications for urgent strategic updates.</p>
                </div>
              </div>
              <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              <div className="flex-1 pl-8"></div>
            </div>

            {/* Q2 2026 */}
            <div className="relative flex items-center">
              <div className="flex-1 pr-8"></div>
              <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              <div className="flex-1 pl-8">
                <div className="bg-white p-6 rounded-lg shadow-lg border-r-4 border-orange-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Q2 2026</h3>
                  <h4 className="text-lg font-semibold text-orange-600 mb-3">Enterprise Integrations</h4>
                  <p className="text-gray-600">Direct integrations with CRM, ERP, and BI tools. Custom API access and enterprise-grade compliance features.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Exciting Features in Development</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Strategic Assistant */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Strategic Assistant</h3>
              <p className="text-gray-600 mb-4">
                24/7 AI companion that learns your business context and provides proactive strategic recommendations.
              </p>
              <div className="text-sm text-purple-600 font-semibold">Coming Q3 2025</div>
            </div>

            {/* Team Collaboration Hub */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team Collaboration Hub</h3>
              <p className="text-gray-600 mb-4">
                Shared workspaces where teams can collaborate on strategic initiatives with version control and commenting.
              </p>
              <div className="text-sm text-blue-600 font-semibold">Coming Q4 2025</div>
            </div>

            {/* Advanced Analytics */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BarChart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Machine learning models that predict market trends and business outcomes based on your strategic decisions.
              </p>
              <div className="text-sm text-green-600 font-semibold">Coming Q1 2026</div>
            </div>

            {/* Enhanced Security */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Security Suite</h3>
              <p className="text-gray-600 mb-4">
                Multi-factor authentication, advanced audit logs, and enterprise-grade compliance reporting.
              </p>
              <div className="text-sm text-red-600 font-semibold">Coming Q2 2026</div>
            </div>

            {/* Smart Notifications */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Bell className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Notifications</h3>
              <p className="text-gray-600 mb-4">
                AI-powered alerts for market changes, competitive intelligence, and strategic opportunities.
              </p>
              <div className="text-sm text-indigo-600 font-semibold">Coming Q1 2026</div>
            </div>

            {/* Voice Interface */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Voice Strategy Sessions</h3>
              <p className="text-gray-600 mb-4">
                Conduct strategy sessions through voice commands with real-time transcription and insight generation.
              </p>
              <div className="text-sm text-yellow-600 font-semibold">Coming Q2 2026</div>
            </div>
          </div>
        </div>

        {/* Founder's Voice */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We&apos;re Building This</h2>
            <div className="text-lg text-gray-700 space-y-4 text-left">
              <p>
                &quot;I&apos;ve watched too many brilliant leaders struggle with the same problem: drowning in information while 
                starving for insight. Traditional consulting takes too long. AI tools give generic answers. 
                And most platforms treat your strategic data like a commodity.&quot;
              </p>
              <p>
                &quot;We&apos;re building these tools because every leader deserves access to the kind of strategic thinking 
                that transforms confusion into confidence—without compromising the privacy of their most sensitive decisions.&quot;
              </p>
              <p>
                &quot;Each feature on this roadmap solves a real problem I&apos;ve seen in the field. The mobile app comes from 
                executives who need insights during board meetings. The collaborative workspace addresses teams who struggle 
                to align on strategy. The enterprise integrations serve organizations tired of data silos.&quot;
              </p>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              — Founder, CognitiveInsight.ai
            </div>
          </div>
        </div>

        {/* Beta Program */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 md:p-12 text-white mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Beta Program</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get early access to new features and help shape the future of AI-augmented strategic consulting. 
              Beta users receive exclusive benefits and direct input into our development process.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Early Access</h3>
                <p className="text-blue-100 text-sm">Try new features weeks before general release</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Direct Feedback</h3>
                <p className="text-blue-100 text-sm">Shape features through direct developer communication</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Special Pricing</h3>
                <p className="text-blue-100 text-sm">Lock in beta pricing for new premium features</p>
              </div>
            </div>
            <Link 
              href="/auth/signup?beta=true" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Join Beta Program
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Request a Feature */}
        <div className="bg-white rounded-xl p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have an Idea?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I love hearing from users! If you have ideas for features that would help you make better strategic decisions, 
            I want to hear about them. Many of the best features come from user suggestions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact?subject=Feature Request" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Submit Feature Request
            </Link>
            <Link 
              href="/services" 
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore Current Services
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
