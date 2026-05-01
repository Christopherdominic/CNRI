import { client, urlFor } from '@/lib/sanity';
import { Activity } from '@/types/sanity';
import Image from 'next/image';
import Link from 'next/link';

async function getActivities(): Promise<Activity[]> {
  return client.fetch(
    `*[_type == "activity"] | order(date desc) {
      _id, title, description, date, tag, image, gallery, slug, featured
    }`
  );
}

export const revalidate = 0;

const tagColors: Record<string, string> = {
  'Community Outreach': 'bg-primary-600',
  'Healthcare':         'bg-accent-600',
  'Media':              'bg-purple-600',
  'Research':           'bg-blue-600',
  'Training':           'bg-teal-600',
  'Conference':         'bg-orange-600',
  'Partnership':        'bg-pink-600',
  'Education':          'bg-indigo-600',
};

export default async function ActivitiesPage() {
  const activities = await getActivities();

  const featured = activities.filter((a) => a.featured).slice(0, 3);
  const all = activities;

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
          {all.length > 0 && (
            <div className="flex justify-center gap-6 mt-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                {all.length} {all.length === 1 ? 'Activity' : 'Activities'}
              </span>
            </div>
          )}
        </div>

        {/* Empty state */}
        {all.length === 0 && (
          <div className="text-center py-24 bg-gray-50 rounded-xl">
            <p className="text-gray-500 text-lg mb-2">No activities yet.</p>
            <p className="text-gray-400 text-sm">
              Add activities in{' '}
              <a href="http://localhost:3333" className="text-primary-600 underline">
                Sanity Studio
              </a>{' '}
              and they will appear here.
            </p>
          </div>
        )}

        {/* Featured highlights */}
        {featured.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Highlights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featured.map((activity) => {
                const color = tagColors[activity.tag ?? ''] ?? 'bg-primary-600';
                return (
                  <div
                    key={activity._id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className={`${color} h-2`}></div>
                    <div className="relative h-48 bg-gray-100">
                      <Image
                        src={urlFor(activity.image).width(600).height(400).url()}
                        alt={activity.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      {activity.tag && (
                        <span className={`text-xs font-bold ${color} text-white px-3 py-1 rounded-full`}>
                          {activity.tag}
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">{activity.title}</h3>
                      <p className="text-gray-600 text-sm">{activity.description}</p>
                      <p className="text-xs text-gray-400 mt-3">
                        {new Date(activity.date).toLocaleDateString('en-GB', {
                          day: 'numeric', month: 'long', year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Full photo gallery grid */}
        {all.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Activities</h2>
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
              {all.flatMap((activity) => {
                // Cover image
                const imgs = [
                  {
                    src: urlFor(activity.image).width(600).height(600).url(),
                    alt: activity.title,
                    caption: activity.title,
                    tag: activity.tag,
                  },
                  // Gallery images
                  ...(activity.gallery ?? []).map((g) => ({
                    src: urlFor(g).width(600).height(600).url(),
                    alt: g.caption ?? activity.title,
                    caption: g.caption ?? activity.title,
                    tag: activity.tag,
                  })),
                ];
                return imgs;
              }).map((img, i) => {
                const color = tagColors[img.tag ?? ''] ?? 'bg-primary-600';
                return (
                  <div
                    key={i}
                    className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group relative"
                  >
                    <div className="relative">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-end">
                        <div className="p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                          {img.tag && (
                            <span className={`text-xs font-bold ${color} text-white px-2 py-1 rounded-full`}>
                              {img.tag}
                            </span>
                          )}
                          <p className="text-white text-xs mt-1 font-medium line-clamp-2">{img.caption}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
