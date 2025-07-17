import Link from "next/link";
import { Brain, Shield, Target, Users, Zap, Award, Heart } from "lucide-react";
import Footer from "../layout/Footer";
import Navigation from "../layout/Navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About
            <span className="text-blue-600 block">CognitiveInsight.ai</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe that in a world of overwhelming complexity, clarity is the ultimate competitive advantage. 
            Our mission is to help leaders and organizations navigate uncertainty with confidence.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              To transform complexity into clarity through AI-augmented consulting that respects privacy, 
              enhances human judgment, and delivers actionable insights that drive confident decision-making.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                CognitiveInsight.ai was born from a simple observation: in our data-rich, hyper-connected world, 
                leaders often find themselves drowning in information but starving for insight.
              </p>
              <p>
                Traditional consulting, while valuable, often falls short in our rapidly changing environment. 
                Meanwhile, AI tools, despite their power, lack the nuanced understanding that complex business 
                challenges require.
              </p>
              <p>
                We saw an opportunity to bridge this gap—combining the analytical power of artificial intelligence 
                with deep human expertise, all while maintaining the highest standards of privacy and security.
              </p>
              <p>
                Today, we serve leaders across industries who need more than just data—they need clarity, 
                confidence, and actionable pathways forward.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">What Makes Us Different</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-blue-200 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Privacy-First Architecture</h4>
                  <p className="text-blue-100 text-sm">Zero-knowledge encryption ensures your data never leaves your control.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Zap className="h-6 w-6 text-blue-200 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">AI-Human Synthesis</h4>
                  <p className="text-blue-100 text-sm">We augment human insight with AI capabilities, not replace judgment with algorithms.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Target className="h-6 w-6 text-blue-200 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Action-Oriented Results</h4>
                  <p className="text-blue-100 text-sm">Every insight comes with clear, practical next steps you can implement immediately.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy</h3>
              <p className="text-gray-600">Your sensitive information is protected with military-grade encryption and never stored unencrypted.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">We provide honest, unbiased insights even when they challenge conventional thinking or popular trends.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">We hold ourselves to the highest standards in both our analytical rigor and our service delivery.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">We work alongside you as partners in your success, not as distant consultants with predetermined solutions.</p>
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deep Understanding</h3>
              <p className="text-gray-600">We invest time in truly understanding your context, challenges, and aspirations before proposing solutions.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Perspective Analysis</h3>
              <p className="text-gray-600">We examine challenges from multiple angles using both human intuition and AI-powered pattern recognition.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Actionable Synthesis</h3>
              <p className="text-gray-600">We distill complex analysis into clear insights and practical recommendations you can act on immediately.</p>
            </div>
          </div>
        </div>

        {/* Technology Philosophy */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
            <Brain className="h-12 w-12 text-indigo-200 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Technology Philosophy</h2>
            <p className="text-indigo-100 mb-4">
              We believe AI should augment human intelligence, not replace it. Our technology stack is designed to:
            </p>
            <ul className="space-y-2 text-indigo-100">
              <li>• Enhance pattern recognition and data analysis</li>
              <li>• Accelerate research and insight generation</li>
              <li>• Maintain complete data privacy and security</li>
              <li>• Support human judgment, not supplant it</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Security & Privacy</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Zero-Knowledge Architecture:</strong> Your sensitive data is encrypted on your device before 
                it ever reaches our servers. We literally cannot see your confidential information.
              </p>
              <p>
                <strong>Military-Grade Encryption:</strong> We use AES-256 encryption with PBKDF2 key derivation 
                and 310,000 iterations to protect your data.
              </p>
              <p>
                <strong>No Data Mining:</strong> We don&apos;t sell your data, train AI models on your information, 
                or use your insights for any purpose other than serving you.
              </p>
              <p>
                <strong>Compliance Ready:</strong> Our architecture supports GDPR, HIPAA, and other regulatory 
                requirements out of the box.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Story */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Cognitive Edge Profile - Self Discovery Summary</h2>
          <div className="max-w-6xl mx-auto">
            
            {/* Overview */}
            <div className="mb-10">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Overview of Cognitive Discovery</h3>
                <p className="text-gray-700 leading-relaxed">
                  Through a structured process of conversation and introspection - modeled by the Cognitive Edge Protocol - 
                  James Greenwood uncovered a unique cognitive profile: a rare combination of systems thinking, emotional 
                  intelligence, and long-range perspective. The resulting insights provided clarity, purpose, and a foundation 
                  for actionable strategies.
                </p>
              </div>
            </div>

            {/* Key Cognitive Strengths */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">2. Key Cognitive Strengths</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-lg text-white">
                  <h4 className="font-bold mb-3">🎯 Legacy Framing</h4>
                  <p className="text-blue-100 text-sm">
                    You naturally think in terms of long-term impact. The phrase &apos;I have 10,950 days left&apos; 
                    became a cognitive anchor.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-lg text-white">
                  <h4 className="font-bold mb-3">🔍 Pattern Recognition</h4>
                  <p className="text-purple-100 text-sm">
                    You break problems into structured components and identify solutions in systems-level patterns.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-green-600 to-teal-600 p-6 rounded-lg text-white">
                  <h4 className="font-bold mb-3">🧘 Reflective Depth</h4>
                  <p className="text-green-100 text-sm">
                    You possess a powerful ability to step back and ask foundational questions, even in 
                    emotional low points.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-600 to-red-600 p-6 rounded-lg text-white">
                  <h4 className="font-bold mb-3">🗺️ Clarity Architect</h4>
                  <p className="text-orange-100 text-sm">
                    You turn abstract emotional or strategic confusion into clear maps, lists, and paths forward.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">High-Agency Thinking</h4>
                    <p className="text-gray-700 text-sm">
                      You regain personal momentum not by eliminating emotion but by reorganizing how problems are viewed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What You Learned */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">3. What You Learned About Yourself</h3>
              <div className="space-y-4">
                <div className="flex items-start bg-yellow-50 p-4 rounded-lg">
                  <span className="text-yellow-600 mr-3 mt-1">•</span>
                  <p className="text-gray-700">Your frustration often comes from misalignment - not inability.</p>
                </div>
                <div className="flex items-start bg-blue-50 p-4 rounded-lg">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <p className="text-gray-700">You process information best when it is externalized, visualized, and sequenced toward a purpose.</p>
                </div>
                <div className="flex items-start bg-green-50 p-4 rounded-lg">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <p className="text-gray-700">You&apos;re at your best when guiding others to see their own patterns - using conversation, mapping, and legacy-based reflection.</p>
                </div>
                <div className="flex items-start bg-purple-50 p-4 rounded-lg">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  <p className="text-gray-700">Your emotional lows are often signal points for strategic realignment, not signs of failure.</p>
                </div>
              </div>
            </div>

            {/* Application Paths */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">4. Application Paths</h3>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  The clarity gained from this process can be directed into several professional directions:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <h4 className="font-semibold text-gray-900">Strategic Advisory Roles</h4>
                    <p className="text-sm text-gray-600">In transformation or innovation teams</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <h4 className="font-semibold text-gray-900">Executive & Career Coaching</h4>
                    <p className="text-sm text-gray-600">Using the Cognitive Edge Protocol</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900">AI Ethics & Systems Architecture</h4>
                    <p className="text-sm text-gray-600">Consulting and guidance</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                    <h4 className="font-semibold text-gray-900">Teaching & Speaking</h4>
                    <p className="text-sm text-gray-600">Systems-based clarity frameworks</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="bg-gradient-to-r from-gray-900 to-blue-900 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">5. Closing Statement</h3>
              <p className="text-gray-200 leading-relaxed">
                This self-discovery is not just reflective - it is directive. You now have language, structure, and insight 
                to turn how your mind works into a career or service that brings clarity to others. Your greatest value lies 
                not in doing the most, but in helping others see the most.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Clarity?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join leaders who have transformed complexity into competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Services
            </Link>
            <Link 
              href="/auth/signup" 
              className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
