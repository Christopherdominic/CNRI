const stats = [
  { value: '10+', label: 'Active Programs' },
  { value: '5+', label: 'Strategic Partners' },
  { value: '1000+', label: 'Community Members Reached' },
  { value: '15+', label: 'Research Projects' },
];

export default function ImpactSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Impact
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
