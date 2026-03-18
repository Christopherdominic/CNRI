import { Microscope, Sprout, BookOpen, Scale, Users } from 'lucide-react';

const focusAreas = [
  {
    icon: Microscope,
    title: 'Research',
    description: 'The primary goal of this core area is to transform innovative research output into accessible interventions that prevent or manage nutrition related diseases.',
    points: [
      'Undernutrition (wasting, stunting and underweight)',
      'Micronutrient deficiencies (Iodine, vitamin A, and iron)',
      'Unhealthy diets and poor nutrition related diseases (overweight, obesity)',
      'Diet-related diseases (heart disease, stroke, diabetes)',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Sprout,
    title: 'Climate-Smart Agriculture',
    description: 'This core area focuses on combating food insecurity by promoting the production and conservation of nutritious agro-products and medicinal plants.',
    points: [
      'Agro-processing and food preservation technologies',
      'Extended shelf life and reduced post-harvest losses',
      'Strengthening resilience in rural communities',
      'Sustainable farming practices',
    ],
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: BookOpen,
    title: 'Education & Information Dissemination',
    description: 'Dedicated to building knowledge and skills at all levels of society, from community awareness to professional capacity building.',
    points: [
      'Nutrition literacy and training programs',
      'Seminars, workshops, and town-hall meetings',
      'Social media platforms and outreach activities',
      'Special focus on children and adolescents',
    ],
    color: 'from-accent-500 to-accent-600',
  },
  {
    icon: Scale,
    title: 'Nutrition Policy',
    description: 'Dedicated to influencing and strengthening evidence-based nutrition policies that guarantee equitable access to healthy diets.',
    points: [
      'Engaging government, academia, and civil society',
      'Evidence-based policy development',
      'Stakeholder collaboration and coordination',
      'Public health and socio-economic development strategies',
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Users,
    title: 'Empowerment',
    description: 'This core area seeks to reduce poverty and vulnerability by creating income-generating opportunities through nutrition and food systems.',
    points: [
      'Supporting women, youth, and marginalized communities',
      'Income-generating opportunities',
      'Drivers of sustainable development',
      'Community capacity building',
    ],
    color: 'from-pink-500 to-pink-600',
  },
];

export default function FocusAreasPage() {
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
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`bg-gradient-to-r ${area.color} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <area.icon size={32} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{area.title}</h2>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed mb-6">{area.description}</p>
                <ul className="space-y-3">
                  {area.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
