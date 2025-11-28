'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import MinistryCard from '@/components/ministry-card';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/get-translation';

export default function Ministries() {
  const { language } = useLanguage();
  
  const ministries = [
    {
      id: 'sewing-ministry',
      title: getTranslation(language, 'ministries.list.sewing.title'),
      subtitle: getTranslation(language, 'ministries.list.sewing.subtitle'),
      description: getTranslation(language, 'ministries.list.sewing.description'),
      color: 'from-blue-400 to-blue-600',
      image: '/sewing-ministry-classroom.jpg',
    },
    {
      id: 'music-ministry',
      title: getTranslation(language, 'ministries.list.music.title'),
      subtitle: getTranslation(language, 'ministries.list.music.subtitle'),
      description: getTranslation(language, 'ministries.list.music.description'),
      color: 'from-purple-400 to-purple-600',
      image: '/choir-and-musicians-performing.jpg',
    },
    {
      id: 'youth-ministry',
      title: getTranslation(language, 'ministries.list.youth.title'),
      subtitle: getTranslation(language, 'ministries.list.youth.subtitle'),
      description: getTranslation(language, 'ministries.list.youth.description'),
      color: 'from-pink-400 to-pink-600',
      image: '/youth-group-gathering.jpg',
    },
    {
      id: 'english-ministry',
      title: getTranslation(language, 'ministries.list.english.title'),
      subtitle: getTranslation(language, 'ministries.list.english.subtitle'),
      description: getTranslation(language, 'ministries.list.english.description'),
      color: 'from-green-400 to-green-600',
      image: '/english-class-students.jpg',
    },
    {
      id: 'giving-ministry',
      title: getTranslation(language, 'ministries.list.giving.title'),
      subtitle: getTranslation(language, 'ministries.list.giving.subtitle'),
      description: getTranslation(language, 'ministries.list.giving.description'),
      color: 'from-yellow-400 to-yellow-600',
      image: '/volunteer-helping-community.jpg',
    },
    {
      id: 'new-life-ministry',
      title: getTranslation(language, 'ministries.list.newLife.title'),
      subtitle: getTranslation(language, 'ministries.list.newLife.subtitle'),
      description: getTranslation(language, 'ministries.list.newLife.description'),
      color: 'from-red-400 to-red-600',
      image: '/baptism-celebration-church.jpg',
    },
    {
      id: 'roots-and-routes',
      title: getTranslation(language, 'ministries.list.roots.title'),
      subtitle: getTranslation(language, 'ministries.list.roots.subtitle'),
      description: getTranslation(language, 'ministries.list.roots.description'),
      color: 'from-amber-400 to-amber-600',
      image: '/family-gathering-nature.jpg',
    },
  ];
  return (
    <main>
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">{getTranslation(language, 'ministries.title')}</h1>
          <p className="text-xl text-primary-foreground/90">
            {getTranslation(language, 'ministries.subtitle')}
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry) => (
              <MinistryCard key={ministry.id} {...ministry} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-accent rounded-lg p-8 text-center text-accent-foreground">
            <h2 className="text-2xl font-bold mb-4">{getTranslation(language, 'ministries.findYourMinistry')}</h2>
            <p className="mb-6 text-accent-foreground/80">
              {getTranslation(language, 'ministries.findDescription')}
            </p>
            <a
              href="/get-involved"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              {getTranslation(language, 'ministries.joinMinistry')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
