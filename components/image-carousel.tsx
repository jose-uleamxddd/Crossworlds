'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getImageUrl, listImages } from '@/lib/supabase';
import Image from 'next/image';

interface ImageCarouselProps {
  bucket: string;
  folder: string;
  className?: string;
  autoPlayInterval?: number;
}

export default function ImageCarousel({
  bucket,
  folder,
  className = '',
  autoPlayInterval = 5000,
}: ImageCarouselProps) {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Función para obtener URL optimizada con transformaciones de Supabase
  const getOptimizedImageUrl = (url: string, width: number = 1200) => {
    // Supabase Image Transformations: redimensionar y convertir a WebP
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (url.includes(supabaseUrl!)) {
      return `${url}?width=${width}&quality=85&format=webp`;
    }
    return url;
  };

  useEffect(() => {
    async function loadImages() {
      try {
        const imageList = await listImages(bucket, folder);
        const urls = imageList.map((img) => getImageUrl(bucket, folder, img.name));
        setImages(urls);
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadImages();
  }, [bucket, folder]);

  // Precarga inteligente: siguiente y anterior
  useEffect(() => {
    if (images.length === 0) return;
    
    const nextIndex = (currentIndex + 1) % images.length;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    
    // Precargar imágenes adyacentes
    [nextIndex, prevIndex].forEach(index => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'image';
      link.href = getOptimizedImageUrl(images[index]);
      document.head.appendChild(link);
    });
  }, [currentIndex, images]);

  useEffect(() => {
    if (images.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (isLoading) {
    return (
      <div className={`bg-muted animate-pulse rounded-lg ${className}`}>
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-muted-foreground">Cargando imágenes...</p>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className={`bg-muted rounded-lg ${className}`}>
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-muted-foreground">No hay imágenes disponibles</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative group ${className}`}>
      {/* Main Image */}
      <div className="relative w-full h-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={getOptimizedImageUrl(images[currentIndex])}
          alt={`Slide ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          priority={currentIndex === 0}
          loading={currentIndex === 0 ? 'eager' : 'lazy'}
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          unoptimized={false}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0b5298] rounded-full p-2 shadow-lg transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0b5298] rounded-full p-2 shadow-lg transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                index === currentIndex
                  ? 'bg-white w-8 h-2'
                  : 'bg-white/50 hover:bg-white/80 w-2 h-2'
              } rounded-full`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      <div className="absolute top-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
