import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { CalendarDays, Tag, Search } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const initialPosts = [
  {
    id: 'navigating-market-volatility',
    title: 'Navigating Market Volatility: Strategies for Resilience',
    date: '2025-05-15',
    category: 'Business Strategy',
    excerpt: 'In an era of unprecedented market fluctuations, building resilience is key. Discover actionable strategies to safeguard your business and thrive amidst uncertainty...',
    imageKey: 'Abstract image representing market volatility charts',
  },
  {
    id: 'future-of-work-ai',
    title: 'The Future of Work: How AI is Reshaping Industries',
    date: '2025-05-01',
    category: 'Digital Transformation',
    excerpt: 'Artificial Intelligence is no longer a futuristic concept but a present-day reality transforming how we work. Explore the impact of AI across various sectors...',
    imageKey: 'Futuristic AI interface with human interaction',
  },
  {
    id: 'lean-principles-for-smes',
    title: 'Unlocking Efficiency: Lean Principles for SMEs',
    date: '2025-04-20',
    category: 'Operational Excellence',
    excerpt: 'Small and Medium Enterprises (SMEs) can significantly benefit from adopting lean principles. Learn how to streamline operations, reduce waste, and boost productivity...',
    imageKey: 'Team collaborating on a lean manufacturing whiteboard',
  },
  {
    id: 'customer-centric-growth',
    title: 'Customer-Centricity: The Core of Sustainable Growth',
    date: '2025-04-05',
    category: 'Business Strategy',
    excerpt: 'Placing the customer at the heart of your business is crucial for long-term success. This post delves into strategies for building a truly customer-centric organization...',
    imageKey: 'Diverse group of happy customers',
  },
];

const categories = ['All', 'Business Strategy', 'Operational Excellence', 'Digital Transformation', 'Leadership'];
const popularPosts = initialPosts.slice(0, 3);

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { toast } = useToast();

  const filteredPosts = initialPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      e.target.reset();
    }
  };

  return (
    <>
      <Seo
        title="Blog"
        description="Stay updated with the latest insights, trends, and expert advice from Larenway Consulting. Explore articles on business strategy, operations, and digital transformation."
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">Larenway Insights</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our latest articles, expert opinions, and industry analysis to stay ahead of the curve.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-12">
            <main className="lg:col-span-2 space-y-10">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <AnimatedSection key={post.id} delay={index * 0.1}>
                    <Card className="overflow-hidden rounded-2xl shadow-subtle hover:shadow-xl transition-shadow duration-300">
                      <Link to={`/blog/${post.id}`}>
                        <img 
                          className="w-full h-64 object-cover"
                          alt={`Blog post image for ${post.title}`}
                         src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                      </Link>
                      <CardHeader>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <CalendarDays className="h-4 w-4 mr-2 text-accent-teal" /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                          <span className="mx-2">|</span>
                          <Tag className="h-4 w-4 mr-1 text-accent-teal" /> {post.category}
                        </div>
                        <CardTitle className="text-2xl text-deep-navy hover:text-accent-teal transition-colors">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 mb-4">{post.excerpt}</CardDescription>
                        <Button asChild variant="link" className="text-accent-teal font-semibold px-0">
                          <Link to={`/blog/${post.id}`}>Read More &rarr;</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))
              ) : (
                <AnimatedSection>
                  <p className="text-center text-gray-600 text-xl py-10">No posts found matching your criteria.</p>
                </AnimatedSection>
              )}
            </main>

            <aside className="lg:col-span-1 space-y-10">
              <AnimatedSection>
                <Card className="rounded-2xl p-6 shadow-subtle">
                  <h3 className="text-xl font-semibold text-deep-navy mb-4">Search Posts</h3>
                  <div className="relative">
                    <Input 
                      type="text" 
                      placeholder="Search..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pr-10"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <Card className="rounded-2xl p-6 shadow-subtle">
                  <h3 className="text-xl font-semibold text-deep-navy mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map(category => (
                      <li key={category}>
                        <Button 
                          variant="ghost" 
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full justify-start rounded-lg ${selectedCategory === category ? 'bg-accent-teal/10 text-accent-teal font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                          {category}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card className="rounded-2xl p-6 shadow-subtle">
                  <h3 className="text-xl font-semibold text-deep-navy mb-4">Popular Posts</h3>
                  <ul className="space-y-3">
                    {popularPosts.map(post => (
                      <li key={post.id}>
                        <Link to={`/blog/${post.id}`} className="text-gray-700 hover:text-accent-teal transition-colors font-medium text-sm block">
                          {post.title}
                        </Link>
                        <p className="text-xs text-gray-500 mt-1">{new Date(post.date).toLocaleDateString()}</p>
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Card className="rounded-2xl p-6 shadow-subtle bg-deep-navy text-white">
                  <h3 className="text-xl font-semibold mb-3">Subscribe to Our Newsletter</h3>
                  <p className="text-sm text-gray-300 mb-4">Get the latest insights delivered to your inbox.</p>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                    <Input type="email" name="email" placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" required />
                    <Button type="submit" variant="secondary" className="w-full rounded-2xl">Subscribe</Button>
                  </form>
                </Card>
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;