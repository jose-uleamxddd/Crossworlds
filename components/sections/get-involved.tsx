'use client';

import { useState } from 'react';
import { Heart, Users, DollarSign, Plane, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/get-translation';

export default function GetInvolved() {
  const { language } = useLanguage();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  
  const opportunities = [
    {
      icon: Plane,
      title: getTranslation(language, 'getInvolved.goServe.title'),
      subtitle: getTranslation(language, 'getInvolved.goServe.subtitle'),
      description: getTranslation(language, 'getInvolved.goServe.description'),
      fullDescription: getTranslation(language, 'getInvolved.goServe.fullDescription'),
      cta: getTranslation(language, 'getInvolved.goServe.cta'),
    },
    {
      icon: DollarSign,
      title: getTranslation(language, 'getInvolved.giveSustain.title'),
      subtitle: getTranslation(language, 'getInvolved.giveSustain.subtitle'),
      description: getTranslation(language, 'getInvolved.giveSustain.description'),
      fullDescription: getTranslation(language, 'getInvolved.giveSustain.fullDescription'),
      cta: getTranslation(language, 'getInvolved.giveSustain.cta'),
    },
    {
      icon: Heart,
      title: getTranslation(language, 'getInvolved.praySupport.title'),
      subtitle: getTranslation(language, 'getInvolved.praySupport.subtitle'),
      description: getTranslation(language, 'getInvolved.praySupport.description'),
      fullDescription: getTranslation(language, 'getInvolved.praySupport.fullDescription'),
      cta: getTranslation(language, 'getInvolved.praySupport.cta'),
    },
    {
      icon: Users,
      title: getTranslation(language, 'getInvolved.rootsRoutes.title'),
      subtitle: getTranslation(language, 'getInvolved.rootsRoutes.subtitle'),
      description: getTranslation(language, 'getInvolved.rootsRoutes.description'),
      fullDescription: getTranslation(language, 'getInvolved.rootsRoutes.fullDescription'),
      cta: getTranslation(language, 'getInvolved.rootsRoutes.cta'),
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://hldpvkbebodmtiajldjg.supabase.co/storage/v1/object/public/Imagenes/Home/WhatsApp%20Image%202025-12-05%20at%203.58.08%20PM.jpeg"
          alt="Get Involved Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {getTranslation(language, 'getInvolved.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {getTranslation(language, 'getInvolved.subtitle')}
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl border-2 border-[#0b5298]/10 hover:border-[#0b5298] hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#0b5298] rounded-full flex items-center justify-center mb-4">
                <opportunity.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{opportunity.title}</h3>
              <p className="text-sm font-semibold text-[#0b5298] mb-4">{opportunity.subtitle}</p>
              
              {/* Description with gradient overlay when collapsed */}
              <div className="relative mb-6">
                <p className={`text-foreground/70 leading-relaxed transition-all duration-300 ${
                  expandedCard === index ? '' : 'line-clamp-3'
                }`}>
                  {expandedCard === index ? opportunity.fullDescription : opportunity.description}
                </p>
                {!expandedCard || expandedCard !== index ? (
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                ) : null}
              </div>

              {/* Show More/Less Button */}
              <button
                onClick={() => toggleExpand(index)}
                className="flex items-center gap-2 text-[#0b5298] font-semibold mb-4 hover:text-[#093f72] transition-colors"
              >
                {expandedCard === index 
                  ? getTranslation(language, 'getInvolved.showLess')
                  : getTranslation(language, 'getInvolved.showMore')
                }
                {expandedCard === index ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {/* CTA Button */}
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-2 bg-[#0b5298] text-white font-semibold rounded-lg hover:bg-[#093f72] transition-colors"
              >
                {opportunity.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
