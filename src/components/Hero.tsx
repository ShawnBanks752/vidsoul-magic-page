
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-24 right-1/4 w-64 h-64 bg-indigo-100 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium inline-block mb-6">
              AI-Powered Video Creation
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Create Professional Videos with <span className="text-gradient">VidSoul AI</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your ideas into high-quality videos in minutes. Our AI-powered platform makes video creation simple, fast, and accessible to everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button className="button-gradient text-white rounded-full px-8 py-6 text-lg font-medium">
                Get Started Free
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-medium border-gray-300 hover:bg-gray-50">
                View Examples
              </Button>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-500/20 backdrop-blur-sm z-10 flex items-center justify-center">
                <Button variant="default" size="lg" className="button-gradient rounded-full">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                  </svg>
                  Watch Demo
                </Button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="VidSoul AI Demo" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
