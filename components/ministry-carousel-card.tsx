'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

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
  imageFolder?: string; // Optional: folder path in /images/ministries/
  exploreLink?: string; // Optional: link to explore more ministries
  exploreButton?: string; // Optional: button text for explore
  videoLink?: string; // Optional: TikTok video link
}

export default function MinistryCarouselCard({
  title,
  subtitle,
  slides,
  color,
  donationLink,
  exploreLink,
  exploreButton,
  videoLink,
}: MinistryCarouselCardProps) {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Function to process markdown bold syntax (**text**)
  const processMarkdown = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2);
        return (
          <strong key={index} className="font-bold text-[#0b5298]">
            {boldText}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="group relative overflow-hidden gap-5 rounded-xl border-2 border-[#0b5298]/30 hover:border-[#0b5298] hover:shadow-2xl transition-all duration-300 bg-white">
      {/* Horizontal Layout */}
      <div className="grid md:grid-cols-2">
        {/* Image Side - Left */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-gray-100">
          <img
            src={slides[currentSlide].image}
            alt={title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b5298]/40 to-transparent pointer-events-none"></div>
          
          {/* Title Overlay on Image */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0b5298] to-transparent">
            <p className="text-sm font-semibold mb-1 text-white/90">{subtitle}</p>
            {videoLink ? (
              <a
                href={videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl font-bold text-white hover:text-cyan-400 transition-colors duration-300 inline-block"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                {title}
              </a>
            ) : (
              <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
            )}
          </div>
          
          {/* Tooltip */}
          {videoLink && showTooltip && (
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[#0b5298] px-4 py-2 rounded-lg shadow-lg text-sm font-semibold z-20 animate-in fade-in slide-in-from-top-2 duration-200">
              {language === 'es' ? 'Ir al video' : 'Go to the video'}
            </div>
          )}
        </div>

        {/* Text Side - Right */}
        <div className="p-4 md:p-6 flex flex-col bg-gradient-to-br from-white to-[#0b5298]/5">
          <div className="relative">
            <div className="max-h-[320px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#0b5298]/30 scrollbar-track-transparent hover:scrollbar-thumb-[#0b5298]/50">
              <div className="prose prose-sm max-w-none text-foreground/80 whitespace-pre-line leading-[2] text-sm md:text-base pb-4 [&>br]:mb-3">
                {slides[currentSlide].text.split('\n').map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {processMarkdown(line)}
                    {lineIndex < slides[currentSlide].text.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
            {/* Fade gradient at bottom - reduced opacity */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/60 to-transparent pointer-events-none"></div>
          </div>

          {/* Donation Link */}
          {donationLink && (
            <div className="mt-6">
              <a
                href={donationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-[#0b5298] to-[#093f72] text-white text-lg font-semibold rounded-lg hover:from-[#093f72] hover:to-[#072d54] transition-all shadow-lg hover:shadow-xl"
              >
                Donar / Donate →
              </a>
            </div>
          )}

          {/* Explore Link */}
          {exploreLink && exploreButton && (
            <div className="mt-6">
              <a
                href={exploreLink}
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-[#0b5298] to-[#093f72] text-white text-lg font-semibold rounded-lg hover:from-[#093f72] hover:to-[#072d54] transition-all shadow-lg hover:shadow-xl"
              >
                {exploreButton} →
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
