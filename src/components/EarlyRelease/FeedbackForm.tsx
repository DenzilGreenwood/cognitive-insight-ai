"use client";

import { useState } from "react";
import { Send, MessageSquare, Lightbulb, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";

interface FeedbackFormData {
  name: string;
  email: string;
  role: string;
  interest: string;
  feedback: string;
  priority: string;
}

export default function FeedbackForm() {
  const [formData, setFormData] = useState<FeedbackFormData>({
    name: '',
    email: '',
    role: '',
    interest: '',
    feedback: '',
    priority: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <section className="py-16">
        <Card className="max-w-2xl mx-auto border-green-200 bg-green-50">
          <CardContent className="text-center py-12">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Thank You for Your Feedback!
            </h2>
            <p className="text-green-700 mb-6">
              Your insights are incredibly valuable in shaping CognitiveInsight.ai. 
              I&apos;ll personally review your feedback and may reach out to discuss your ideas further.
            </p>
            <Button 
              onClick={() => setSubmitted(false)}
              className="bg-green-600 hover:bg-green-700"
            >
              Submit Another Response
            </Button>
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <MessageSquare className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Shape the Future of Strategic Consulting
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your expertise and perspective are crucial in building something truly exceptional. 
            Share your thoughts, challenges, and ideas below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Feedback Form */}
          <Card className="border-orange-100">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select your role</option>
                    <option value="ceo">CEO/Founder</option>
                    <option value="executive">C-Suite Executive</option>
                    <option value="director">Director/VP</option>
                    <option value="manager">Manager</option>
                    <option value="consultant">Consultant</option>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="investor">Investor</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What interests you most about CognitiveInsight.ai?
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select primary interest</option>
                    <option value="clarity-sessions">90-Minute Clarity Sessions</option>
                    <option value="ai-augmentation">AI-Augmented Analysis</option>
                    <option value="privacy-security">Zero-Knowledge Security</option>
                    <option value="monthly-retainer">Monthly Strategic Retainers</option>
                    <option value="research-projects">Deep Research Projects</option>
                    <option value="collaboration">Team Collaboration Features</option>
                    <option value="overall-concept">Overall Concept</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Feedback & Ideas *
                  </label>
                  <textarea
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="What challenges do you face in strategic decision-making? What features would be most valuable? What concerns do you have? Any other thoughts or suggestions?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What should be the highest priority?
                  </label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select priority</option>
                    <option value="speed">Speed of delivery</option>
                    <option value="accuracy">Accuracy of insights</option>
                    <option value="privacy">Privacy & security</option>
                    <option value="collaboration">Team collaboration</option>
                    <option value="integration">Integration capabilities</option>
                    <option value="cost">Cost effectiveness</option>
                    <option value="ease-of-use">Ease of use</option>
                  </select>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending Feedback...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Feedback
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Information Panel */}
          <div className="space-y-6">
            <Card className="border-blue-100 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-blue-900">
                    Why Your Feedback Matters
                  </h3>
                </div>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li>• Shapes the feature prioritization roadmap</li>
                  <li>• Influences user interface and experience design</li>
                  <li>• Helps identify the most pressing pain points</li>
                  <li>• Guides pricing and service structure decisions</li>
                  <li>• Ensures the platform meets real-world needs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-100 bg-purple-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <AlertCircle className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-purple-900">
                    What Happens Next?
                  </h3>
                </div>
                <ul className="space-y-2 text-purple-800 text-sm">
                  <li>• I personally review every piece of feedback</li>
                  <li>• Key insights are incorporated into development</li>
                  <li>• You may receive follow-up questions or updates</li>
                  <li>• Early contributors get priority access to beta</li>
                  <li>• Your ideas could become core features</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">
                  Current Development Status
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-green-800">Security Foundation</span>
                    <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">
                      Complete
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-green-800">Core UI/UX</span>
                    <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs">
                      In Progress
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-green-800">AI Integration</span>
                    <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs">
                      Planned
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-green-800">Beta Testing</span>
                    <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">
                      Q3 2025
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
