import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Zap, Settings, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    id: 'business-strategy',
    title: 'Business Strategy & Planning',
    excerpt: 'Develop robust strategies for sustainable growth, market entry, and competitive advantage. We help you define your vision and create actionable plans to achieve it.',
    icon: <BarChart3 className="h-10 w-10 text-accent-teal" />,
    imageKey: 'Business strategy session with charts',
    deliverables: [
      'Market Analysis & Research',
      'Competitive Landscape Assessment',
      'Strategic Roadmaps',
      'Growth Hacking Strategies',
      'Mergers & Acquisitions Advisory',
    ],
  },
  {
    id: 'operational-excellence',
    title: 'Operational Excellence',
    excerpt: 'Optimize your operations for peak efficiency, cost reduction, and enhanced productivity. We streamline processes and implement best practices.',
    icon: <Zap className="h-10 w-10 text-accent-teal" />,
    imageKey: 'Streamlined factory operations',
    deliverables: [
      'Process Re-engineering',
      'Supply Chain Optimization',
      'Performance Management Systems',
      'Cost Reduction Initiatives',
      'Quality Assurance Frameworks',
    ],
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    excerpt: 'Leverage cutting-edge technologies to innovate, improve customer experiences, and transform your business model for the digital age.',
    icon: <Settings className="h-10 w-10 text-accent-teal" />,
    imageKey: 'Digital interface with data analytics',
    deliverables: [
      'Digital Maturity Assessment',
      'Technology Roadmapping',
      'Data Analytics & Business Intelligence',
      'Cloud Strategy & Migration',
      'AI & Machine Learning Integration',
    ],
  },
];

const ServicesPage = () => {
  return (
    <>
      <Seo
        title="Our Services"
        description="Explore Larenway Consulting's comprehensive range of services, including business strategy, operational excellence, and digital transformation, designed to drive your business forward."
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">Our Consulting Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide tailored solutions to meet your unique business needs and drive impactful results. Explore our core service areas below.
            </p>
          </AnimatedSection>

          <div className="space-y-16">
            {servicesData.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <Card className="overflow-hidden rounded-2xl shadow-subtle lg:grid lg:grid-cols-2 lg:items-center">
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <CardTitle className="ml-4 text-2xl md:text-3xl text-deep-navy">{service.title}</CardTitle>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.excerpt}</p>
                    
                    <h3 className="text-lg font-semibold text-deep-navy mb-3">Key Deliverables:</h3>
                    <ul className="space-y-2 mb-8">
                      {service.deliverables.slice(0,3).map((item) => (
                        <li key={item} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-accent-teal mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg" className="rounded-2xl">
                            <Link to={`/services/${service.id}`}>Learn More</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-2xl border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-deep-navy">
                            <Link to="/contact?service=${service.id}">Contact Us</Link>
                        </Button>
                    </div>
                    {/* Optional: Download Brochure Link
                    <div className="mt-6">
                      <a href={`/brochures/${service.id}.pdf`} download className="text-sm text-accent-teal hover:underline font-semibold flex items-center">
                        <Download className="h-4 w-4 mr-2" /> Download Detailed Brochure
                      </a>
                    </div>
                    */}
                  </div>
                  <div className="hidden lg:block h-full">
                    <img 
                      className="w-full h-full object-cover"
                      alt={`Illustrative image for ${service.title}`}
                     src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
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

export default ServicesPage;