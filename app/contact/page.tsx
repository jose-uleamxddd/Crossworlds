'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';
import DonationSection from '@/components/donation-section';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/get-translation';

export default function Contact() {
  const { language } = useLanguage();
  
  return (
    <main>
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">{getTranslation(language, 'contact.title')}</h1>
          <p className="text-xl text-primary-foreground/90">
            {getTranslation(language, 'contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">{getTranslation(language, 'contact.getInTouch')}</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">{getTranslation(language, 'contact.phone')}</h3>
                    <p className="text-foreground/70">+1 (555) 123-4567</p>
                    <p className="text-foreground/70">{getTranslation(language, 'contact.mondayFriday')}, 9AM-5PM EST</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">{getTranslation(language, 'contact.email')}</h3>
                    <p className="text-foreground/70">info@graceacademy.com</p>
                    <p className="text-foreground/70">admissions@graceacademy.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">{getTranslation(language, 'contact.location')}</h3>
                    <p className="text-foreground/70">Manta, Ecuador</p>
                    <p className="text-foreground/70">27V3+8P</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">{getTranslation(language, 'contact.hours')}</h3>
                    <p className="text-foreground/70">{getTranslation(language, 'contact.mondayFriday')}: 9AM - 6PM</p>
                    <p className="text-foreground/70">{getTranslation(language, 'contact.saturday')}: 10AM - 2PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>

          {/* Map Section */}
          <div className="rounded-lg overflow-hidden border border-border h-96 bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.5!2d-80.7!3d-0.9567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s27V3%2B8P%20Manta!5e0!3m2!1sen!2sec!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <DonationSection />

      <Footer />
    </main>
  );
}
