import { Target, Eye, Heart } from 'lucide-react';
import { client } from '@/lib/sanity';
import { About } from '@/types/sanity';

async function getAbout(): Promise<About | null> {
  return client.fetch(
    `*[_type == "about"][0] {
      _id,
      overview,
      mission,
      vision,
      commitment,
      impactStats
    }`
  );
}

export const revalidate = 0;

export default async function AboutPage() {
  const about = await getAbout();

  if (!about) {
    return (
      <div className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600">About content not available. Please add content in Sanity Studio.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
          About <span className="text-primary-600">CNRI</span>
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Overview</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              The Center for Nutrition Research and Innovation (CNRI) at Kaduna State University was established 
              to bridge the gap between academia, government, and the community. The Center is committed to 
              translating research outputs into practical products and services, positioning itself as a catalyst 
              for combating malnutrition, food insecurity, and health disparities in Nigeria and across Africa.
            </p>
            <p>
              Through strategic partnerships, community engagement, and applied research, CNRI is committed to 
              improving nutrition and health outcomes and advancing evidence-based policy reforms in Kaduna State 
              and beyond.
            </p>
          </div>
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
              {about.mission}
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
              {about.vision}
            </p>
          </div>
        </div>

        {about.commitment && (
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-pink-500 p-3 rounded-lg mr-4">
                <Heart className="text-white" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Commitment</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {about.commitment}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
