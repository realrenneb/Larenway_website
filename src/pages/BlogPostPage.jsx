import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Seo from '@/components/Seo';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, CalendarDays, Tag, UserCircle, Facebook, Twitter, Linkedin } from 'lucide-react';

const blogPostsData = {
  'navigating-market-volatility': {
    title: 'Navigating Market Volatility: Strategies for Resilience',
    date: '2025-05-15',
    category: 'Business Strategy',
    author: 'Dr. Eleanor Vance',
    imageKey: 'Abstract image representing market volatility charts with upward trend',
    content: [
      { type: 'paragraph', text: 'In an era of unprecedented market fluctuations, building business resilience is not just an option, but a necessity. Companies that can adapt and thrive amidst uncertainty are those that will lead in the future. This article explores actionable strategies to safeguard your business and turn volatility into an opportunity for growth.' },
      { type: 'heading', level: 2, text: 'Understanding Market Volatility' },
      { type: 'paragraph', text: 'Market volatility refers to the degree of variation in trading price series over time, typically measured by the standard deviation of logarithmic returns. It can be triggered by various factors including economic shifts, geopolitical events, technological disruptions, and even changes in consumer sentiment.' },
      { type: 'heading', level: 2, text: 'Key Strategies for Resilience' },
      { type: 'list', items: [
        'Diversification: Spreading investments and operations across different markets, products, or services to mitigate risk.',
        'Agile Operations: Building flexible and adaptable processes that can quickly respond to changing market conditions.',
        'Strong Financial Management: Maintaining healthy cash reserves, managing debt effectively, and having contingency plans.',
        'Scenario Planning: Regularly assessing potential risks and developing strategies to address them.',
        'Customer Focus: Deepening relationships with customers to understand their evolving needs and maintain loyalty.',
        'Innovation: Continuously investing in research and development to stay ahead of the curve and identify new opportunities.'
      ]},
      { type: 'paragraph', text: 'Implementing these strategies requires a proactive and forward-thinking approach. At Larenway Consulting, we help businesses develop tailored resilience plans that align with their specific industry and organizational context.' },
      { type: 'quote', text: 'The greatest danger in times of turbulence is not the turbulence itself, but to act with yesterday\'s logic.', author: 'Peter Drucker' },
      { type: 'paragraph', text: 'By embracing change and focusing on long-term value creation, businesses can not only survive volatile periods but also emerge stronger and more competitive. Contact us to learn how we can help you build a more resilient future.' },
    ],
  },
  // Add other blog posts here following the same structure
  'future-of-work-ai': {
    title: 'The Future of Work: How AI is Reshaping Industries',
    date: '2025-05-01',
    category: 'Digital Transformation',
    author: 'Aisha Khan',
    imageKey: 'Futuristic AI interface with human interaction and data streams',
    content: [
        { type: 'paragraph', text: 'Artificial Intelligence (AI) is no longer a futuristic concept but a present-day reality transforming how we work, interact, and conduct business. From automating mundane tasks to providing deep analytical insights, AI is reshaping industries at an unprecedented pace. This article explores the profound impact of AI and what businesses need to do to adapt and thrive.' },
        { type: 'heading', level: 2, text: 'AI\'s Impact Across Sectors' },
        { type: 'paragraph', text: 'AI is making significant inroads in various sectors: Healthcare (diagnostic tools, personalized medicine), Finance (fraud detection, algorithmic trading), Manufacturing (predictive maintenance, quality control), Retail (personalized recommendations, supply chain optimization), and many more. The common thread is AI\'s ability to process vast amounts of data, identify patterns, and make intelligent decisions or predictions.' },
        { type: 'heading', level: 2, text: 'The Evolving Workforce' },
        { type: 'list', items: [
            'Skill Augmentation: AI tools are augmenting human capabilities, allowing employees to focus on more strategic and creative tasks.',
            'New Roles: The rise of AI is creating new job roles such as AI ethicists, data scientists, and AI trainers.',
            'Upskilling and Reskilling: Continuous learning will be crucial for the workforce to adapt to AI-driven changes.',
            'Collaboration between Humans and AI: The future of work will likely involve seamless collaboration between humans and AI systems.'
        ]},
        { type: 'paragraph', text: 'Businesses must invest in training and development programs to equip their employees with the necessary skills to work alongside AI. Ethical considerations, data privacy, and algorithmic bias are also critical aspects that need careful management.' },
        { type: 'quote', text: 'AI is a tool. The choice about how it gets deployed is ours.', author: 'Oren Etzioni' },
        { type: 'paragraph', text: 'Embracing AI strategically can unlock significant competitive advantages. Larenway Consulting helps organizations develop and implement AI strategies that align with their business goals, ensuring responsible and effective adoption of this transformative technology.' },
    ],
  },
};


const BlogPostPage = () => {
  const { postId } = useParams();
  const post = blogPostsData[postId];

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;

  const renderContent = (item, index) => {
    switch (item.type) {
      case 'paragraph':
        return <p key={index} className="text-gray-700 leading-relaxed mb-6">{item.text}</p>;
      case 'heading':
        const Tag = `h${item.level}`;
        return <Tag key={index} className={`text-${4-item.level}xl font-semibold text-deep-navy mt-8 mb-4`}>{item.text}</Tag>;
      case 'list':
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-6 pl-4 text-gray-700">
            {item.items.map((li, i) => <li key={i}>{li}</li>)}
          </ul>
        );
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-accent-teal pl-6 py-4 my-8 bg-gray-50 rounded-r-lg">
            <p className="text-xl italic text-gray-800">"{item.text}"</p>
            {item.author && <footer className="mt-2 text-sm text-gray-600">- {item.author}</footer>}
          </blockquote>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Seo
        title={post.title}
        description={post.content.find(c => c.type === 'paragraph')?.text.substring(0, 160) || 'Larenway Consulting Blog Post'}
      >
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content.find(c => c.type === 'paragraph')?.text.substring(0, 160)} />
        {/* <meta property="og:image" content={`URL_TO_IMAGE_FOR_${post.imageKey}`} /> */}
      </Seo>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <Button asChild variant="outline" className="mb-8 rounded-2xl border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-deep-navy">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </Button>
            
            <div className="mb-6">
              <span className="text-accent-teal font-semibold uppercase text-sm">{post.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-navy mb-4 leading-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8">
              <div className="flex items-center mr-6 mb-2 sm:mb-0">
                <CalendarDays className="h-4 w-4 mr-2 text-accent-teal" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center mr-6 mb-2 sm:mb-0">
                <UserCircle className="h-4 w-4 mr-2 text-accent-teal" />
                <span>By {post.author}</span>
              </div>
            </div>

            <img 
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-10"
              alt={`Blog post image for ${post.title}`}
             src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="prose prose-lg max-w-none">
            {post.content.map(renderContent)}
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-deep-navy mb-3">Share this post:</h3>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="rounded-full border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white" asChild>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white" asChild>
                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white" asChild>
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="mt-12">
            <Card className="bg-gray-50 p-6 md:p-8 rounded-2xl">
              <CardContent className="text-center">
                <h2 className="text-2xl font-semibold text-deep-navy mb-3">Ready to Elevate Your Business?</h2>
                <p className="text-gray-600 mb-6">
                  Contact Larenway Consulting today for a personalized consultation and discover how our expertise can drive your success.
                </p>
                <Button asChild size="lg" className="rounded-2xl">
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;