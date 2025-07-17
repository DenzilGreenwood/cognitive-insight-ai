import Link from "next/link";
import { Brain, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <Brain className="h-12 w-12 text-blue-600 mr-3" />
          <span className="text-2xl font-bold text-gray-900">CognitiveInsight.ai</span>
        </div>

        {/* 404 Graphic */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
            <p className="text-gray-600">
              The page you&apos;re looking for seems to have vanished into the complexity. 
              Let&apos;s help you find your way back to clarity.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link 
            href="/" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center w-full"
          >
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </Link>
          
          <Link 
            href="/services" 
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center w-full"
          >
            <Search className="mr-2 h-5 w-5" />
            Explore Services
          </Link>
        </div>

        {/* Help Links */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/about" className="text-blue-600 hover:text-blue-800 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 transition-colors">
              Contact
            </Link>
            <Link href="/auth/signin" className="text-blue-600 hover:text-blue-800 transition-colors">
              Sign In
            </Link>
            <Link href="/auth/signup" className="text-blue-600 hover:text-blue-800 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
