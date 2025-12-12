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
          image: '/images/ministries/coser-para-vivir/01.jpeg',
          text: getTranslation(language, 'ministries.list.sewing.fullContent'),
        },
        {
          image: '/images/ministries/coser-para-vivir/02.jpeg',
          text: getTranslation(language, 'ministries.list.sewing.fullContent'),
        },
        {
          image: '/images/ministries/coser-para-vivir/03.jpeg',
          text: getTranslation(language, 'ministries.list.sewing.fullContent'),
        },
        {
          image: '/images/ministries/coser-para-vivir/04.jpeg',
          text: getTranslation(language, 'ministries.list.sewing.fullContent'),
        },
        {
          image: '/images/ministries/coser-para-vivir/05.jpeg',
          text: getTranslation(language, 'ministries.list.sewing.fullContent'),
        },
      ],
      donationLink: getTranslation(language, 'ministries.list.sewing.donationLink'),
    },
    {
      id: 'praise-worship',
      title: getTranslation(language, 'ministries.list.praiseWorship.title'),
      subtitle: getTranslation(language, 'ministries.list.praiseWorship.subtitle'),
      color: 'from-purple-400 to-purple-600',
      slides: [
        {
          image: '/images/ministries/praise-worship-camp/01.jpeg',
          text: getTranslation(language, 'ministries.list.praiseWorship.fullContent'),
        },
        {
          image: '/images/ministries/praise-worship-camp/02.jpeg',
          text: getTranslation(language, 'ministries.list.praiseWorship.fullContent'),
        },
        {
          image: '/images/ministries/praise-worship-camp/03.jpeg',
          text: getTranslation(language, 'ministries.list.praiseWorship.fullContent'),
        },
      ],
    },
    {
      id: 'ccc',
      title: getTranslation(language, 'ministries.list.ccc.title'),
      subtitle: getTranslation(language, 'ministries.list.ccc.subtitle'),
      color: 'from-cyan-400 to-cyan-600',
      slides: [
        {
          image: '/images/ministries/crossworlds-center/01.jpeg',
          text: getTranslation(language, 'ministries.list.ccc.fullContent'),
        },
        {
          image: '/images/ministries/crossworlds-center/02.jpeg',
          text: getTranslation(language, 'ministries.list.ccc.fullContent'),
        },
        {
          image: '/images/ministries/crossworlds-center/03.jpeg',
          text: getTranslation(language, 'ministries.list.ccc.fullContent'),
        },
        {
          image: '/images/ministries/crossworlds-center/04.jpeg',
          text: getTranslation(language, 'ministries.list.ccc.fullContent'),
        },
      ],
      exploreLink: '/ministries/ecuador-ministries',
      exploreButton: getTranslation(language, 'ministries.list.ccc.exploreButton'),
    },
    {
      id: 'roots-and-routes',
      title: getTranslation(language, 'ministries.list.roots.title'),
      subtitle: getTranslation(language, 'ministries.list.roots.subtitle'),
      color: 'from-amber-400 to-amber-600',
      slides: [
        {
          image: '/images/ministries/roots-and-routes/01.jpg',
          text: getTranslation(language, 'ministries.list.roots.fullContent'),
        },
        {
          image: '/images/ministries/roots-and-routes/02.jpg',
          text: getTranslation(language, 'ministries.list.roots.fullContent'),
        },
        {
          image: '/images/ministries/roots-and-routes/03.jpg',
          text: getTranslation(language, 'ministries.list.roots.fullContent'),
        },
        {
          image: '/images/ministries/roots-and-routes/04.jpeg',
          text: getTranslation(language, 'ministries.list.roots.fullContent'),
        },
      ],
      exploreLink: '/about',
      exploreButton: getTranslation(language, 'ministries.list.roots.aboutButton'),
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
