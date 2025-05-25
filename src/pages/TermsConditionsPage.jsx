import React from 'react';
import Seo from '@/components/Seo';
import AnimatedSection from '@/components/AnimatedSection';

const TermsConditionsPage = () => {
  return (
    <>
      <Seo
        title="Terms & Conditions"
        description="Read the Larenway Consulting Terms and Conditions for using our website and services."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-8 text-center">Terms and Conditions</h1>
            <p className="text-sm text-gray-500 mb-8 text-center">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p>Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the https://larenway.com website (the "Service") operated by Larenway Consulting ("us", "we", or "our").</p>
              <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
              <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

              <h2>1. Intellectual Property</h2>
              <p>The Service and its original content, features and functionality are and will remain the exclusive property of Larenway Consulting and its licensors. The Service is protected by copyright, trademark, and other laws of both the United Kingdom and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Larenway Consulting.</p>

              <h2>2. Links To Other Web Sites</h2>
              <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Larenway Consulting. Larenway Consulting has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Larenway Consulting shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
              <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>

              <h2>3. Limitation Of Liability</h2>
              <p>In no event shall Larenway Consulting, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>

              <h2>4. Disclaimer</h2>
              <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
              <p>Larenway Consulting its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.</p>

              <h2>5. Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.</p>
              <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>

              <h2>6. Changes</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
              <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>

              <h2>7. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us:</p>
              <ul>
                <li>By email: legal@larenway.com</li>
                <li>By visiting this page on our website: <a href="/contact" className="text-accent-teal hover:underline">https://larenway.com/contact</a></li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default TermsConditionsPage;