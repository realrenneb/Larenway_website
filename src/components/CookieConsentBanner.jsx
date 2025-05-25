import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'larenway_cookie_consent';

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 bg-deep-navy/95 backdrop-blur-sm text-white p-4 shadow-2xl z-[9999]"
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <Cookie className="h-8 w-8 mr-3 text-accent-teal" />
              <p className="text-sm">
                We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                {' '}
                <a href="/privacy-policy#cookies" className="underline hover:text-accent-teal">Learn more</a>.
              </p>
            </div>
            <div className="flex-shrink-0 flex gap-3">
              <Button variant="secondary" onClick={handleAccept} className="rounded-2xl">
                Accept
              </Button>
              <Button variant="outline" onClick={handleDecline} className="rounded-2xl border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-deep-navy">
                Decline
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner;