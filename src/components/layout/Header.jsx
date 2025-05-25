import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Briefcase, Users, FileText, MessageSquare, Home, Info, Settings, BookOpen, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import LarenwayLogo from '@/components/icons/LarenwayLogo';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import NavItem from './NavItem';
import { cn } from '@/lib/utils';

const navLinks = [
  { to: '/', label: 'Home', icon: <Home className="mr-2 h-5 w-5" /> },
  { to: '/about', label: 'About Us', icon: <Users className="mr-2 h-5 w-5" /> },
  { to: '/services', label: 'Services', icon: <Briefcase className="mr-2 h-5 w-5" /> },
  { to: '/case-studies', label: 'Case Studies', icon: <FileText className="mr-2 h-5 w-5" /> },
  { to: '/blog', label: 'Blog', icon: <BookOpen className="mr-2 h-5 w-5" /> },
  { to: '/contact', label: 'Contact', icon: <MessageSquare className="mr-2 h-5 w-5" /> },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollPosition > 50);
  }, [scrollPosition]);

  const headerClasses = `fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
    isScrolled ? 'bg-deep-navy shadow-lg py-4' : 'bg-transparent py-6'
  }`;
  const logoColor = isScrolled ? 'text-white' : 'text-primary';
  const navLinkColor = isScrolled ? 'text-gray-200 hover:text-accent-teal' : 'text-deep-navy hover:text-accent-teal';
  const ctaButtonVariant = isScrolled ? 'secondary' : 'default';


  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <LarenwayLogo className="h-8 md:h-10 w-auto" color={logoColor} />
          </Link>

          <nav className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            {navLinks.map((link) => (
              <NavItem key={link.to} to={link.to} className={`text-sm font-medium transition-colors ${navLinkColor}`}>
                {link.label}
              </NavItem>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Button asChild variant={ctaButtonVariant} size="lg" className="rounded-2xl">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)} className={isScrolled ? 'text-white hover:text-accent-teal' : 'text-deep-navy hover:text-accent-teal'}>
                  <Menu className="h-7 w-7" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-deep-navy text-white p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                     <SheetClose asChild>
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                            <LarenwayLogo className="h-8 w-auto" color="text-white" />
                        </Link>
                     </SheetClose>
                  </div>
                  <nav className="flex-grow flex flex-col space-y-3">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.to}>
                        <NavLink
                          to={link.to}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            cn(
                              'flex items-center py-3 px-3 rounded-lg text-base font-medium transition-colors hover:bg-accent-teal hover:text-deep-navy',
                              isActive ? 'bg-accent-teal text-deep-navy' : 'text-gray-200'
                            )
                          }
                        >
                          {link.icon}
                          {link.label}
                        </NavLink>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto pt-6">
                    <SheetClose asChild>
                        <Button asChild variant="secondary" size="lg" className="w-full rounded-2xl" onClick={() => setIsMobileMenuOpen(false)}>
                            <Link to="/contact">Get Started</Link>
                        </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;