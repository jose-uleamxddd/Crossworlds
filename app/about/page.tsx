'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/get-translation';
import { Calendar, Heart, Users, Globe } from 'lucide-react';
import SupabaseGallery from '@/components/supabase-gallery';

export default function About() {
  const { language } = useLanguage();

  const milestones = [
    {
      year: '2019',
      title: getTranslation(language, 'about.milestones.2019.title'),
      description: getTranslation(language, 'about.milestones.2019.description'),
      icon: Heart,
      color: 'from-blue-400 to-blue-600',
    },
    {
      year: '2022',
      title: getTranslation(language, 'about.milestones.2022.title'),
      description: getTranslation(language, 'about.milestones.2022.description'),
      icon: Users,
      color: 'from-purple-400 to-purple-600',
    },
    {
      year: '2023',
      title: getTranslation(language, 'about.milestones.2023.title'),
      description: getTranslation(language, 'about.milestones.2023.description'),
      icon: Globe,
      color: 'from-green-400 to-green-600',
    },
    {
      year: '2024',
      title: getTranslation(language, 'about.milestones.2024.title'),
      description: getTranslation(language, 'about.milestones.2024.description'),
      icon: Heart,
      color: 'from-pink-400 to-pink-600',
    },
    {
      year: '2025',
      title: getTranslation(language, 'about.milestones.2025.title'),
      description: getTranslation(language, 'about.milestones.2025.description'),
      icon: Calendar,
      color: 'from-amber-400 to-amber-600',
    },
  ];
  return (
    <main>
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            {getTranslation(language, 'about.title')}
          </h1>
          <p className="text-xl text-primary-foreground/90">
            {getTranslation(language, 'about.subtitle')}
          </p>
        </div>
      </section>

      {/* Our Story - Hero Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {getTranslation(language, 'about.ourStory')}
            </h2>
            <p className="text-xl text-primary font-semibold mb-8">
              {getTranslation(language, 'about.storyTitle')}
            </p>
          </div>

          {/* Story Content with Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                {getTranslation(language, 'about.storyIntro')}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {getTranslation(language, 'about.storyToday')}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                {getTranslation(language, 'about.storyInvitation')}
              </p>
            </div>
            
            {/* Image Gallery */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <SupabaseGallery
                  bucket="Imagenes"
                  folder="Home"
                  columns={2}
                  className="h-full"
                  imageClassName="hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border-2 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {getTranslation(language, 'about.mission')}
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {getTranslation(language, 'about.missionText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {getTranslation(language, 'about.timeline')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {getTranslation(language, 'about.timelineSubtitle')}
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year Badge */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-primary rounded-full items-center justify-center z-10 shadow-lg">
                    <span className="text-xl font-bold text-primary-foreground">
                      {milestone.year}
                    </span>
                  </div>

                  {/* Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                    <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
                      <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-lg flex items-center justify-center`}>
                          <milestone.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                          <div className="md:hidden text-primary font-bold mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-foreground/70">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Repurpose Life */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {getTranslation(language, 'about.callToRepurpose')}
          </h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            {getTranslation(language, 'about.callText')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-involved"
              className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              {getTranslation(language, 'home.cta1')}
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              {getTranslation(language, 'cta.contact')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
