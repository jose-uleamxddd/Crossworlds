'use client';

import { useSupabaseImages } from '@/hooks/use-supabase-images';
import Link from 'next/link';
import Image from 'next/image';

interface Ministry {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

const ministries: Ministry[] = [
  {
    id: 'sewing-ministry',
    title: 'Coser para Vivir',
    subtitle: 'Sewing for Life',
    description: 'Learning practical skills while serving the community.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 'music-ministry',
    title: 'High Notes & High Hopes',
    subtitle: 'Music Ministry',
    description: 'Developing musical talents and using them to inspire faith.',
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: 'youth-ministry',
    title: 'Tesoros del Rey',
    subtitle: 'Treasures of the King',
    description: 'Youth-focused ministry for spiritual formation and leadership.',
    color: 'from-pink-400 to-pink-600',
  },
  {
    id: 'english-ministry',
    title: 'English Ministry',
    subtitle: 'Language & Culture',
    description: 'Teaching English through a Christian perspective.',
    color: 'from-green-400 to-green-600',
  },
  {
    id: 'giving-ministry',
    title: 'Giving Ministry',
    subtitle: 'Generosity & Service',
    description: 'Teaching Biblical principles of giving and stewardship.',
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    id: 'new-life-ministry',
    title: 'New Life Ministry',
    subtitle: 'Transformation Through Faith',
    description: 'Ministry for spiritual rebirth and transformation.',
    color: 'from-red-400 to-red-600',
  },
  {
    id: 'roots-and-routes',
    title: 'Roots & Routes',
    subtitle: 'Heritage & Journey',
    description: 'Exploring spiritual heritage while charting new paths.',
    color: 'from-amber-400 to-amber-600',
  },
];

export default function MinistriesWithSupabase() {
  const { images, loading } = useSupabaseImages('Imagenes', 'ministries');

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => {
            const ministryImage = images[index] || null;

            return (
              <Link
                key={ministry.id}
                href={`/ministries/${ministry.id}`}
                className="group"
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    {loading ? (
                      <div className="w-full h-full bg-muted animate-pulse" />
                    ) : ministryImage ? (
                      <Image
                        src={ministryImage.url}
                        alt={ministry.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${ministry.color}`} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {ministry.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {ministry.subtitle}
                    </p>
                    <p className="text-foreground/70 mb-4 flex-1">
                      {ministry.description}
                    </p>
                    <span className="text-primary font-medium group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
