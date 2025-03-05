
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const examples = [
  {
    id: 1,
    title: "Product Demonstration",
    description: "Create engaging product demos that showcase your product's features and benefits",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    tags: ["Marketing", "Product"]
  },
  {
    id: 2,
    title: "Educational Content",
    description: "Create informative videos to educate your audience on complex topics",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Education", "Tutorial"]
  },
  {
    id: 3,
    title: "Social Media Ads",
    description: "Create eye-catching social media ads that convert viewers into customers",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["Advertising", "Social Media"]
  }
];

const Examples = () => {
  const [activeExample, setActiveExample] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const handleExampleClick = (id: number) => {
    setActiveExample(id);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="examples" 
      ref={sectionRef}
      className="py-20"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium inline-block mb-4">
            Examples
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See What's Possible with VidSoul AI
          </h2>
          <p className="text-lg text-gray-600">
            Browse our gallery of AI-generated videos to see the quality and versatility of our platform.
          </p>
        </div>
        
        <div className={cn(
          "grid lg:grid-cols-3 gap-8 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {examples.map((example) => (
            <div 
              key={example.id}
              className={cn(
                "rounded-xl overflow-hidden card-hover cursor-pointer transition-all duration-300",
                activeExample === example.id ? "ring-2 ring-blue-500 shadow-lg" : "shadow"
              )}
              onClick={() => handleExampleClick(example.id)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={example.imageUrl} 
                  alt={example.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{example.title}</h3>
                    <div className="flex gap-2 mb-2">
                      {example.tags.map((tag, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-white/20 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button variant="default" size="icon" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full w-12 h-12">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{example.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Try This Template
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="button-gradient text-white rounded-full px-8 py-6">
            View All Examples
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Examples;
