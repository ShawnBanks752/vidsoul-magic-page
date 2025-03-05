
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Examples from '@/components/Examples';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 80, // Offset for the fixed header
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Add class to body for smooth scrolling
    document.body.classList.add('scroll-smooth');
    
    return () => {
      document.body.classList.remove('scroll-smooth');
    };
  }, []);

  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <Hero />
      <Features />
      <Examples />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
