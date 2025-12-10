'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/get-translation';

export default function Hero() {
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const subtitle = getTranslation(language, 'home.subtitle');
  const shortSubtitle = subtitle.split('.').slice(0, 1).join('.') + '.';
  
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://hldpvkbebodmtiajldjg.supabase.co/storage/v1/object/public/Imagenes/Home/Gemini_Generated_Image_9oetkn9oetkn9oet.png"
      alt="CrossWorlds Background"
      className="w-full h-full object-cover"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0b5298]/85 via-[#0d63b8]/95 to-[#093f72]/85"></div>
  </div>

  {/* Decorative elements */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 z-[1]"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48 z-[1]"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center space-y-6 animate-fade-in-up">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight text-balance drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          {getTranslation(language, 'home.title')}
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight text-balance drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          {getTranslation(language, 'home.title2')}
        </h2>
        <div className="text-lg sm:text-xl md:text-2xl text-white/90 text-balance max-w-4xl mx-auto mt-6">
          <p className="leading-relaxed">
            {isExpanded ? subtitle : shortSubtitle}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-sm sm:text-base text-white/80 hover:text-white underline transition-colors font-medium"
          >
            {isExpanded 
              ? (language === 'en' ? 'Show Less' : 'Mostrar Menos')
              : (language === 'en' ? 'Show More' : 'Mostrar Más')
            }
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/get-involved"
          className="px-8 py-3 bg-white text-[#0b5298] font-semibold rounded-lg hover:bg-white/80 transition-colors"
        >
          {getTranslation(language, 'home.cta1')}
        </a>
        <a
          href="/about"
          className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0b5298] transition-colors"
        >
          {getTranslation(language, 'home.cta2')}
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
        <div>
          <p className="text-3xl font-bold text-white">50+</p>
          <p className="text-sm text-white/80">{getTranslation(language, 'home.stats.students')}</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-white">6</p>
          <p className="text-sm text-white/80">{getTranslation(language, 'home.stats.ministries')}</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-white">4</p>
          <p className="text-sm text-white/80">{getTranslation(language, 'home.stats.years')}</p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
