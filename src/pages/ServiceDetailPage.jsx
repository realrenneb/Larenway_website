import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Seo from '@/components/Seo';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Download } from 'lucide-react';

const servicesData = {
  'business-strategy': {
    title: 'Business Strategy & Planning',
    longDescription: 'In today\'s dynamic market, a robust business strategy is paramount. We partner with you to develop comprehensive strategies that not only address current challenges but also anticipate future opportunities. Our approach involves in-depth market analysis, competitive benchmarking, and collaborative workshops to define a clear vision and actionable roadmap for your organization. We focus on creating sustainable growth, optimizing resource allocation, and enhancing shareholder value.',
    imageKey: 'Detailed business strategy meeting with whiteboards',
    deliverables: [
      'Comprehensive Market Analysis & Research Reports',
      'SWOT & PESTLE Analysis',
      'Competitive Landscape Assessment & Benchmarking',
      'Long-term Strategic Roadmaps & Goal Setting',
      'Growth Hacking & Market Penetration Strategies',
      'Mergers & Acquisitions (M&A) Advisory & Due Diligence',
      'Organizational Design & Restructuring Plans',
      'Change Management Strategies',
    ],
    ctaText: 'Discuss Your Strategy Needs',
  },
  'operational-excellence': {
    title: 'Operational Excellence',
    longDescription: 'Achieving operational excellence is key to maximizing profitability and efficiency. Our experts work closely with your team to identify bottlenecks, streamline workflows, and implement best-in-class operational practices. We leverage methodologies like Lean Six Sigma and Agile to drive continuous improvement, reduce waste, and enhance overall productivity across your value chain.',
    imageKey: 'Efficient warehouse logistics with automation',
    deliverables: [
      'End-to-End Process Mapping & Re-engineering',
      'Supply Chain Optimization & Logistics Management',
      'Implementation of Performance Management Systems (KPIs, Dashboards)',
      'Cost Reduction & Waste Elimination Initiatives',
      'Quality Assurance & Control Frameworks',
      'Lean Six Sigma Implementation & Training',
      'Inventory Management Optimization',
      'Workflow Automation Solutions',
    ],
    ctaText: 'Optimize Your Operations',
  },
  'digital-transformation': {
    title: 'Digital Transformation',
    longDescription: 'Embrace the future with our comprehensive digital transformation services. We help you harness the power of technology to innovate, create superior customer experiences, and build resilient business models. From assessing your digital maturity to implementing cutting-edge solutions like AI, IoT, and cloud computing, we guide you every step of the way.',
    imageKey: 'Futuristic digital interface with interconnected data points',
    deliverables: [
      'Digital Maturity Assessment & Gap Analysis',
      'Customized Technology Roadmapping & Architecture Design',
      'Data Analytics, Business Intelligence & Big Data Solutions',
      'Cloud Strategy, Migration & Management (AWS, Azure, GCP)',
      'Artificial Intelligence (AI) & Machine Learning (ML) Integration',
      'Internet of Things (IoT) Solutions & Implementation',
      'Cybersecurity Strategy & Risk Management',
      'Customer Experience (CX) Enhancement through Digital Channels',
    ],
    ctaText: 'Transform Your Business Digitally',
  },
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Seo
        title={service.title}
        description={`Detailed information about Larenway Consulting's ${service.title} services.`}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Button asChild variant="outline" className="mb-8 rounded-2xl border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-deep-navy">
              <Link to="/services">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Services
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">{service.title}</h1>
            <img 
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-10"
              alt={`Illustrative image for ${service.title}`}
             src="https://images.unsplash.com/photo-1690721606848-ac5bdcde45ea" />
            <p className="text-lg text-gray-700 leading-relaxed mb-10">{service.longDescription}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl font-semibold text-deep-navy mb-6">Key Deliverables</h2>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-teal mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
          
          {/* Optional: Download Brochure Link
          <AnimatedSection delay={0.2} className="mb-10">
            <a href={`/brochures/${serviceId}.pdf`} download className="inline-flex items-center text-accent-teal hover:underline font-semibold text-lg">
              <Download className="h-5 w-5 mr-2" /> Download Detailed Brochure for {service.title}
            </a>
          </AnimatedSection>
          */}

          <AnimatedSection delay={0.3} className="text-center bg-gray-50 p-8 md:p-12 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-deep-navy mb-4">Ready to {service.ctaText.split(' ')[0].toLowerCase()}?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Let's discuss how our {service.title.toLowerCase()} expertise can help your business achieve its goals.
            </p>
            <Button asChild size="lg" className="rounded-2xl">
              <Link to={`/contact?service=${serviceId}`}>{service.ctaText}</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;