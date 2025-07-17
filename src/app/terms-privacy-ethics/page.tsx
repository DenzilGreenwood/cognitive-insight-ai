import Link from "next/link";
import { Scale, AlertTriangle } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function TermsPrivacyEthics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Scale className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms, Privacy, and Ethics Policy
          </h1>
          <div className="text-lg text-gray-600 space-y-2">
            <p><strong>Effective Date:</strong> July 15, 2025</p>
            <p><strong>Last Updated:</strong> July 15, 2025</p>
            <p><strong>Version:</strong> 1.0.0</p>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            This document explains how CognitiveInsight.ai works, what you can expect from the platform, and how your strategic business information is handled with the highest standards of security and confidentiality.
          </p>
        </div>

        {/* Section 1: What is CognitiveInsight.ai */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">1</span>
            </div>
            Welcome! What is CognitiveInsight.ai?
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              CognitiveInsight.ai is your strategic consulting platform featuring AI-augmented advisory services, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Clarity Sessions:</strong> Focused 90-minute strategic advisory sessions to navigate complex business challenges</li>
              <li><strong>Monthly Retainer:</strong> Ongoing strategic partnership with regular insights and priority support</li>
              <li><strong>Research Projects:</strong> Deep-dive analysis and comprehensive strategic research initiatives</li>
            </ul>
            <p>
              By using the services, you confirm you are authorized to agree to these terms, either for yourself or on behalf of your organization. You also agree to the terms of any third-party AI services utilized, such as OpenAI&apos;s Terms, Google&apos;s Terms, and Anthropic&apos;s Terms of Service.
            </p>
          </div>
        </div>

        {/* Section 2: What CognitiveInsight.ai Services Do */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">2</span>
            </div>
            What CognitiveInsight.ai Services Do (and Don&apos;t Do)
          </h2>
          <div className="space-y-4 text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Clarity Sessions</strong> help you navigate complex strategic decisions with expert analysis and AI-augmented insights</li>
              <li><strong>Monthly Retainer</strong> provides ongoing strategic advisory with regular touchpoints and priority support</li>
              <li><strong>Research Projects</strong> deliver comprehensive analysis, market research, and strategic recommendations</li>
            </ul>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mt-6">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Disclaimer</h3>
                  <p className="text-gray-700">
                    The services are strategic consulting and advisory in nature. CognitiveInsight.ai is not a licensed financial advisor, legal counsel, medical professional, or certified business consultant in regulated fields. AI-augmented strategic guidance should complement, not replace, professional expertise in specialized domains requiring licensed practitioners.
                  </p>
                  <p className="text-gray-700 mt-2">
                    For matters requiring licensed professional services (legal, financial, medical, accounting, or other regulated fields), please consult appropriate licensed professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Data & Privacy */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">3</span>
            </div>
            Your Data & Privacy: We Put Business Confidentiality First
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>Your business confidentiality is our top priority. Here&apos;s how we protect your strategic information:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p><strong>Minimal Data Collection:</strong> Only essential data is collected such as contact information, billing details, and session preferences. All payments are securely processed by Stripe; your full payment details are never stored.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p><strong>Zero-Knowledge Encryption:</strong> All strategic documents, session notes, research data, and business intelligence are encrypted client-side using AES-256 encryption before storage.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p><strong>No Audio Storage:</strong> Session recordings are transcribed and immediately encrypted; original audio files are permanently deleted.</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p><strong>No Tracking or Selling:</strong> Your business data is not used for advertising, profiling, or sold to anyone under any circumstances.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p><strong>You Control Your Data:</strong> You can access, download, or delete your account and all associated strategic data at any time.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p><strong>Enterprise Security:</strong> We use trusted enterprise-grade services like Firebase and Stripe with SOC 2 and ISO 27001 compliance.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Encryption Passphrase & Secret Recovery Key</h3>
              <p className="text-gray-700 mb-3">
                When you set up your account, you&apos;ll create a secure passphrase. This passphrase encrypts all your sensitive business data—strategic documents, session notes, research findings, and competitive intelligence—before it&apos;s stored on our servers.
              </p>
              <p className="text-gray-700 mb-3">
                You&apos;ll need this passphrase every time you log in to access your encrypted strategic content.
              </p>
              <p className="text-gray-700 font-semibold">
                Crucial: After you create your passphrase, we&apos;ll provide you with a Secret Recovery Key. This is your only way to recover your encrypted business data if you ever forget your passphrase. We cannot decrypt your data for you. Please store your recovery key securely.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: User Rights */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">4</span>
            </div>
            Your Rights as a Client
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>You have complete control over your strategic data and our relationship. You can:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access, download, or delete your strategic data at any time</li>
              <li>Cancel or modify your service engagement whenever you wish</li>
              <li>Request copies of all insights, analyses, and recommendations we&apos;ve provided</li>
              <li>Opt out of any specific AI-augmented analysis tools</li>
              <li>Request data portability in standard business formats</li>
              <li>Contact us with any questions or complaints at: <a href="mailto:hello@cognitiveinsight.ai" className="text-blue-600 hover:text-blue-800">hello@cognitiveinsight.ai</a></li>
            </ul>
          </div>
        </div>

        {/* Section 5: Ethics Policy */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">5</span>
            </div>
            Our Ethics Policy: Designed for Strategic Excellence
          </h2>
          <div className="space-y-4 text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Client-first:</strong> Our strategic tools are built to empower your decision-making, not manipulate outcomes</li>
              <li><strong>End-to-end encryption:</strong> Your strategic insights, competitive intelligence, and business plans are encrypted before storage</li>
              <li><strong>Minimal data collection:</strong> We only collect what&apos;s necessary to provide exceptional strategic consulting services</li>
              <li><strong>No &quot;Dark Patterns&quot;:</strong> Manipulative design patterns are not used to pressure decisions, hide important information, or make cancellation difficult</li>
              <li><strong>Transparency:</strong> We&apos;ll always keep you informed about service updates, AI capabilities, and methodology changes</li>
              <li><strong>Professional Standards:</strong> We maintain the highest standards of business consulting ethics and confidentiality</li>
            </ul>
          </div>
        </div>

        {/* Section 6: AI Features */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">6</span>
            </div>
            AI-Augmented Strategic Features
          </h2>
          <div className="space-y-4 text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Strategic Analysis:</strong> AI helps identify patterns, trends, and insights in complex business scenarios</li>
              <li><strong>Encrypted Processing:</strong> All AI-analyzed content is encrypted immediately after processing</li>
              <li><strong>No Model Training:</strong> Your strategic content or business intelligence is not used to train AI models or for any purpose beyond providing your requested consulting services</li>
              <li><strong>Multi-Perspective Analysis:</strong> AI assists in examining challenges from multiple strategic viewpoints</li>
              <li><strong>Scenario Planning:</strong> AI-augmented modeling for strategic planning and risk assessment</li>
            </ul>
          </div>
        </div>

        {/* Section 7: Fair Use */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">7</span>
            </div>
            Fair Use & Professional Conduct
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>To maintain our professional standards and protect all clients, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the services for legitimate strategic consulting purposes</li>
              <li>Not misuse, reverse-engineer, or exploit the services or underlying AI models</li>
              <li>Not upload or discuss content that is illegal, defamatory, or violates third-party rights</li>
              <li>Respect the confidentiality of our methodology and proprietary frameworks</li>
              <li>Maintain professional standards in all interactions</li>
            </ul>
            <p>If you violate these terms, we may suspend or terminate your engagement and delete associated data.</p>
          </div>
        </div>

        {/* Section 8: Service Pricing */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">8</span>
            </div>
            Service Pricing & Billing
          </h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Clarity Session</h3>
              <p><strong>One-Time Engagement:</strong> $297 per 90-minute focused strategic session</p>
              <p>Includes: Strategic analysis, visual clarity map, actionable insights, and follow-up summary document</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Monthly Retainer</h3>
              <p><strong>Ongoing Partnership:</strong> $1,497 per month</p>
              <p>Includes: 4 strategic sessions, unlimited email support, monthly insights report, priority scheduling, and resource library access</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Research Project</h3>
              <p><strong>Comprehensive Analysis:</strong> $4,997 per project</p>
              <p>Includes: 6-12 week engagement, comprehensive research, strategic recommendations, implementation roadmap, and follow-up consultation</p>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-gray-900">
                Disclaimer: All pricing and service features are current as of July 15, 2025, and subject to review and change. Final pricing will be confirmed at time of engagement.
              </p>
            </div>
          </div>
        </div>

        {/* Section 9: Intellectual Property */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">9</span>
            </div>
            Intellectual Property: You Own Your Strategic Insights
          </h2>
          <div className="space-y-4 text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li>You retain ownership of all strategic insights, business intelligence, and recommendations provided to you</li>
              <li>We own our consulting methodologies, proprietary frameworks, platform code, branding, and design</li>
              <li>You may not resell, copy, or distribute our methodologies, frameworks, or platform elements without written permission</li>
              <li>Strategic recommendations and insights: You have full commercial rights to implement and benefit from our strategic guidance</li>
              <li>Custom frameworks developed specifically for your organization remain your intellectual property</li>
            </ul>
          </div>
        </div>

        {/* Section 10: Limitation of Liability */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">10</span>
            </div>
            Limitation of Liability
          </h2>
          <div className="space-y-4 text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li>We are not responsible for indirect or incidental damages, including but not limited to business losses, service outages, or data loss</li>
              <li>All strategic consulting services are provided &quot;as-is&quot; and &quot;as available&quot;</li>
              <li>While we strive for the highest quality analysis and insights, we cannot guarantee specific business outcomes or results</li>
              <li>Our liability is limited to the amount paid for the specific service engagement in question</li>
              <li>Strategic recommendations are advisory in nature; implementation decisions and results remain your responsibility</li>
            </ul>
          </div>
        </div>

        {/* Continue with remaining sections... */}
        {/* Section 11: Account Termination */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">11</span>
            </div>
            Account Termination
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>We may suspend or terminate service engagements if:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You violate these terms or professional conduct standards</li>
              <li>A paid service remains inactive for an extended period (we&apos;ll provide notice first)</li>
              <li>It&apos;s required by law or court order</li>
              <li>The engagement scope fundamentally changes beyond our service capabilities</li>
            </ul>
            <p>When an engagement is terminated, all related data will be securely deleted within 30 days, unless legally required to retain it or you request data export.</p>
          </div>
        </div>

        {/* Section 12: Encryption & Data Security */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">12</span>
            </div>
            Encryption & Data Security: Enterprise-Grade Protection
          </h2>
          <div className="space-y-4 text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Client-Side Encryption:</strong> All strategic content is encrypted on your device using AES-256 encryption with PBKDF2 key derivation (310,000 iterations) before being stored in our cloud database</li>
              <li><strong>User-Controlled Keys:</strong> Only you hold the key to your business data. Without your passphrase or recovery key, your strategic information cannot be recovered or accessed by anyone—including us</li>
              <li><strong>AI Processing Security:</strong> When using AI features powered by third-party providers, your input is securely transmitted for processing. Only encrypted versions are stored in our database</li>
              <li><strong>No Data for Model Training:</strong> Your strategic content is not used to train AI models or for any purpose other than providing your requested consulting services</li>
              <li><strong>SOC 2 & ISO 27001 Compliance:</strong> Our infrastructure partners maintain enterprise security certifications</li>
            </ul>
          </div>
        </div>

        {/* Section 13: Legal Details */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">13</span>
            </div>
            Legal Details
          </h2>
          <div className="space-y-4 text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li>These terms are governed by the laws of the State of Delaware, USA</li>
              <li>Any legal disputes will be handled through binding arbitration in Delaware</li>
              <li>If any part of these terms is found invalid, the rest will remain in effect</li>
              <li>These terms supersede all prior agreements and constitute the complete agreement between parties</li>
              <li>Modifications must be made in writing and signed by both parties</li>
            </ul>
          </div>
        </div>

        {/* Section 14: Policy Updates */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">14</span>
            </div>
            Policy Updates
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>This document serves as the comprehensive Terms of Service, Privacy Policy, and Ethics Policy for CognitiveInsight.ai and all associated strategic consulting services.</p>
            <p>These terms may be updated occasionally to reflect service improvements or legal requirements. If changes are significant, you&apos;ll be notified through email or the platform. By continuing to use the services, you accept the updated terms.</p>
            <p>For material changes affecting existing engagements, we&apos;ll provide 30 days notice and opportunity to discuss modifications.</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Questions or Concerns?</h2>
          <p className="text-blue-100 mb-8">
            We&apos;re here to address any questions about our terms, privacy practices, or ethical standards.
          </p>
          <div className="space-y-4 mb-8">
            <div>
              <p className="text-lg font-semibold">General Inquiries:</p>
              <a href="mailto:hello@cognitiveinsight.ai" className="text-blue-200 hover:text-white text-lg">hello@cognitiveinsight.ai</a>
            </div>
            <div>
              <p className="text-lg font-semibold">Privacy & Ethics:</p>
              <a href="mailto:ethics@cognitiveinsight.ai" className="text-blue-200 hover:text-white text-lg">ethics@cognitiveinsight.ai</a>
            </div>
            <div>
              <p className="text-lg font-semibold">Data Requests:</p>
              <a href="mailto:data@cognitiveinsight.ai" className="text-blue-200 hover:text-white text-lg">data@cognitiveinsight.ai</a>
            </div>
          </div>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Directly
          </Link>
          <p className="text-blue-200 text-sm mt-6">
            Thank you for being a strategic partner in my mission to navigate complexity with clarity.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
