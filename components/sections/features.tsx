import { Music, BookOpen, Heart, Users } from 'lucide-react';

const features = [
  {
    icon: Music,
    title: 'Academia de música',
    description: 'Aprende diversos instrumentos musicales y técnicas vocales en un ambiente cristiano de apoyo.',
  },
  {
    icon: BookOpen,
    title: 'Academia de inglés',
    description: 'Domina el idioma inglés a través de clases dinámicas y programas de intercambio cultural.',
  },
  {
    icon: Heart,
    title: 'Crecimiento espiritual',
    description: 'Desarrolla tu fe junto con tu educación a través de nuestros completos programas espirituales.',
  },
  {
    icon: Users,
    title: 'Comunidad de apoyo',
    description: 'Únete a una comunidad amorosa de estudiantes, profesores y mentores unidos en la fe y el propósito.',
  },
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">¿Por qué elegir Academia de Gracia?</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Una combinación única de excelencia académica y desarrollo espiritual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg border border-border hover:shadow-lg hover:border-primary transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-foreground/60 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
