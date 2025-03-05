
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    quote: "VidSoul AI has transformed our marketing strategy. We're now able to create high-quality video content in a fraction of the time it used to take us.",
    author: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    avatarUrl: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    quote: "As a content creator, I was skeptical about AI-generated videos. But VidSoul AI exceeded my expectations with its realistic visuals and seamless transitions.",
    author: "Michael Chen",
    role: "YouTuber & Content Creator",
    avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 3,
    quote: "Our educational institution has been using VidSoul AI to create engaging learning materials. Our students love the interactive videos, and our instructors save hours of production time.",
    author: "Dr. Emily Patel",
    role: "Education Technology Lead, Global University",
    avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
      id="testimonials" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium inline-block mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by Creators Worldwide
          </h2>
          <p className="text-lg text-gray-600">
            See what our users have to say about their experience with VidSoul AI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={cn(
                "glass-effect rounded-xl p-8 transition-all duration-700",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <svg className="w-10 h-10 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.722 6.342c-5.7 0-10.342 4.64-10.342 10.342 0 5.7 4.64 10.34 10.342 10.34.58 0 1.15-.048 1.704-.14-1.536 2.588-3.568 4.06-6.172 4.308l-.156.014c-.524.04-.952.45-.952.978 0 .582.5 1.04 1.088.988 4.713-.446 8.355-3.766 10.126-8.1.6-1.334.934-2.812.934-4.388 0-5.7-4.64-10.342-10.342-10.342zm10.356 0c-5.7 0-10.342 4.64-10.342 10.342 0 5.7 4.64 10.34 10.342 10.34.58 0 1.15-.048 1.704-.14-1.536 2.588-3.566 4.06-6.172 4.308l-.156.014c-.524.04-.952.45-.952.978 0 .582.5 1.04 1.088.988 4.713-.446 8.355-3.766 10.126-8.1.6-1.334.934-2.812.934-4.388 0-5.7-4.64-10.342-10.342-10.342z" />
              </svg>
              
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatarUrl} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
