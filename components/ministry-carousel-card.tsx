'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSlide {
  image: string;
  text: string;
}

interface MinistryCarouselCardProps {
  id: string;
  title: string;
  subtitle: string;
  slides: CarouselSlide[];
  color: string;
  donationLink?: string;
}

export default function MinistryCarouselCard({
  title,
  subtitle,
  slides,
  color,
  donationLink,
}: MinistryCarouselCardProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border-2 border-[#0b5298]/20 hover:border-[#0b5298] hover:shadow-2xl transition-all duration-300 bg-white">
      {/* Horizontal Layout */}
      <div className="grid md:grid-cols-2">
        {/* Image Side - Left */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <img
            src={slides[currentSlide].image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b5298]/40 to-transparent"></div>
          
          {/* Title Overlay on Image */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0b5298] to-transparent">
            <p className="text-sm font-semibold mb-1 text-white/90">{subtitle}</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
          </div>
        </div>

        {/* Text Side - Right */}
        <div className="p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-white to-[#0b5298]/5">
          <div className="prose prose-sm max-w-none text-foreground/80 mb-6">
            <div className="whitespace-pre-line leading-relaxed text-sm md:text-base">
              {slides[currentSlide].text}
            </div>
          </div>

          {/* Donation Link */}
          {donationLink && (
            <div className="mt-auto pt-4">
              <a
                href={donationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#0b5298] text-white font-semibold rounded-lg hover:bg-[#093f72] transition-colors shadow-md"
              >
                Donar / Donate →
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0b5298] rounded-full p-2 shadow-lg transition-all z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0b5298] rounded-full p-2 shadow-lg transition-all z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-[#0b5298] w-6'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
