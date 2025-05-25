import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Seo from '@/components/Seo';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, MessageSquare } from 'lucide-react';

const caseStudiesDetails = {
  'alpha-corp-turnaround': {
    title: 'AlphaCorp: Strategic Turnaround & Growth',
    industry: 'Manufacturing',
    imageKey: 'Factory floor with improved efficiency and workers',
    challenge: 'AlphaCorp, a mid-sized manufacturing firm, faced declining market share due to increased competition and outdated operational processes. Their production costs were high, and innovation had stagnated.',
    solutionOverview: 'Larenway Consulting conducted a thorough diagnostic of AlphaCorp\'s operations and market positioning. We developed a multi-pronged strategy focusing on:',
    solutions: [
      'Market Diversification: Identifying and targeting new, high-growth market segments.',
      'Lean Manufacturing Implementation: Streamlining production workflows, reducing waste, and improving quality control.',
      'Technology Upgrade: Advising on and overseeing the implementation of modern ERP and CRM systems.',
      'Supply Chain Optimization: Renegotiating supplier contracts and improving inventory management.',
    ],
    results: [
      'Achieved a 25% increase in overall revenue within 18 months.',
      'Reduced operational costs by 15% through efficiency gains.',
      'Successfully launched two new product lines in targeted segments.',
      'Improved employee morale and productivity significantly.',
    ],
    testimonial: {
      quote: "Larenway's insights and hands-on approach were instrumental in our turnaround. They didn't just give us a plan; they helped us execute it effectively.",
      author: 'John Doe, CEO of AlphaCorp',
    },
  },
   'beta-tech-digital-launch': {
    title: 'BetaTech: Successful Digital Product Launch',
    industry: 'Technology',
    imageKey: 'Team celebrating a successful SaaS product launch on multiple devices',
    challenge: 'BetaTech, an innovative startup, aimed to launch a new B2B SaaS product in a highly competitive market. They needed a robust go-to-market strategy and an agile development framework to iterate quickly based on user feedback.',
    solutionOverview: 'Our team worked with BetaTech from product conceptualization to post-launch scaling. Key interventions included:',
    solutions: [
      'Comprehensive Go-to-Market Strategy: Including target audience definition, pricing model, and sales channel strategy.',
      'Agile Development Coaching: Implementing Scrum methodologies for rapid product development and iteration.',
      'Digital Marketing & Lead Generation: Crafting and executing a multi-channel digital marketing campaign.',
      'Customer Success Framework: Designing onboarding processes and customer support systems.',
    ],
    results: [
      'Acquired over 10,000 registered users within the first 12 months.',
      'Achieved $1 million in Annual Recurring Revenue (ARR) in the first year.',
      'Secured a follow-on funding round based on strong initial traction.',
      'Established a strong brand presence in their niche market.',
    ],
    testimonial: {
      quote: "Larenway was more than a consultant; they were a true partner in our launch. Their expertise in SaaS strategy and agile methods was invaluable.",
      author: 'Jane Smith, Founder of BetaTech',
    },
  },
   'gamma-health-optimization': {
    title: 'GammaHealth: Operational Optimization',
    industry: 'Healthcare',
    imageKey: 'Modern hospital reception area with efficient patient flow',
    challenge: 'GammaHealth, a regional hospital network, struggled with inefficient patient workflows, long wait times, and high administrative overhead. This impacted both patient satisfaction and financial performance.',
    solutionOverview: 'Larenway Consulting undertook a comprehensive review of GammaHealth\'s clinical and administrative operations. Our solutions focused on:',
    solutions: [
      'Patient Journey Mapping & Redesign: Identifying and eliminating bottlenecks in patient care pathways.',
      'EHR System Optimization: Customizing and optimizing their Electronic Health Record system for better usability and data capture.',
      'Staff Training & Change Management: Equipping staff with new skills and fostering a culture of continuous improvement.',
      'Resource Allocation Analysis: Optimizing staffing levels and equipment utilization.',
    ],
    results: [
      'Improved patient satisfaction scores by 20% as measured by post-visit surveys.',
      'Reduced average patient wait times by 30%.',
      'Lowered administrative costs by 12% through process automation and efficiency.',
      'Enhanced staff productivity and reduced burnout.',
    ],
    testimonial: {
      quote: "The Larenway team brought a fresh perspective and deep healthcare expertise. Their work has made a tangible difference to our patients and our bottom line.",
      author: 'Dr. Robert Jones, Chief Medical Officer, GammaHealth',
    },
  }
};

const CaseStudyDetailPage = () => {
  const { caseStudyId } = useParams();
  const study = caseStudiesDetails[caseStudyId];

  if (!study) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Seo
        title={study.title}
        description={`Case study: How Larenway Consulting helped ${study.industry} client achieve success.`}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Button asChild variant="outline" className="mb-8 rounded-2xl border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-deep-navy">
              <Link to="/case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
              </Link>
            </Button>
            <p className="text-accent-teal font-semibold mb-2">{study.industry}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">{study.title}</h1>
            <img 
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-10"
              alt={`Illustrative image for ${study.title}`}
             src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.1}>
                <h2 className="text-2xl font-semibold text-deep-navy mb-3">The Challenge</h2>
                <p className="text-gray-700 leading-relaxed mb-8">{study.challenge}</p>

                <h2 className="text-2xl font-semibold text-deep-navy mb-3">Our Solution</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{study.solutionOverview}</p>
                <ul className="space-y-2 mb-8">
                  {study.solutions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-teal mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                <Card className="bg-gray-50 p-6 rounded-2xl shadow-subtle">
                  <CardContent>
                    <h3 className="text-xl font-semibold text-deep-navy mb-4">Key Results</h3>
                    <ul className="space-y-3 mb-6">
                      {study.results.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {study.testimonial && (
                      <>
                        <h3 className="text-xl font-semibold text-deep-navy mb-3 mt-6 pt-6 border-t border-gray-300">Client Testimonial</h3>
                        <div className="flex items-start">
                          <MessageSquare className="h-8 w-8 text-accent-teal mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-gray-700 italic mb-2">"{study.testimonial.quote}"</p>
                            <p className="text-sm text-deep-navy font-semibold">{study.testimonial.author}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>

          <AnimatedSection delay={0.3} className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-deep-navy mb-4">Have a Similar Challenge?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Let's discuss how Larenway Consulting can help your business achieve similar success.
            </p>
            <Button asChild size="lg" className="rounded-2xl">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default CaseStudyDetailPage;