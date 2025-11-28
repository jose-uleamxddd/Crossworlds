'use client';

import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/get-translation';

export default function CallToAction() {
  const { language } = useLanguage();
  
  return (
    <section className="bg-[#008ebd] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {getTranslation(language, 'cta.title')}
          </h2>
          <p className="text-lg text-white/90">
            {getTranslation(language, 'cta.subtitle')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-8 py-3 bg-white text-[#008ebd] font-semibold rounded-lg hover:bg-white/90 transition-colors"
          >
            {getTranslation(language, 'cta.contact')}
          </a>
          <a
            href="/ministries"
            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#008ebd] transition-colors"
          >
            {getTranslation(language, 'cta.exploreMinistries')}
          </a>
        </div>
      </div>
    </section>
  );
}
