import { ArrowRight } from 'lucide-react';

const programs = [
  {
    acronym: 'NPRP',
    title: 'Nutraceuticals and Phytotherapeutic Research Program',
    description: 'Developing natural health products and plant-based therapeutic solutions for nutrition-related diseases.',
  },
  {
    acronym: 'TDFP',
    title: 'Therapeutic Diets Formulation Program',
    description: 'Creating specialized dietary interventions for disease management and prevention.',
  },
  {
    acronym: 'GHAP',
    title: 'Green Health Afforestation Program',
    description: 'Promoting environmental health through strategic planting of nutritious and medicinal plants.',
  },
  {
    acronym: 'AP-PIP',
    title: 'Agro-Processing and Preservation Innovation Program',
    description: 'Advancing food processing technologies to reduce post-harvest losses and improve food security.',
  },
  {
    acronym: 'NECEP',
    title: 'Nutrition Education and Community Engagement Program',
    description: 'Building nutrition literacy through community outreach, training, and awareness campaigns.',
  },
  {
    acronym: 'NDMP',
    title: 'Nutrition in Disease Management Program',
    description: 'Integrating nutrition interventions in the management of chronic and acute diseases.',
  },
  {
    acronym: 'FESSP',
    title: 'Food Entrepreneurship and SME Support Program',
    description: 'Empowering entrepreneurs with skills and resources for nutrition-focused businesses.',
  },
  {
    acronym: 'IYCN-P',
    title: 'Infant and Young Child Nutrition Program',
    description: 'Promoting optimal feeding practices for children under five years of age.',
  },
  {
    acronym: 'AYNEP',
    title: 'Adolescent and Youth Nutrition Empowerment Program',
    description: 'Addressing nutritional needs and building healthy habits among adolescents and youth.',
  },
  {
    acronym: 'ENHAP',
    title: 'Elderly Nutrition and Healthy Ageing Program',
    description: 'Supporting nutritional well-being and quality of life for the elderly population.',
  },
];

export default function ProgramsPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
          Our Programs
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          CNRI implements comprehensive programs addressing nutrition challenges across all life stages
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-lg inline-block mb-4 font-bold">
                {program.acronym}
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">{program.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{program.description}</p>
              <button className="flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm group">
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
