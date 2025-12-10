'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { listImages, getImageUrl } from '@/lib/supabase';
import { useLanguage } from '@/lib/language-context';
import Image from 'next/image';

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
  exploreLink?: string; // Optional: link to explore more ministries
  exploreButton?: string; // Optional: button text for explore
}

export default function MinistryCarouselCard({
  title,
  subtitle,
  slides,
  color,
  donationLink,
  supabaseFolder,
  exploreLink,
  exploreButton,
}: MinistryCarouselCardProps) {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselSlides, setCarouselSlides] = useState<CarouselSlide[]>(slides);
  const [isLoading, setIsLoading] = useState(!!supabaseFolder);
  const [isExpanded, setIsExpanded] = useState(false);

  // Función para optimizar URLs de Supabase
  const getOptimizedImageUrl = (url: string, width: number = 800) => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (url.includes(supabaseUrl!)) {
      return `${url}?width=${width}&quality=85&format=webp`;
    }
    return url;
  };

  useEffect(() => {
    async function loadSupabaseImages() {
      if (!supabaseFolder) return;
      
      try {
        const imageList = await listImages('Imagenes', supabaseFolder);
        if (imageList.length > 0) {
          const supabaseSlides = imageList.map((img) => ({
            image: getImageUrl('Imagenes', supabaseFolder, img.name),
            text: slides[0]?.text || '',
          }));
          setCarouselSlides(supabaseSlides);
        }
      } catch (error) {
        console.error('Error loading Supabase images:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    loadSupabaseImages();
  }, [supabaseFolder, slides]);

  // Precarga imagen siguiente
  useEffect(() => {
    if (carouselSlides.length <= 1) return;
    const nextIndex = (currentSlide + 1) % carouselSlides.length;
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'image';
    link.href = getOptimizedImageUrl(carouselSlides[nextIndex].image);
    document.head.appendChild(link);
  }, [currentSlide, carouselSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <div className="group relative overflow-hidden gap-5 rounded-xl border-2 border-[#0b5298]/30 hover:border-[#0b5298] hover:shadow-2xl transition-all duration-300 bg-white">
      {/* Horizontal Layout */}
      <div className="grid md:grid-cols-2">
        {/* Image Side - Left */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-gray-100">
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500">Loading images...</p>
            </div>
          ) : (
            <Image
              src={getOptimizedImageUrl(carouselSlides[currentSlide].image)}
              alt={title}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b5298]/40 to-transparent pointer-events-none"></div>
          
          {/* Title Overlay on Image */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0b5298] to-transparent">
            <p className="text-sm font-semibold mb-1 text-white/90">{subtitle}</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
          </div>
        </div>

        {/* Text Side - Right */}
        <div className="p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-white to-[#0b5298]/5">
          <div className="relative">
            <div className="max-h-[320px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#0b5298]/30 scrollbar-track-transparent hover:scrollbar-thumb-[#0b5298]/50">
              <div className="prose prose-sm max-w-none text-foreground/80 whitespace-pre-line leading-relaxed text-sm md:text-base pb-4">
                {carouselSlides[currentSlide].text}
              </div>
            </div>
            {/* Fade gradient at bottom - reduced opacity */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/60 to-transparent pointer-events-none"></div>
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

          {/* Explore Link */}
          {exploreLink && exploreButton && (
            <div className="mt-auto pt-4">
              <a
                href={exploreLink}
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#0b5298] text-white font-semibold rounded-lg hover:bg-[#093f72] transition-colors shadow-md"
              >
                {exploreButton} →
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
