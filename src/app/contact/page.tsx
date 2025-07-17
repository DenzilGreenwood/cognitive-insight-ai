import Link from "next/link";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform complexity into clarity? We&apos;re here to help you navigate your most challenging decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="clarity_session">Clarity Session ($297)</option>
                    <option value="monthly_retainer">Monthly Retainer ($1,497/month)</option>
                    <option value="research_project">Research Project ($4,997)</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your challenge or what you're hoping to achieve..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href="mailto:insight@cognitiveinsight.ai" className="text-gray-900 hover:text-blue-600 transition-colors">
                      insight@cognitiveinsight.ai
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a href="tel:+1-580-276-7649" className="text-gray-900 hover:text-blue-600 transition-colors">
                      +1 (580) 276-7649
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-gray-900">Remote & Global</p>
                    <p className="text-xs text-gray-500">We accommodate all time zones</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <Clock className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Response Time</h3>
              </div>
              <p className="text-gray-600 mb-3">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
              <p className="text-sm text-gray-500">
                For urgent matters, please mention it in your message.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  href="/auth/signup?service=clarity_session" 
                  className="block w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
                >
                  Book Clarity Session
                </Link>
                <Link 
                  href="/services" 
                  className="block w-full border border-blue-600 text-blue-600 px-4 py-3 rounded-lg text-center font-medium hover:bg-blue-50 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How quickly can we get started?</h3>
                <p className="text-gray-600 mb-4">
                  Clarity Sessions can typically be scheduled within 48-72 hours. Monthly retainers and research projects have a brief discovery phase before we begin.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you work with international clients?</h3>
                <p className="text-gray-600 mb-4">
                  Yes, we work with clients globally. Our sessions are conducted virtually, and we can accommodate different time zones.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">What industries do you serve?</h3>
                <p className="text-gray-600">
                  We work across all industries, with particular expertise in technology, healthcare, financial services, and professional services.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a minimum commitment?</h3>
                <p className="text-gray-600 mb-4">
                  Clarity Sessions are one-time engagements. Monthly retainers require 30 days notice to cancel. Research projects are fixed-scope engagements.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you ensure confidentiality?</h3>
                <p className="text-gray-600 mb-4">
                  We use zero-knowledge encryption for all data and communications. NDAs are standard for all engagements.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I&apos;m not satisfied?</h3>
                <p className="text-gray-600">
                  We offer a satisfaction guarantee on all our services. If you&apos;re not completely satisfied, we&apos;ll work to make it right.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Contact Methods */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Prefer a Different Approach?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:Founder@cognitiveinsight.ai?subject=New Inquiry" 
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors inline-flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Directly
            </a>
            <a 
              href="tel:+1-580-276-7649" 
              className="border border-gray-600 text-gray-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
