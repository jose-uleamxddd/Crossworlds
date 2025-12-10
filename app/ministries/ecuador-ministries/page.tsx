'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import MinistryCarouselCard from '@/components/ministry-carousel-card';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/get-translation';

export default function EcuadorMinistries() {
  const { language } = useLanguage();
  
  const ministries = [
    {
      id: 'music-ministry',
      title: getTranslation(language, 'ministries.list.music.title'),
      subtitle: getTranslation(language, 'ministries.list.music.subtitle'),
      color: 'from-purple-400 to-purple-600',
      slides: [
        {
          image: '/choir-and-musicians-performing.jpg',
          text: getTranslation(language, 'ministries.list.music.fullContent'),
        },
      ],
      supabaseFolder: 'High Notes & High Hopes',
    },
    {
      id: 'youth-ministry',
      title: getTranslation(language, 'ministries.list.youth.title'),
      subtitle: getTranslation(language, 'ministries.list.youth.subtitle'),
      color: 'from-pink-400 to-pink-600',
      slides: [
        {
          image: '/youth-group-gathering.jpg',
          text: getTranslation(language, 'ministries.list.youth.fullContent'),
        },
      ],
    },
    {
      id: 'english-ministry',
      title: getTranslation(language, 'ministries.list.english.title'),
      subtitle: getTranslation(language, 'ministries.list.english.subtitle'),
      color: 'from-green-400 to-green-600',
      slides: [
        {
          image: '/english-class-students.jpg',
          text: getTranslation(language, 'ministries.list.english.fullContent'),
        },
      ],
      supabaseFolder: 'ministries/giving new life',
    },
  ];

  return (
    <main>
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            {language === 'en' ? 'CCC Ecuador Ministries' : 'Ministerios CCC Ecuador'}
          </h1>
          <p className="text-xl text-primary-foreground/90">
            {language === 'en' 
              ? 'On-the-ground ministries at the CrossWorlds Center for Connections in Manta, Ecuador'
              : 'Ministerios locales en el CrossWorlds Center for Connections en Manta, Ecuador'}
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-[#0b5298]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {ministries.map((ministry) => (
              <MinistryCarouselCard key={ministry.id} {...ministry} />
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-16 text-center">
            <a
              href="/ministries"
              className="inline-flex items-center px-8 py-3 bg-[#0b5298] text-white font-semibold rounded-lg hover:bg-[#093f72] transition-colors shadow-md"
            >
              ← {language === 'en' ? 'Back to All Ministries' : 'Volver a Todos los Ministerios'}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
