import Link from "next/link";
import { ArrowRight, Shield, Brain, Target, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Brain className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">CognitiveInsight.ai</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Navigate Complexity with
            <span className="text-blue-600 block">Clarity</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A secure, AI-augmented consulting platform that helps you develop insight, 
            make confident decisions, and act with purpose in an uncertain world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/services" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
            <Target className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Clarity Sessions</h3>
            <p className="text-gray-600">
              90-minute focused sessions to navigate complexity and develop actionable insights 
              with visual clarity maps delivered.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Advisory</h3>
            <p className="text-gray-600">
              Ongoing strategic support with monthly insights, priority access, 
              and quarterly strategic reviews.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
            <Brain className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Insight Reports</h3>
            <p className="text-gray-600">
              Deep-dive research and analysis for complex strategic challenges 
              with implementation roadmaps.
            </p>
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-blue-100 mb-20">
          <div className="text-center mb-8">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Zero-Knowledge Security</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your sensitive data is encrypted client-side with AES-GCM 256-bit encryption. 
              We never have access to your unencrypted information.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Client-side AES-GCM encryption with PBKDF2 (310,000 iterations)</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Auto-timeout after 15 minutes of inactivity</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Recovery keys for secure passphrase recovery</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Privacy-first architecture with no server-side data access</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Versioned metadata with encrypted content blobs</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Transparent security practices with public whitepaper</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/privacy" 
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Read our Security Whitepaper →
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to gain clarity?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Start your journey toward confident decision-making today.
          </p>
          <Link 
            href="/auth/signup" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Start Your First Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="h-6 w-6 text-blue-400" />
                <span className="ml-2 text-lg font-bold">CognitiveInsight.ai</span>
              </div>
              <p className="text-gray-400 text-sm">
                Navigate complexity with clarity through secure, AI-augmented consulting.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/services#clarity-sessions" className="hover:text-white transition-colors">Clarity Sessions</Link></li>
                <li><Link href="/services#advisory" className="hover:text-white transition-colors">Strategic Advisory</Link></li>
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
                <li><a href="https://www.myimaginaryfriends.ai/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms, Privacy, and Ethics Policy</a></li>
                <li><a href="https://www.myimaginaryfriends.ai/responsible-ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Responsible AI</a></li>
                </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 CognitiveInsight.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
