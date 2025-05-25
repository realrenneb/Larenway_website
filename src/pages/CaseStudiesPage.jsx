import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const caseStudiesData = [
  {
    id: 'alpha-corp-turnaround',
    title: 'AlphaCorp: Strategic Turnaround & Growth',
    industry: 'Manufacturing',
    challenge: 'Declining market share and outdated operational processes.',
    solution: 'Implemented a new market entry strategy and lean manufacturing principles.',
    results: 'Achieved 25% revenue growth and 15% cost reduction in 18 months.',
    imageKey: 'Factory floor with improved efficiency',
  },
  {
    id: 'beta-tech-digital-launch',
    title: 'BetaTech: Successful Digital Product Launch',
    industry: 'Technology',
    challenge: 'Needed to launch a new SaaS product in a competitive market.',
    solution: 'Developed a comprehensive go-to-market strategy and agile development process.',
    results: 'Acquired 10,000+ users and $1M ARR within the first year.',
    imageKey: 'SaaS product dashboard on a laptop screen',
  },
  {
    id: 'gamma-health-optimization',
    title: 'GammaHealth: Operational Optimization',
    industry: 'Healthcare',
    challenge: 'Inefficient patient workflows and high administrative overhead.',
    solution: 'Re-engineered patient care pathways and implemented a new EHR system.',
    results: 'Improved patient satisfaction by 20% and reduced admin costs by 12%.',
    imageKey: 'Healthcare professionals collaborating efficiently',
  },
];

const CaseStudiesPage = () => {
  return (
    <>
      <Seo
        title="Case Studies"
        description="Discover how Larenway Consulting has helped businesses like yours achieve remarkable results. Explore our success stories."
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">Our Success Stories</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud of the tangible results we've delivered for our clients. Explore some of our impactful case studies.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudiesData.map((study, index) => (
              <AnimatedSection key={study.id} delay={index * 0.1}>
                <Card className="h-full flex flex-col rounded-2xl overflow-hidden shadow-subtle hover:shadow-xl transition-shadow duration-300">
                  <img 
                    className="w-full h-48 object-cover"
                    alt={`Illustrative image for ${study.title}`}
                   src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                  <CardHeader>
                    <CardTitle className="text-xl text-deep-navy">{study.title}</CardTitle>
                    <CardDescription className="text-accent-teal font-semibold">{study.industry}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-gray-600 mb-1"><strong className="text-gray-700">Challenge:</strong> {study.challenge}</p>
                    <p className="text-sm text-gray-600 mb-1"><strong className="text-gray-700">Solution:</strong> {study.solution}</p>
                    <p className="text-sm text-gray-600 mb-4"><strong className="text-gray-700">Results:</strong> {study.results}</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button asChild variant="link" className="text-accent-teal font-semibold px-0">
                      <Link to={`/case-studies/${study.id}`}>Read More &rarr;</Link>
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesPage;