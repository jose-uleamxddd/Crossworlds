'use client';

import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/get-translation';

export default function Hero() {
  const { language } = useLanguage();
  
  return (
    <section className="bg-gradient-to-br from-[#0b5298] via-[#0d63b8] to-[#093f72] py-20 md:py-32 relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center space-y-8 animate-fade-in-up">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">
          {getTranslation(language, 'home.title')}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 text-balance max-w-3xl mx-auto">
          {getTranslation(language, 'home.subtitle')}
        </p>
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
          <p className="text-3xl font-bold text-white">100+</p>
          <p className="text-sm text-white/80">{getTranslation(language, 'home.stats.students')}</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-white">7</p>
          <p className="text-sm text-white/80">{getTranslation(language, 'home.stats.ministries')}</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-white">10+</p>
          <p className="text-sm text-white/80">{getTranslation(language, 'home.stats.years')}</p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
