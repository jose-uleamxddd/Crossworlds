const timelineEvents = [
  { year: '2010', event: 'Academy founded with a vision for faith-based education' },
  { year: '2012', event: 'Launched our first Music Ministry program' },
  { year: '2015', event: 'Expanded English department with international partnerships' },
  { year: '2018', event: 'Established all seven ministries' },
  { year: '2020', event: 'Adapted to serve online community during pandemic' },
  { year: '2023', event: 'Celebrated 500+ students and strong alumni network' },
  { year: '2025', event: 'Launching new expansion and serving our community' },
];

export default function Timeline() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Our Journey</h2>
        
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className="flex gap-8 items-start">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {event.year.slice(-2)}
                </div>
                {index < timelineEvents.length - 1 && (
                  <div className="w-1 h-16 bg-secondary mt-2"></div>
                )}
              </div>
              
              <div className="pt-2 pb-8">
                <h3 className="text-lg font-bold text-foreground">{event.year}</h3>
                <p className="text-foreground/70 mt-1">{event.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
