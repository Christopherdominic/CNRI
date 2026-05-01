import ActivitiesGallery from '@/components/ActivitiesGallery';

export const metadata = {
  title: 'Activities | CNRI',
  description: 'Recent activities and outreach programs by the Center for Nutrition Research and Innovation',
};

// All 45 activity images from Instagram
const images = Array.from({length: 45}, (_, i) => ({
  src: `/activities/activity-${String(i + 1).padStart(2, '0')}.jpg`,
  id: i + 1,
}));

export default function ActivitiesPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold mb-4 text-sm">
            Our Work in Action
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Activities & Outreach
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A glimpse into our community programs, research activities, outreach events, 
            and the impact we are creating across Kaduna State and beyond.
          </p>
          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              {images.length} Photos
            </span>
          </div>
        </div>

        {/* Gallery */}
        <ActivitiesGallery images={images} />

        {/* Recent Activities Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Town Hall Community Awareness Program',
                description: 'Life saving benefits of breastfeeding #WorldBreastfeedingWeek2025',
                tag: 'Community Outreach',
                color: 'bg-primary-600',
              },
              {
                title: 'Community Outreach at PHCs',
                description: 'Nutrition outreach at Primary Healthcare Centers within Kaduna State',
                tag: 'Healthcare',
                color: 'bg-accent-600',
              },
              {
                title: 'Radio Program on Breastfeeding',
                description: 'Exclusive Breastfeeding awareness at FRCN Supreme FM 96.1 #WorldBreastfeedingWeek2025',
                tag: 'Media',
                color: 'bg-purple-600',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`${item.color} h-2`}></div>
                <div className="p-6">
                  <span className={`text-xs font-bold ${item.color} text-white px-3 py-1 rounded-full`}>
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
