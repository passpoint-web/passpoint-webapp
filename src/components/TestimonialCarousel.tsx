
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Testimonial {
  company: string;
  text: string;
  name: string;
  avatar?: string;
  logo?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-white rounded-xl px-8 py-10 text-center shadow-lg min-h-[300px] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
        
        <ScrollReveal key={currentIndex} className="relative z-10">
          {currentTestimonial.logo && (
            <img 
              src={currentTestimonial.logo} 
              alt={currentTestimonial.company} 
              className="mx-auto h-8 mb-6 opacity-70 transition-opacity duration-300 hover:opacity-100" 
            />
          )}
          
          <blockquote className="italic text-lg md:text-xl mb-6 text-gray-700 leading-relaxed">
            {currentTestimonial.text}
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            {currentTestimonial.avatar && (
              <img 
                src={currentTestimonial.avatar} 
                alt={currentTestimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
              />
            )}
            <div className="text-left">
              <div className="font-semibold text-primary">{currentTestimonial.name}</div>
              <div className="text-sm text-muted-foreground">{currentTestimonial.company}</div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Navigation Arrows */}
      {testimonials.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-primary" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-primary" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? "bg-primary scale-110" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;
