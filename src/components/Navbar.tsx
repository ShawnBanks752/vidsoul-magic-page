
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
            VidSoul AI
          </span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Features
          </a>
          <a href="#examples" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Examples
          </a>
          <a href="#testimonials" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Testimonials
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="default" 
            size="sm"
            className="hidden sm:flex button-gradient text-white rounded-full px-6"
          >
            Try Now
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="md:hidden border-none"
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
