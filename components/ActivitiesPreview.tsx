import Link from 'next/link';

const activities = [
  {
    title: 'Town Hall Community Awareness Program',
    description: 'Life saving benefits of breastfeeding #WorldBreastfeedingWeek2025',
    image: '/placeholder-activity-1.jpg',
  },
  {
    title: 'Community Outreach',
    description: 'Primary Healthcare Centers within Kaduna State',
    image: '/placeholder-activity-2.jpg',
  },
  {
    title: 'Radio Program',
    description: 'Exclusive Breastfeeding at FRCN Supreme FM 96.1',
    image: '/placeholder-activity-3.jpg',
  },
];

export default function ActivitiesPreview() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Recent Activities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                <span className="text-primary-700 font-semibold">Activity Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/activities"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            View All Activities
          </Link>
        </div>
      </div>
    </section>
  );
}
