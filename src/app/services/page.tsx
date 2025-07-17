"use client";

import Link from "next/link";
import { Users, FileText, CheckCircle, ArrowRight, Brain, Target, Shield } from "lucide-react";

export default function Services() {
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
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
              <Link href="/auth/signin" className="text-blue-600 hover:text-blue-800 transition-colors">Sign In</Link>
              <Link 
                href="/auth/signup" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Navigate Complexity with
            <span className="text-blue-600 block">Expert Guidance</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our AI-augmented consulting services help you cut through noise, develop clarity, 
            and make confident decisions in an uncertain world.
          </p>
        </div>

        {/* Core Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Clarity Session */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Clarity Session</h3>
                <p className="text-blue-600 font-semibold">$297</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              A focused 90-minute session to navigate complexity and develop insight into your most pressing challenges.
            </p>
            <div className="bg-green-50 p-3 rounded-lg mb-6">
              <p className="text-sm text-green-800 font-medium">
                Clients typically save 15-20 hours of internal deliberation and reach decisions 3x faster
              </p>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">90-minute focused session</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Visual clarity map delivered</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Action-oriented insights</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Follow-up summary document</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Link 
                href="/auth/signup?service=clarity_session" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Book Now
              </Link>
              <Link 
                href="/services/clarity-session" 
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Monthly Retainer */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-blue-200 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Monthly Insight Retainer</h3>
                <p className="text-blue-600 font-semibold">$1,497/month</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Ongoing strategic advisory with monthly insights and priority access to expert guidance.
            </p>
            <div className="bg-green-50 p-3 rounded-lg mb-6">
              <p className="text-sm text-green-800 font-medium">
                Organizations report 35% improvement in decision speed and 25% reduction in strategic planning time
              </p>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">2 Clarity Sessions per month</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Monthly insight report</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Priority email support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Access to research library</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Strategic planning support</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Link 
                href="/auth/signup?service=monthly_retainer" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Start Retainer
              </Link>
              <Link 
                href="/services/monthly-retainer" 
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Research Project */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Research Project</h3>
                <p className="text-blue-600 font-semibold">$4,997</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Deep-dive research and analysis for complex strategic challenges requiring comprehensive investigation.
            </p>
            <div className="bg-green-50 p-3 rounded-lg mb-6">
              <p className="text-sm text-green-800 font-medium">
                Clients save 200+ hours of internal research while gaining insights that drive 10-20% revenue growth
              </p>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">4-6 week project timeline</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Comprehensive research report</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Strategic recommendations</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Implementation roadmap</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Follow-up consultation</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Link 
                href="/contact?service=research_project" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Discuss Project
              </Link>
              <Link 
                href="/services/research-project" 
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Consultation</h3>
              <p className="text-gray-600">We understand your challenge and goals through a comprehensive intake process.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deep Analysis</h3>
              <p className="text-gray-600">Our AI-augmented process analyzes your situation from multiple perspectives.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Insight Development</h3>
              <p className="text-gray-600">We synthesize findings into clear, actionable insights and recommendations.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation Support</h3>
              <p className="text-gray-600">Ongoing guidance to help you successfully implement recommendations.</p>
            </div>
          </div>
        </div>

        {/* Value Propositions */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy-First</h3>
            <p className="text-gray-600">
              Zero-knowledge encryption ensures your sensitive data never reaches our servers in unencrypted form.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Augmented</h3>
            <p className="text-gray-600">
              Advanced AI tools enhance human expertise to deliver deeper insights and faster results.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Action-Oriented</h3>
            <p className="text-gray-600">
              Every insight comes with clear, practical steps you can take to move forward with confidence.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">What makes your approach different?</h4>
              <p className="text-gray-600 mb-4">
                We combine human expertise with AI-powered analysis to deliver insights faster and more comprehensively than traditional consulting. Our privacy-first approach ensures your data remains secure.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">How quickly can I get started?</h4>
              <p className="text-gray-600 mb-4">
                Clarity Sessions can typically be scheduled within 48-72 hours. Monthly retainers begin immediately upon signup, and research projects start within one week of agreement.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">What if I&apos;m not satisfied?</h4>
              <p className="text-gray-600 mb-4">
                We offer a satisfaction guarantee. If you&apos;re not completely satisfied with your Clarity Session, we&apos;ll work with you to make it right or provide a full refund.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Can you handle confidential information?</h4>
              <p className="text-gray-600 mb-4">
                Absolutely. Our zero-knowledge encryption architecture ensures that sensitive information is protected at the highest level. We also sign NDAs when required.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Gain Clarity?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of leaders who have transformed complexity into clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/auth/signup" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/contact" 
              className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">CognitiveInsight.ai</span>
              </div>
              <p className="text-gray-400 mb-4">
                Navigate complexity with clarity. AI-augmented consulting for confident decision-making.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/services#clarity" className="hover:text-white transition-colors">Clarity Sessions</Link></li>
                <li><Link href="/services#retainer" className="hover:text-white transition-colors">Monthly Retainer</Link></li>
                <li><Link href="/services#research" className="hover:text-white transition-colors">Research Projects</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://myimaginaryfriends.ai/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="https://myimaginaryfriends.ai/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><Link href="/responsible-ai" className="hover:text-white transition-colors">Responsible AI</Link></li>
                <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 CognitiveInsight.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
