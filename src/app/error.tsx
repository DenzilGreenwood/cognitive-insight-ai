'use client';

import { useEffect } from 'react';
import Link from "next/link";
import { Brain, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <Brain className="h-12 w-12 text-blue-600 mr-3" />
          <span className="text-2xl font-bold text-gray-900">CognitiveInsight.ai</span>
        </div>

        {/* Error Content */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
          <div className="text-6xl font-bold text-red-500 mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
          <p className="text-gray-600 mb-6">
            An unexpected error was encountered. Don&apos;t worry - I have been notified and am working to resolve this issue.
          </p>
          
          {/* Error Details (only in development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="bg-gray-100 rounded-lg p-4 mb-4 text-left">
              <p className="text-sm font-mono text-gray-700 break-all">
                {error.message}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={reset}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center w-full"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            Try Again
          </button>
          
          <Link 
            href="/" 
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center w-full"
          >
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </Link>
        </div>

        {/* Help Links */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Need immediate assistance?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 transition-colors">
              Contact Support
            </Link>
            <Link href="/services" className="text-blue-600 hover:text-blue-800 transition-colors">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
