'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Heart, Users, BookOpen, Music } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/get-translation';

export default function GetInvolved() {
  const { language } = useLanguage();
  
  const opportunities = [
    {
      icon: Users,
      title: getTranslation(language, 'getInvolved.student.title'),
      description: getTranslation(language, 'getInvolved.student.description'),
      cta: getTranslation(language, 'getInvolved.student.cta'),
    },
    {
      icon: Heart,
      title: getTranslation(language, 'getInvolved.volunteer.title'),
      description: getTranslation(language, 'getInvolved.volunteer.description'),
      cta: getTranslation(language, 'getInvolved.volunteer.cta'),
    },
    {
      icon: BookOpen,
      title: getTranslation(language, 'getInvolved.teach.title'),
      description: getTranslation(language, 'getInvolved.teach.description'),
      cta: getTranslation(language, 'getInvolved.teach.cta'),
    },
    {
      icon: Music,
      title: getTranslation(language, 'getInvolved.sponsor.title'),
      description: getTranslation(language, 'getInvolved.sponsor.description'),
      cta: getTranslation(language, 'getInvolved.sponsor.cta'),
    },
  ];
  return (
    <main>
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">{getTranslation(language, 'getInvolved.title')}</h1>
          <p className="text-xl text-primary-foreground/90">
            {getTranslation(language, 'getInvolved.subtitle')}
          </p>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <opportunity.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">{opportunity.title}</h3>
                <p className="text-foreground/70 mb-6">{opportunity.description}</p>
                <button className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                  {opportunity.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div className="max-w-2xl mx-auto">
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
