import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Blog | CognitiveInsight.ai",
  description: "Insights, trends, and thought leadership on AI-augmented consulting, decision-making, and business transformation.",
};

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI-Augmented Decision Making",
    excerpt: "Explore how artificial intelligence is transforming the way leaders make strategic decisions, while maintaining human judgment at the center.",
    content: "In today's rapidly evolving business landscape, the ability to make informed decisions quickly has become a critical competitive advantage. Traditional decision-making processes, while thorough, often struggle to keep pace with the velocity of change in modern markets...",
    author: "CognitiveInsight.ai Team",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "AI Strategy",
    tags: ["AI", "Decision Making", "Strategy", "Leadership"]
  },
  {
    id: 2,
    title: "Privacy-First AI: Building Trust in Consulting",
    excerpt: "Learn how privacy-first AI approaches are revolutionizing consulting services while maintaining the highest standards of data protection.",
    content: "As organizations increasingly rely on AI-powered insights, the question of data privacy has become paramount. Traditional consulting approaches often require extensive data sharing, creating potential vulnerabilities...",
    author: "CognitiveInsight.ai Team",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "Privacy & Security",
    tags: ["Privacy", "Security", "AI Ethics", "Consulting"]
  },
  {
    id: 3,
    title: "Navigating Complexity: From Data to Actionable Insights",
    excerpt: "Discover how to transform overwhelming amounts of data into clear, actionable insights that drive confident business decisions.",
    content: "In our data-rich environment, the challenge isn't accessing information—it's making sense of it. Organizations today are drowning in data but starving for insight...",
    author: "CognitiveInsight.ai Team",
    date: "2025-01-05",
    readTime: "10 min read",
    category: "Data Analytics",
    tags: ["Data Analytics", "Insights", "Business Intelligence", "Decision Support"]
  },
  {
    id: 4,
    title: "The Human-AI Partnership in Modern Consulting",
    excerpt: "Explore how successful consulting combines artificial intelligence capabilities with human expertise to deliver superior outcomes.",
    content: "The most effective AI implementations don't replace human judgment—they amplify it. In consulting, this partnership between human expertise and artificial intelligence creates unprecedented value...",
    author: "CognitiveInsight.ai Team",
    date: "2024-12-28",
    readTime: "7 min read",
    category: "Human-AI Collaboration",
    tags: ["Human-AI Partnership", "Consulting", "Expertise", "Technology"]
  },
  {
    id: 5,
    title: "Building Resilient Organizations Through AI-Driven Clarity",
    excerpt: "Learn how AI-driven clarity helps organizations build resilience and adapt to changing market conditions with confidence.",
    content: "Organizational resilience isn't just about surviving challenges—it's about thriving in uncertainty. AI-driven clarity provides the foundation for building truly resilient organizations...",
    author: "CognitiveInsight.ai Team",
    date: "2024-12-20",
    readTime: "9 min read",
    category: "Organizational Resilience",
    tags: ["Resilience", "Change Management", "AI Strategy", "Adaptability"]
  },
  {
    id: 6,
    title: "The Ethics of AI in Strategic Consulting",
    excerpt: "Examining the ethical considerations and responsibilities when implementing AI solutions in strategic consulting engagements.",
    content: "As AI becomes increasingly integrated into strategic consulting, ethical considerations become paramount. The power of AI to influence decisions requires careful consideration of bias, transparency, and accountability...",
    author: "CognitiveInsight.ai Team",
    date: "2024-12-15",
    readTime: "11 min read",
    category: "AI Ethics",
    tags: ["Ethics", "AI Governance", "Responsible AI", "Consulting Standards"]
  }
];

const categories = [
  "All",
  "AI Strategy",
  "Privacy & Security",
  "Data Analytics",
  "Human-AI Collaboration",
  "Organizational Resilience",
  "AI Ethics"
];

export default function BlogPage() {
  return (
    <PageLayout>
      <div className="py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Insights & Thought Leadership
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the latest trends, insights, and best practices in AI-augmented consulting, 
            decision-making, and business transformation.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "primary" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 p-8 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Featured Post</h3>
                  <p className="text-blue-100">Latest insights from CognitiveInsight.ai</p>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
                  <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {blogPosts[0].author}</span>
                  <Button variant="primary" size="sm">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 overflow-hidden">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 overflow-hidden">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <p>{post.author}</p>
                    <p>{post.date}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Posts
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Updated with Our Latest Insights
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Get our latest articles, insights, and thought leadership delivered directly to your inbox. 
                No spam, just valuable content about AI-augmented consulting and decision-making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button variant="primary" size="lg">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Your privacy is respected. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
