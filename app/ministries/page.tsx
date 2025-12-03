'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import MinistryCarouselCard from '@/components/ministry-carousel-card';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/get-translation';

export default function Ministries() {
  const { language } = useLanguage();
  
  const ministries = [
    {
      id: 'sewing-ministry',
      title: getTranslation(language, 'ministries.list.sewing.title'),
      subtitle: getTranslation(language, 'ministries.list.sewing.subtitle'),
      color: 'from-blue-400 to-blue-600',
      slides: [
        {
          image: '/sewing-ministry-classroom.jpg',
          text: getTranslation(language, 'ministries.list.sewing.fullContent'),
        },
      ],
      donationLink: getTranslation(language, 'ministries.list.sewing.donationLink'),
    },
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
    },
    {
      id: 'giving-ministry',
      title: getTranslation(language, 'ministries.list.giving.title'),
      subtitle: getTranslation(language, 'ministries.list.giving.subtitle'),
      color: 'from-yellow-400 to-yellow-600',
      slides: [
        {
          image: '/volunteer-helping-community.jpg',
          text: getTranslation(language, 'ministries.list.giving.description'),
        },
      ],
    },
    {
      id: 'new-life-ministry',
      title: getTranslation(language, 'ministries.list.newLife.title'),
      subtitle: getTranslation(language, 'ministries.list.newLife.subtitle'),
      color: 'from-red-400 to-red-600',
      slides: [
        {
          image: '/baptism-celebration-church.jpg',
          text: getTranslation(language, 'ministries.list.newLife.description'),
        },
      ],
    },
    {
      id: 'roots-and-routes',
      title: getTranslation(language, 'ministries.list.roots.title'),
      subtitle: getTranslation(language, 'ministries.list.roots.subtitle'),
      color: 'from-amber-400 to-amber-600',
      slides: [
        {
          image: '/family-gathering-nature.jpg',
          text: getTranslation(language, 'ministries.list.roots.description'),
        },
      ],
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-[#0b5298]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {ministries.map((ministry) => (
              <MinistryCarouselCard key={ministry.id} {...ministry} />
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
