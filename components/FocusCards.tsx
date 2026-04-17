import { Microscope, Sprout, BookOpen, Scale, Users } from 'lucide-react';
import { client } from '@/lib/sanity';
import { FocusArea } from '@/types/sanity';

const iconMap: Record<string, any> = {
  Microscope,
  Sprout,
  BookOpen,
  Scale,
  Users,
};

async function getFocusAreas(): Promise<FocusArea[]> {
  return client.fetch(
    `*[_type == "focusArea"] | order(order asc) [0...5] {
      _id,
      title,
      description,
      icon,
      color,
      order
    }`
  );
}

export default async function FocusCards() {
  const focusAreas = await getFocusAreas();

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Our Core Focus Areas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area) => {
            const IconComponent = area.icon && iconMap[area.icon] ? iconMap[area.icon] : Microscope;
            const colorClass = area.color || 'bg-primary-500';
            
            return (
              <div
                key={area._id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer"
              >
                <div className={`${colorClass} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
