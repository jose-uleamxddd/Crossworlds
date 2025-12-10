'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/get-translation';

export default function DonationSection() {
  const [email, setEmail] = useState('');
  const { language } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/80 to-primary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{getTranslation(language, 'donation.title')}</h2>
          </div>
          <p className="text-foreground/70 text-lg">
            {getTranslation(language, 'donation.subtitle')}
          </p>
        </div>

        <div className="bg-background rounded-lg p-8 shadow-lg">
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              {getTranslation(language, 'donation.enterEmail')}
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={getTranslation(language, 'donation.emailPlaceholder')}
              className="w-full px-4 py-3 border-2 border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
            />
          </div>

          <a
            href="https://gofund.me/4cb31a9f4"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            <Heart size={20} />
            {getTranslation(language, 'donation.donateNow')}
          </a>

          <p className="text-center text-xs text-foreground/60 mt-4">
            {getTranslation(language, 'donation.secureMessage')}
          </p>
        </div>
      </div>
    </section>
  );
}
