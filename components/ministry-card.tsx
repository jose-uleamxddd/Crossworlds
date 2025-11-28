import Image from 'next/image';

interface MinistryCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  image: string;
}

export default function MinistryCard({ title, subtitle, description, color, image }: MinistryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border hover:shadow-xl transition-all duration-300 bg-card">
      {/* Image Container */}
      <div className={`h-40 bg-gradient-to-br ${color} relative overflow-hidden`}>
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm font-semibold text-primary mb-1">{subtitle}</p>
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>
        
        <button className="mt-4 inline-flex items-center text-primary font-semibold text-sm group-hover:text-primary/80 transition-colors">
          Learn More →
        </button>
      </div>
    </div>
  );
}
