import { Microscope, Sprout, BookOpen, Scale, Users } from 'lucide-react';

const focusAreas = [
  {
    icon: Microscope,
    title: 'Research',
    description: 'Evidence-based research on nutrition challenges and innovative solutions',
    color: 'bg-blue-500',
  },
  {
    icon: Sprout,
    title: 'Climate-Smart Agriculture',
    description: 'Promoting food security through sustainable farming and preservation',
    color: 'bg-primary-500',
  },
  {
    icon: BookOpen,
    title: 'Education & Information',
    description: 'Building nutrition literacy and capacity across communities',
    color: 'bg-accent-500',
  },
  {
    icon: Scale,
    title: 'Nutrition Policy',
    description: 'Strengthening evidence-based policies and stakeholder collaboration',
    color: 'bg-purple-500',
  },
  {
    icon: Users,
    title: 'Empowerment',
    description: 'Supporting women, youth, and communities with opportunities',
    color: 'bg-pink-500',
  },
];

export default function FocusCards() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Our Core Focus Areas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer"
            >
              <div className={`${area.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                <area.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
