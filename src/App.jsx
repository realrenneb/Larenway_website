import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import AboutUsPage from '@/pages/AboutUsPage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import CaseStudiesPage from '@/pages/CaseStudiesPage';
import CaseStudyDetailPage from '@/pages/CaseStudyDetailPage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsConditionsPage from '@/pages/TermsConditionsPage';
import NotFoundPage from '@/pages/NotFoundPage';
import CookieConsentBanner from '@/components/CookieConsentBanner';

function App() {
	return (
		<HelmetProvider>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutUsPage />} />
						<Route path="/services" element={<ServicesPage />} />
						<Route path="/services/:serviceId" element={<ServiceDetailPage />} />
						<Route path="/case-studies" element={<CaseStudiesPage />} />
						<Route path="/case-studies/:caseStudyId" element={<CaseStudyDetailPage />} />
						<Route path="/blog" element={<BlogPage />} />
						<Route path="/blog/:postId" element={<BlogPostPage />} />
						<Route path="/contact" element={<ContactPage />} />
						<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
						<Route path="/terms-conditions" element={<TermsConditionsPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Layout>
				<Toaster />
				<CookieConsentBanner />
			</Router>
		</HelmetProvider>
	);
}

export default App;