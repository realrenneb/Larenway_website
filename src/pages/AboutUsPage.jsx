import React from 'react';
import Seo from '@/components/Seo';
import AnimatedSection from '@/components/AnimatedSection';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Award, CalendarDays } from 'lucide-react';

const teamMembers = [
  { name: 'Dr. Eleanor Vance', title: 'Founder & CEO', bio: 'Eleanor brings over 20 years of strategic consulting experience, specializing in market entry and corporate restructuring.', initials: 'EV', imageKey: 'Eleanor Vance headshot' },
  { name: 'Marcus Chen', title: 'Chief Operations Officer', bio: 'Marcus is an expert in operational efficiency and supply chain optimization, with a track record of delivering significant cost savings.', initials: 'MC', imageKey: 'Marcus Chen headshot' },
  { name: 'Aisha Khan', title: 'Head of Digital Transformation', bio: 'Aisha leads our digital innovation practice, helping clients leverage technology for competitive advantage.', initials: 'AK', imageKey: 'Aisha Khan headshot' },
  { name: 'David Miller', title: 'Senior Strategy Consultant', bio: 'David focuses on growth strategies and M&A advisory, with deep expertise in the tech and finance sectors.', initials: 'DM', imageKey: 'David Miller headshot' },
];

const milestones = [
  { year: '2008', event: 'Larenway Consulting Founded', description: 'Established with a vision to provide unparalleled strategic advice.', icon: <CalendarDays className="h-8 w-8 text-accent-teal" /> },
  { year: '2012', event: 'Expanded to International Markets', description: 'Opened first international office, broadening our global reach.', icon: <Award className="h-8 w-8 text-accent-teal" /> },
  { year: '2018', event: 'Launched Digital Transformation Practice', description: 'Responding to evolving client needs in the digital age.', icon: <Target className="h-8 w-8 text-accent-teal" /> },
  { year: '2023', event: 'Celebrated 15 Years of Excellence', description: 'Marking a decade and a half of delivering impactful results for our clients.', icon: <Users className="h-8 w-8 text-accent-teal" /> },
];

const AboutUsPage = () => {
  return (
    <>
      <Seo
        title="About Larenway Consulting"
        description="Learn about Larenway Consulting's mission, our expert team, and our history of driving success for businesses across industries."
      />

      <section className="py-16 md:py-24 bg-deep-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Target className="h-16 w-16 text-accent-teal mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Mission</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              To empower organizations with transformative strategies and expert guidance, enabling them to achieve sustainable growth and lasting success in an ever-evolving global landscape.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Our strength lies in our people. Get to know the dedicated professionals driving Larenway's success.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <Card className="text-center h-full rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="bg-gray-50 p-6">
                    <Avatar className="h-24 w-24 mx-auto mb-4 ring-2 ring-accent-teal ring-offset-2">
                      <img  className="aspect-square h-full w-full" alt={member.name + " headshot"} src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                      <AvatarFallback className="bg-deep-navy text-white text-2xl">{member.initials}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl text-deep-navy">{member.name}</CardTitle>
                    <p className="text-sm text-accent-teal font-semibold">{member.title}</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">Our Journey & Milestones</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              A brief history of Larenway Consulting's growth and key achievements.
            </p>
          </AnimatedSection>
          <div className="relative">
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-300"></div>
            {milestones.map((milestone, index) => (
              <AnimatedSection key={milestone.year} delay={index * 0.15}>
                <div className={`flex md:items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:flex md:w-5/12"></div>
                  <div className="hidden md:flex justify-center w-1/12">
                    <div className="w-4 h-4 bg-accent-teal rounded-full z-10 ring-4 ring-gray-50"></div>
                  </div>
                  <div className="w-full md:w-5/12">
                    <Card className={`rounded-2xl shadow-subtle ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      <CardContent className="p-6 flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">{milestone.icon}</div>
                        <div>
                          <p className="text-accent-teal font-bold text-xl">{milestone.year}</p>
                          <p className="text-lg font-semibold text-deep-navy mt-1">{milestone.event}</p>
                          <p className="text-sm text-gray-600 mt-2">{milestone.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;