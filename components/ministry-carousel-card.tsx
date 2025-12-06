'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { listImages, getImageUrl } from '@/lib/supabase';

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
  supabaseFolder?: string; // Optional: if provided, load images from Supabase
}

export default function MinistryCarouselCard({
  title,
  subtitle,
  slides,
  color,
  donationLink,
  supabaseFolder,
}: MinistryCarouselCardProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselSlides, setCarouselSlides] = useState<CarouselSlide[]>(slides);
  const [isLoading, setIsLoading] = useState(!!supabaseFolder);

  useEffect(() => {
    async function loadSupabaseImages() {
      if (!supabaseFolder) return;
      
      try {
        const imageList = await listImages('Imagenes', supabaseFolder);
        if (imageList.length > 0) {
          const supabaseSlides = imageList.map((img) => ({
            image: getImageUrl('Imagenes', supabaseFolder, img.name),
            text: slides[0]?.text || '', // Use the first slide's text for all images
          }));
          setCarouselSlides(supabaseSlides);
        }
      } catch (error) {
        console.error('Error loading Supabase images:', error);
        // Keep the original slides if loading fails
      } finally {
        setIsLoading(false);
      }
    }
    
    loadSupabaseImages();
  }, [supabaseFolder, slides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border-2 border-[#0b5298]/20 hover:border-[#0b5298] hover:shadow-2xl transition-all duration-300 bg-white">
      {/* Horizontal Layout */}
      <div className="grid md:grid-cols-2">
        {/* Image Side - Left */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <p className="text-gray-500">Loading images...</p>
            </div>
          ) : (
            <img
              src={carouselSlides[currentSlide].image}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
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
              {carouselSlides[currentSlide].text}
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
      {carouselSlides.length > 1 && (
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
      {carouselSlides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {carouselSlides.map((_, index) => (
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
