import Link from "next/link";
import { Brain, Search, CheckCircle, Users, ArrowRight, BarChart, Lightbulb } from "lucide-react";

export default function ResearchProject() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-purple-100">
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
          <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="h-10 w-10 text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Research Project
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Deep-dive research initiatives that uncover insights to drive strategic decisions
          </p>
          <div className="text-3xl font-bold text-purple-600 mb-8">$4,997</div>
          <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full inline-block text-sm font-semibold">
            Comprehensive Analysis
          </div>
        </div>

        {/* Research Types */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Specializations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Research</h3>
              <p className="text-gray-600">Comprehensive market analysis, competitive intelligence, and opportunity identification</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Organizational Research</h3>
              <p className="text-gray-600">Culture assessment, workflow analysis, and organizational effectiveness studies</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation Research</h3>
              <p className="text-gray-600">Technology trends, innovation opportunities, and future scenario planning</p>
            </div>
          </div>
        </div>

        {/* What&apos;s Included */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Comprehensive Research Package</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Research Design & Planning</h3>
                <p className="text-gray-600">Custom methodology development tailored to your specific research questions</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Primary Data Collection</h3>
                <p className="text-gray-600">Surveys, interviews, focus groups, and observational studies</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Secondary Research Analysis</h3>
                <p className="text-gray-600">Comprehensive review of existing literature, reports, and data sources</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Data Analysis & Insights</h3>
                <p className="text-gray-600">Advanced statistical analysis and pattern recognition using AI tools</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Executive Summary Report</h3>
                <p className="text-gray-600">25-50 page comprehensive report with key findings and recommendations</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Interactive Dashboard</h3>
                <p className="text-gray-600">Visual data presentation and ongoing access to research findings</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Presentation to Stakeholders</h3>
                <p className="text-gray-600">90-minute presentation session with Q&A for your team</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">3-Month Follow-up Support</h3>
                <p className="text-gray-600">Ongoing consultation to help implement research recommendations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Process */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Research Process</h2>
          <div className="space-y-8">
            <div className="flex">
              <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-bold">1</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Scoping & Design</h3>
                <p className="text-gray-600 mb-2">Define research objectives, key questions, and success metrics through collaborative workshops.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Stakeholder interviews</li>
                  <li>• Research question refinement</li>
                  <li>• Methodology selection</li>
                  <li>• Timeline and milestone planning</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-bold">2</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Collection Phase</h3>
                <p className="text-gray-600 mb-2">Execute comprehensive data gathering using multiple research methods and sources.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Primary research execution</li>
                  <li>• Secondary source analysis</li>
                  <li>• Expert interviews</li>
                  <li>• Quality assurance protocols</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-bold">3</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analysis & Synthesis</h3>
                <p className="text-gray-600 mb-2">Apply advanced analytical techniques to identify patterns, trends, and insights.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Statistical analysis</li>
                  <li>• Pattern recognition</li>
                  <li>• Trend identification</li>
                  <li>• Insight generation</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-bold">4</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reporting & Recommendations</h3>
                <p className="text-gray-600 mb-2">Develop comprehensive findings and actionable recommendations for strategic implementation.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Executive summary creation</li>
                  <li>• Detailed findings documentation</li>
                  <li>• Strategic recommendations</li>
                  <li>• Implementation roadmap</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-bold">5</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Presentation & Implementation Support</h3>
                <p className="text-gray-600 mb-2">Present findings to stakeholders and provide ongoing support for implementation.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Stakeholder presentation</li>
                  <li>• Q&A and discussion</li>
                  <li>• Implementation planning</li>
                  <li>• Follow-up support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Projects */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Sample Research Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Market Entry Strategy for SaaS Platform</h3>
              <p className="text-purple-100 mb-4">
                Comprehensive analysis of European markets for a B2B software company, including competitive landscape, 
                regulatory requirements, and go-to-market recommendations.
              </p>
              <div className="text-sm text-purple-200">
                <strong>Duration:</strong> 8 weeks • <strong>Team Size:</strong> 3 researchers
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Organizational Culture Transformation</h3>
              <p className="text-purple-100 mb-4">
                In-depth study of company culture, employee engagement, and change readiness for a 500-person organization 
                undergoing digital transformation.
              </p>
              <div className="text-sm text-purple-200">
                <strong>Duration:</strong> 10 weeks • <strong>Participants:</strong> 150+ employees
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Customer Experience Innovation Study</h3>
              <p className="text-purple-100 mb-4">
                Multi-channel customer journey analysis with predictive modeling to identify optimization opportunities 
                and enhance customer satisfaction.
              </p>
              <div className="text-sm text-purple-200">
                <strong>Duration:</strong> 12 weeks • <strong>Data Points:</strong> 10,000+ interactions
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Technology Trend Analysis</h3>
              <p className="text-purple-100 mb-4">
                Forward-looking research on emerging technologies impact on the financial services industry, 
                including risk assessment and opportunity identification.
              </p>
              <div className="text-sm text-purple-200">
                <strong>Duration:</strong> 6 weeks • <strong>Expert Interviews:</strong> 25+ leaders
              </div>
            </div>
          </div>
        </div>

        {/* Timeline & Investment */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Project Timeline & Investment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Typical Timeline</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-gray-900">Project Planning</span>
                  <span className="text-purple-600 font-semibold">1-2 weeks</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-gray-900">Data Collection</span>
                  <span className="text-purple-600 font-semibold">3-6 weeks</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-gray-900">Analysis & Insights</span>
                  <span className="text-purple-600 font-semibold">2-3 weeks</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-gray-900">Reporting & Presentation</span>
                  <span className="text-purple-600 font-semibold">1-2 weeks</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-bold">
                  <span>Total Duration</span>
                  <span className="text-purple-600">7-13 weeks</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-gray-900">Research Design & Planning</span>
                  <span className="font-semibold">$997</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-gray-900">Data Collection & Analysis</span>
                  <span className="font-semibold">$2,500</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-gray-900">Report & Dashboard Creation</span>
                  <span className="font-semibold">$1,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-gray-900">Presentation & Follow-up</span>
                  <span className="font-semibold">$500</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-bold">
                  <span>Total Investment</span>
                  <span className="text-purple-600">$4,997</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Tools & Methods */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Tools & Methods</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantitative Methods</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Statistical analysis & modeling</li>
                <li>• Survey research & polling</li>
                <li>• Data mining & pattern recognition</li>
                <li>• Predictive analytics</li>
                <li>• A/B testing & experimentation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Qualitative Methods</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• In-depth interviews</li>
                <li>• Focus groups & workshops</li>
                <li>• Ethnographic studies</li>
                <li>• Case study analysis</li>
                <li>• Content analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AI-Enhanced Tools</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Natural language processing</li>
                <li>• Sentiment analysis</li>
                <li>• Machine learning insights</li>
                <li>• Automated trend detection</li>
                <li>• Predictive modeling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you ensure research quality and validity?</h3>
              <p className="text-gray-600">We follow rigorous academic and industry standards, use multiple validation methods, and employ peer review processes throughout the research.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can you work with our existing data and systems?</h3>
              <p className="text-gray-600">Yes, we can integrate with your current data sources and systems while maintaining security and confidentiality standards.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if our research questions change during the project?</h3>
              <p className="text-gray-600">We build flexibility into our methodology and can adapt to evolving requirements within reasonable scope changes.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide ongoing access to research data?</h3>
              <p className="text-gray-600">Yes, you receive full access to anonymized data, interactive dashboards, and ongoing updates for 12 months.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/auth/signup?service=research_project" 
            className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
          >
            Start Your Research Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <p className="text-gray-600 mt-4">Free initial consultation to discuss your research needs</p>
          <div className="mt-6">
            <Link href="/contact" className="text-purple-600 hover:text-purple-800 transition-colors">
              Schedule a research planning session →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
