import Link from "next/link";
import { Shield, Eye, Users, Lock, FileText, AlertTriangle } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function ResponsibleAI() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Commitment to Responsible AI
          </h1>
          <div className="text-sm text-gray-500 mb-4">
            <p><strong>Last Updated:</strong> July 16, 2025</p>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At CognitiveInsight.ai, we build strategic consulting solutions that empower leaders to navigate complexity with clarity—while upholding the highest standards of privacy, ethics, and transparency.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-12">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                CognitiveInsight.ai is a strategic consulting platform that provides business advisory services and decision-making support. We are not licensed business consultants, financial advisors, or legal counsel. Our AI-augmented consulting services are for strategic guidance, analytical insights, and decision-making frameworks only.
              </p>
              <p className="text-gray-700 mb-4">
                For matters requiring licensed professional services (legal, financial, medical, or other regulated fields), please consult appropriate licensed professionals. Our strategic guidance should complement, not replace, professional expertise in specialized domains.
              </p>
              <p className="text-gray-700">
                If your organization is facing a critical business emergency, please consult with your legal counsel, financial advisors, or appropriate crisis management professionals.
              </p>
            </div>
          </div>
        </div>

        {/* AI Use Transparency */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Eye className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">AI Use Transparency</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>
              All AI interactions within our platform are clearly labeled and disclosed. Whenever you engage with AI-enhanced analysis, you&apos;ll see clear indicators (such as icons, labels, or notices) so you always know when AI is being used to augment your strategic insights.
            </p>
            <p>
              Our AI augmentation includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Pattern recognition in complex business data</li>
              <li>Multi-perspective analysis generation</li>
              <li>Strategic framework recommendations</li>
              <li>Insight synthesis and clarity mapping</li>
              <li>Scenario planning and risk assessment</li>
            </ul>
            <p>
              We believe in empowering leaders with full knowledge about the technology that enhances their decision-making process.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Examples of AI Use vs. Human Expertise:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-green-800 mb-2">✓ AI Helps With:</p>
                  <ul className="text-green-700 space-y-1">
                    <li>• Identifying patterns in market data</li>
                    <li>• Generating multiple scenario options</li>
                    <li>• Structuring complex information</li>
                    <li>• Research synthesis and summarization</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-800 mb-2">✗ Humans Handle:</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Strategic judgment and final decisions</li>
                    <li>• Understanding organizational context</li>
                    <li>• Ethical considerations and trade-offs</li>
                    <li>• Implementation planning and change management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Privacy */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Lock className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Data Privacy & Security</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">No strategic data is ever sold or shared for marketing purposes</p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Zero-knowledge encryption protects your sensitive business information—only you can access it</p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">We comply with major privacy regulations (GDPR, CCPA, SOX), giving you complete control over your data</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">AES-256 encryption with PBKDF2 key derivation (310,000 iterations)</p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Client-side encryption ensures server-side data never contains unencrypted business intelligence</p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">NDAs and confidentiality agreements standard for all engagements</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Provider Selection */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Global Ethical Standards & AI Provider Selection</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>
              At CognitiveInsight.ai, we do not build or train our own foundational AI models. We carefully select trusted third-party AI providers (such as OpenAI, Google Gemini, Anthropic Claude, or others) who meet our strict privacy and ethical criteria for business consulting applications.
            </p>
            <p className="font-semibold text-gray-900">Our AI provider selection criteria include partners that:</p>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Do not use customer business data for training their models by default</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Employ enterprise-grade data security and privacy-preserving practices</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Maintain transparency about their AI and data policies</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Align with global ethical standards for AI in business applications</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Support enterprise compliance requirements (SOC 2, ISO 27001)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Provide clear audit trails and data governance controls</span>
                </li>
              </ul>
            </div>
            <p className="mt-6">
              We provide a secure environment for leaders to engage with these AI tools for strategic decision-making. What you analyze, explore, or strategize is encrypted on your device—we cannot read or access your business intelligence. Data sent to AI providers is only for processing your specific analytical requests and is not stored by us in its unencrypted form.
            </p>
            <p>
              We are committed to creating a secure space where business leaders can leverage AI for strategic planning, competitive analysis, market insights, and organizational development. While we don&apos;t directly control how foundational AI models are built, we align ourselves with providers that meet our strict ethical and privacy expectations and advocate for better standards industry-wide.
            </p>
          </div>
        </div>

        {/* AI Provider Disclosure Table */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <FileText className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">AI Provider Disclosure</h2>
          </div>
          <p className="text-gray-700 mb-6">
            We may use various third-party AI engines based on consulting needs and to enhance strategic analysis quality. Each provider has publicly stated data use and retention policies, which we respect. These choices are made strategically to increase accessibility and responsible adoption of AI technologies for business consulting. Policies are current as of July 2025.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Provider</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Default Data Usage for Training?</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Opt-In Required?</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Data Retention</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Policy Links</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">OpenAI</td>
                  <td className="border border-gray-300 px-4 py-3">No</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Up to 30 days</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <div className="space-y-1">
                      <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm block">OpenAI Privacy</a>
                      <a href="https://openai.com/policies/usage-policies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm block">Usage Policies</a>
                    </div>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Google Gemini</td>
                  <td className="border border-gray-300 px-4 py-3">No (for paid users)</td>
                  <td className="border border-gray-300 px-4 py-3">Yes</td>
                  <td className="border border-gray-300 px-4 py-3">Not specified</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <div className="space-y-1">
                      <a href="https://ai.google.dev/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm block">Gemini Terms</a>
                      <a href="https://ai.google.dev/responsible" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm block">Usage Policies</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Anthropic Claude</td>
                  <td className="border border-gray-300 px-4 py-3">No</td>
                  <td className="border border-gray-300 px-4 py-3">Not applicable</td>
                  <td className="border border-gray-300 px-4 py-3">Until user deletion</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <div className="space-y-1">
                      <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm block">Anthropic Privacy</a>
                      <a href="https://docs.anthropic.com/claude/docs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm block">Developer Docs</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            <strong>Note:</strong> See each provider&apos;s website for the latest details. CognitiveInsight.ai is not responsible for external content.
          </p>
        </div>

        {/* Brand Commitments */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Commitments</h2>
          <p className="text-blue-100 text-center mb-8">
            We hold ourselves accountable to these commitments in all our strategic consulting endeavors:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-200 rounded-full mr-3"></div>
                <span className="text-blue-100">No surveillance or behavioral profiling of client activities</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-200 rounded-full mr-3"></div>
                <span className="text-blue-100">No AI-generated insights used without explicit client consent</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-200 rounded-full mr-3"></div>
                <span className="text-blue-100">Annual transparency reports published</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-200 rounded-full mr-3"></div>
                <span className="text-blue-100">Complete data opt-out and deletion available anytime</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-200 rounded-full mr-3"></div>
                <span className="text-blue-100">Regular third-party security audits and compliance reviews</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-200 rounded-full mr-3"></div>
                <span className="text-blue-100">Clear disclosure of all AI augmentation in strategic processes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions About Our AI Ethics?</h2>
          <p className="text-gray-600 mb-8">
            If you have any questions or concerns about our AI ethics and practices, please don&apos;t hesitate to reach out. We value open dialogue and feedback from our clients and the broader business community.
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-lg font-semibold text-gray-900">Email:</p>
              <a href="mailto:ethics@cognitiveinsight.ai" className="text-blue-600 hover:text-blue-800 text-lg">ethics@cognitiveinsight.ai</a>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">General Inquiries:</p>
              <a href="mailto:hello@cognitiveinsight.ai" className="text-blue-600 hover:text-blue-800 text-lg">hello@cognitiveinsight.ai</a>
            </div>
          </div>
          <div className="mt-8">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
