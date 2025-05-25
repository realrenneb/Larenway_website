import React from 'react';
import Seo from '@/components/Seo';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Larenway Consulting. Let's discuss your next project and how we can help your business achieve its goals. Find our contact details and office location."
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">Let's Discuss Your Next Project</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help you achieve your business objectives. Reach out to us with your inquiries, and our team will get back to you promptly.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-subtle">
                <h2 className="text-2xl font-semibold text-deep-navy mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-subtle">
                  <h2 className="text-2xl font-semibold text-deep-navy mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-accent-teal mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-deep-navy">Our Office</p>
                        <p className="text-gray-600">123 Business Avenue, London, EC1A 1AA, UK</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-accent-teal mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-deep-navy">Phone</p>
                        <a href="tel:+442071234567" className="text-gray-600 hover:text-accent-teal">+44 (0)20 7123 4567</a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-accent-teal mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-deep-navy">Email</p>
                        <a href="mailto:info@larenway.com" className="text-gray-600 hover:text-accent-teal">info@larenway.com</a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-deep-navy mb-3">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent-teal" aria-label="Facebook"><Facebook className="h-6 w-6" /></a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent-teal" aria-label="Twitter"><Twitter className="h-6 w-6" /></a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent-teal" aria-label="LinkedIn"><Linkedin className="h-6 w-6" /></a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-subtle overflow-hidden">
                  <h2 className="text-2xl font-semibold text-deep-navy p-8 pb-0">Find Us On The Map</h2>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-0.12899994850158694%2C51.50600132390907%2C-0.12299990653991699%2C51.50900150358204&layer=mapnik&marker=51.507501413745555%2C-0.12599992752075195"
                      width="100%"
                      height="350"
                      style={{ border:0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Larenway Consulting Office Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;