import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "CognitiveInsight.ai - Navigate Complexity with Clarity",
  description: "A secure, AI-augmented consulting platform that helps you navigate complexity, develop insight, and act with clarity.",
  keywords: "consulting, strategic advisory, clarity sessions, business insight, complexity navigation",
  authors: [{ name: "CognitiveInsight.ai" }],
  robots: "index, follow",
  openGraph: {
    title: "CognitiveInsight.ai - Navigate Complexity with Clarity",
    description: "A secure, AI-augmented consulting platform that helps you navigate complexity, develop insight, and act with clarity.",
    type: "website",
    url: "https://cognitiveinsight.ai",
    siteName: "CognitiveInsight.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "CognitiveInsight.ai - Navigate Complexity with Clarity",
    description: "A secure, AI-augmented consulting platform that helps you navigate complexity, develop insight, and act with clarity.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/next.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className={`${inter.variable} h-full antialiased bg-gray-50 font-sans`}>
        <div id="root" className="h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
