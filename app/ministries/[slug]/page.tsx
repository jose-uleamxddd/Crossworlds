import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { notFound } from 'next/navigation';
import GalleryGrid from '@/components/gallery-grid';

const ministryDetails: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  vision: string;
  activities: string[];
  impact: string;
  joinCta: string;
  images: string[];
}> = {
  'sewing-ministry': {
    title: 'Coser para Vivir',
    subtitle: 'Sewing for Life',
    description: 'Learning practical skills while serving the community',
    fullDescription: 'Our Sewing Ministry teaches practical craftsmanship with a heart of service. Students learn valuable skills that can provide income and help others in need.',
    vision: 'To empower individuals through skill development and create opportunities for community service through handmade creations.',
    activities: [
      'Weekly sewing classes',
      'Community outreach projects',
      'Craft fairs and sales',
      'Mentorship programs',
    ],
    impact: 'Over 100 community members served through donations and discounted services',
    joinCta: 'Join Sewing Ministry',
    images: ['/placeholder.svg?key=8k98w'],
  },
  'music-ministry': {
    title: 'High Notes & High Hopes',
    subtitle: 'Music Ministry',
    description: 'Developing musical talents and using them to inspire faith',
    fullDescription: 'Through music, we express our faith and inspire others. This ministry develops musical excellence while deepening spiritual connection.',
    vision: 'To use music as a vehicle for praise, worship, and community transformation.',
    activities: [
      'Instrument lessons (guitar, piano, drums, vocals)',
      'Choir performances',
      'Worship events',
      'Community concerts',
      'Recording and production',
    ],
    impact: 'Monthly performances reaching 500+ community members',
    joinCta: 'Join Music Ministry',
    images: ['/placeholder.svg?key=31nu0'],
  },
  'youth-ministry': {
    title: 'Tesoros del Rey',
    subtitle: 'Treasures of the King',
    description: 'Youth-focused ministry for spiritual formation and leadership',
    fullDescription: 'We believe young people are treasures of God\'s kingdom. This ministry equips them for life and leadership in faith.',
    vision: 'To develop spiritually mature, socially conscious, and morally strong young leaders.',
    activities: [
      'Bible study groups',
      'Youth events and retreats',
      'Leadership training',
      'Mentorship programs',
      'Community service projects',
    ],
    impact: '200+ youth actively engaged in spiritual growth',
    joinCta: 'Join Youth Ministry',
    images: ['/placeholder.svg?key=2ceux'],
  },
  'english-ministry': {
    title: 'English Ministry',
    subtitle: 'Language & Culture',
    description: 'Teaching English as a bridge to global communication',
    fullDescription: 'English is a gateway to opportunities and global understanding. We teach language with cultural sensitivity and Christian values.',
    vision: 'To empower individuals through language skills for better opportunities and cross-cultural understanding.',
    activities: [
      'English classes (all levels)',
      'Conversation groups',
      'TOEFL preparation',
      'Cultural exchange events',
      'Conversation partner program',
    ],
    impact: '300+ students learning English with improved proficiency',
    joinCta: 'Join English Ministry',
    images: ['/placeholder.svg?key=kp6z5'],
  },
  'giving-ministry': {
    title: 'Giving Ministry',
    subtitle: 'Generosity & Service',
    description: 'Teaching Biblical principles of giving and stewardship',
    fullDescription: 'Generosity is a spiritual discipline. This ministry teaches biblical principles and encourages giving from the heart.',
    vision: 'To cultivate a culture of generosity and stewardship in our community.',
    activities: [
      'Giving education workshops',
      'Community fundraisers',
      'Sponsor a child programs',
      'Emergency relief efforts',
      'Partnership with NGOs',
    ],
    impact: 'Millions of pesos donated to help families in need',
    joinCta: 'Join Giving Ministry',
    images: ['/placeholder.svg?key=7ytk4'],
  },
  'new-life-ministry': {
    title: 'New Life Ministry',
    subtitle: 'Transformation Through Faith',
    description: 'Ministry for spiritual rebirth and transformation',
    fullDescription: 'This ministry focuses on spiritual renewal and life transformation through personal encounters with Christ.',
    vision: 'To help individuals experience spiritual awakening and transformation in Jesus Christ.',
    activities: [
      'Salvation and discipleship training',
      'Prayer and intercession groups',
      'Testimonial sharing events',
      'Spiritual counseling',
      'Small group studies',
    ],
    impact: '150+ individuals experienced spiritual transformation',
    joinCta: 'Join New Life Ministry',
    images: ['/placeholder.svg?key=0nxyc'],
  },
  'roots-and-routes': {
    title: 'Roots & Routes',
    subtitle: 'Heritage & Journey',
    description: 'Exploring spiritual heritage while charting new paths of faith',
    fullDescription: 'We honor our spiritual heritage while embracing new directions. This ministry connects past wisdom with future vision.',
    vision: 'To bridge generations through shared values, heritage appreciation, and forward-looking faith.',
    activities: [
      'Historical faith studies',
      'Intergenerational events',
      'Heritage celebrations',
      'Vision casting meetings',
      'Family discipleship programs',
    ],
    impact: 'Strong multigenerational community with shared values',
    joinCta: 'Join Roots & Routes',
    images: ['/placeholder.svg?key=iw049'],
  },
};

export async function generateStaticParams() {
  return Object.keys(ministryDetails).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ministry = ministryDetails[slug];
  
  if (!ministry) {
    return { title: 'Ministry Not Found' };
  }

  return {
    title: `${ministry.title} - Grace Academy`,
    description: ministry.description,
  };
}

export default async function MinistryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ministry = ministryDetails[slug];

  if (!ministry) {
    notFound();
  }

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold mb-2 text-primary-foreground/80">Ministry</p>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-2">{ministry.title}</h1>
          <p className="text-xl text-primary-foreground/90">{ministry.subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">About This Ministry</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                {ministry.fullDescription}
              </p>
              <div className="bg-accent/20 p-6 rounded-lg border-l-4 border-accent">
                <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
                <p className="text-foreground/70">{ministry.vision}</p>
              </div>
            </div>
            <div className="bg-secondary/20 rounded-lg p-8 border-2 border-secondary/50">
              <h3 className="text-2xl font-bold text-primary mb-6">What We Do</h3>
              <ul className="space-y-4">
                {ministry.activities.map((activity, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span className="text-foreground/70">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Impact */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 md:p-12 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-foreground/70 text-lg">{ministry.impact}</p>
          </div>

          {/* CTA */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Ready to Get Involved?</h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Join us in making a difference through service, learning, and faith.
            </p>
            <a
              href="/get-involved"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              {ministry.joinCta}
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Ministry in Action</h2>
          <GalleryGrid />
        </div>
      </section>

      <Footer />
    </main>
  );
}
