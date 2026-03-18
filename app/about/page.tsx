import { Target, Eye, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
          About <span className="text-primary-600">CNRI</span>
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Center for Nutrition Research and Innovation (CNRI) at Kaduna State University was established 
            to bridge the gap between academia, government, and the community. The Center is committed to 
            translating research outputs into practical products and services, positioning itself as a catalyst 
            for combating malnutrition, food insecurity, and health disparities in Nigeria and across Africa.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Through strategic partnerships, community engagement, and applied research, CNRI is committed to 
            improving nutrition and health outcomes and advancing evidence-based policy reforms in Kaduna State 
            and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-primary-600 p-3 rounded-lg mr-4">
                <Target className="text-white" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To address nutrition-related challenges within the community through evidence-based research, 
              innovative interventions, and nutrition education.
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-accent-600 p-3 rounded-lg mr-4">
                <Eye className="text-white" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A future where malnutrition and nutrition-related diseases are significantly reduced, leading to 
              improved well-being, sustainable development, and strengthened human capital.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <div className="bg-pink-500 p-3 rounded-lg mr-4">
              <Heart className="text-white" size={28} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Our Commitment</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            CNRI is dedicated to translating research into practical solutions that improve nutrition and health 
            outcomes. We work at the intersection of science, policy, and community action to create lasting 
            impact in the fight against malnutrition and food insecurity.
          </p>
        </div>
      </div>
    </div>
  );
}
