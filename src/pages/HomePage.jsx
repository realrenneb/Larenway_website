import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import { BarChart3, Zap, Settings, CheckCircle, Users, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: <BarChart3 className="h-12 w-12 text-accent-teal mb-4" />,
    title: 'Business Strategy',
    description: 'Crafting actionable strategies for sustainable growth and market leadership.',
    link: '/services/business-strategy',
  },
  {
    icon: <Zap className="h-12 w-12 text-accent-teal mb-4" />,
    title: 'Operational Excellence',
    description: 'Optimizing processes and workflows to enhance efficiency and reduce costs.',
    link: '/services/operational-excellence',
  },
  {
    icon: <Settings className="h-12 w-12 text-accent-teal mb-4" />,
    title: 'Digital Transformation',
    description: 'Leveraging technology to innovate and create new value for your business.',
    link: '/services/digital-transformation',
  },
];

const strengths = [
  { icon: <CheckCircle className="h-6 w-6 text-accent-teal mr-3" />, text: '15+ Years of Industry Experience' },
  { icon: <Users className="h-6 w-6 text-accent-teal mr-3" />, text: 'Cross-Industry Expertise' },
  { icon: <TrendingUp className="h-6 w-6 text-accent-teal mr-3" />, text: 'Proven ROI and Tangible Results' },
  { icon: <CheckCircle className="h-6 w-6 text-accent-teal mr-3" />, text: 'Client-Centric Approach' },
];

const clientLogos = [
  { name: 'Innovatech', alt: 'Innovatech Logo' },
  { name: 'Quantum Solutions', alt: 'Quantum Solutions Logo' },
  { name: 'Apex Dynamics', alt: 'Apex Dynamics Logo' },
  { name: 'Stellar Corp', alt: 'Stellar Corp Logo' },
  { name: 'Momentum Inc', alt: 'Momentum Inc Logo' },
];

const HomePage = () => {
  return (
    <>
      <Seo
        title="Strategic Growth. Expert Guidance."
        description="Larenway Consulting provides expert business strategy, operational excellence, and digital transformation services to help your business thrive."
      />

      <section className="relative py-20 md:py-32 bg-gradient-to-br from-deep-navy to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Strategic Growth. Expert Guidance.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Larenway Consulting empowers businesses like yours to navigate complexities, unlock potential, and achieve sustainable success.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-2xl text-lg px-10 py-4">
              <Link to="/contact">Get Started</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">Our Key Services</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              We offer a range of specialized services designed to address your unique business challenges.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Card className="text-center h-full hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                  <CardHeader>
                    <div className="flex justify-center">{service.icon}</div>
                    <CardTitle className="text-deep-navy">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-6">{service.description}</CardDescription>
                    <Button asChild variant="link" className="text-accent-teal font-semibold">
                      <Link to={service.link}>Learn More &rarr;</Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img 
                className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-video"
                alt="Team collaborating in a modern office"
               src="https://images.unsplash.com/photo-1590098563652-6066ea95bfa7" />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">Why Larenway?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Choosing Larenway Consulting means partnering with a team dedicated to your success. We bring a unique blend of experience, expertise, and a client-first philosophy to every engagement.
              </p>
              <ul className="space-y-4">
                {strengths.map((strength) => (
                  <li key={strength.text} className="flex items-center text-gray-700">
                    {strength.icon}
                    <span className="text-lg">{strength.text}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-10 rounded-2xl">
                <Link to="/about">More About Us</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">Trusted By Leading Companies</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              We are proud to have partnered with a diverse range of clients, helping them achieve remarkable results.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {clientLogos.map((logo) => (
                <div key={logo.name} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <img 
                    className="h-10 md:h-12"
                    alt={logo.alt}
                   src="https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a" />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default HomePage;