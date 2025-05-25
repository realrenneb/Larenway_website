import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const NotFoundPage = () => {
  return (
    <>
      <Seo title="Page Not Found" description="The page you are looking for does not exist." />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4 bg-gray-50">
        <AnimatedSection className="max-w-md">
          <AlertTriangle className="h-24 w-24 text-accent-teal mx-auto mb-8" />
          <h1 className="text-6xl font-extrabold text-deep-navy mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-deep-navy mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-10">
            Oops! The page you're looking for seems to have vanished into thin air. Don't worry, it happens to the best of us.
          </p>
          <Button asChild size="lg" className="rounded-2xl">
            <Link to="/">Go Back to Homepage</Link>
          </Button>
        </AnimatedSection>
      </div>
    </>
  );
};

export default NotFoundPage;