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
    `*[_type == "focusArea"] | order(order asc) {
      _id,
      title,
      description,
      icon,
      color,
      points,
      order
    }`
  );
}

export const revalidate = 0;

export default async function FocusAreasPage() {
  const focusAreas = await getFocusAreas();

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
          Core Focus Areas
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          CNRI operates across five interconnected focus areas to address nutrition challenges comprehensively
        </p>

        <div className="space-y-8">
          {focusAreas.map((area) => {
            const IconComponent = area.icon && iconMap[area.icon] ? iconMap[area.icon] : Microscope;
            const colorClass = area.color || 'from-primary-500 to-primary-600';
            
            return (
              <div
                key={area._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`bg-gradient-to-r ${colorClass} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <IconComponent size={32} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">{area.title}</h2>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-6">{area.description}</p>
                  {area.points && area.points.length > 0 && (
                    <ul className="space-y-3">
                      {area.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2 mt-1">•</span>
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
