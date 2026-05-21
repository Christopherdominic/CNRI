import { Calendar, Users, Target, Lightbulb, Award } from 'lucide-react';
import { client, urlFor } from '@/lib/sanity';
import { Activity, Conference } from '@/types/sanity';
import Image from 'next/image';
import Link from 'next/link';

const iconMap: Record<string, React.ElementType> = { Award, Lightbulb, Users, Target, Calendar };

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

async function getActivities(): Promise<Activity[]> {
  return client.fetch(
    `*[_type == "activity"] | order(date desc) {
      _id, title, description, date, tag, image, gallery, slug, featured
    }`
  );
}

async function getActiveConference(): Promise<Conference | null> {
  return client.fetch(
    `*[_type == "conference" && isActive == true][0] {
      _id, title, theme, description, startDate, endDate, location,
      objectives, subThemes, targetParticipants, activities, registrationLink, bannerImage
    }`
  );
}

export const revalidate = 0;

export default async function ActivitiesPage() {
  const [activities, conference] = await Promise.all([getActivities(), getActiveConference()]);

  const featured = activities.filter((a) => a.featured).slice(0, 3);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* ── Activities Section ── */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold mb-4 text-sm">
            Our Work in Action
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Activities &amp; Outreach
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A glimpse into our community programs, research activities, outreach events,
            and the impact we are creating across Kaduna State and beyond.
          </p>
          {activities.length > 0 && (
            <div className="flex justify-center gap-6 mt-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                {activities.length} {activities.length === 1 ? 'Activity' : 'Activities'}
              </span>
            </div>
          )}
        </div>

        {activities.length === 0 && (
          <div className="text-center py-24 bg-gray-50 rounded-xl mb-24">
            <p className="text-gray-500 text-lg mb-2">No activities yet.</p>
            <p className="text-gray-400 text-sm">
              Add activities in{' '}
              <a href="http://localhost:3333" className="text-primary-600 underline">Sanity Studio</a>{' '}
              and they will appear here.
            </p>
          </div>
        )}

        {featured.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Highlights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featured.map((activity) => {
                const color = tagColors[activity.tag ?? ''] ?? 'bg-primary-600';
                return (
                  <div key={activity._id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className={`${color} h-2`}></div>
                    <div className="relative h-48 bg-gray-100">
                      <Image
                        src={urlFor(activity.image).width(600).height(400).url()}
                        alt={activity.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
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
                        {new Date(activity.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activities.length > 0 && (
          <div className="mb-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Activities</h2>
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
              {activities.flatMap((activity) => [
                { src: urlFor(activity.image).width(600).height(600).url(), alt: activity.title, caption: activity.title, tag: activity.tag },
                ...(activity.gallery ?? []).map((g) => ({
                  src: urlFor(g).width(600).height(600).url(),
                  alt: g.caption ?? activity.title,
                  caption: g.caption ?? activity.title,
                  tag: activity.tag,
                })),
              ]).map((img, i) => {
                const color = tagColors[img.tag ?? ''] ?? 'bg-primary-600';
                return (
                  <div key={i} className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group relative">
                    <div className="relative">
                      <Image src={img.src} alt={img.alt} width={600} height={600} className="w-full h-auto object-cover" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-end">
                        <div className="p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                          {img.tag && (
                            <span className={`text-xs font-bold ${color} text-white px-2 py-1 rounded-full`}>{img.tag}</span>
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

        {/* ── Conference Section ── */}
        <div className="border-t border-gray-200 pt-20">
          <div className="text-center mb-12">
            <div className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full font-semibold mb-4 text-sm">
              Upcoming Conference
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Conference</h2>
          </div>

          {!conference ? (
            <div className="text-center py-16 bg-gray-50 rounded-xl">
              <p className="text-gray-500 text-lg">No active conference at the moment.</p>
              <p className="text-gray-400 text-sm mt-2">Check back later for upcoming conferences.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{conference.title}</h3>
                <p className="text-xl text-primary-700 font-semibold mb-4 max-w-4xl mx-auto">{conference.theme}</p>
                <div className="flex items-center justify-center text-gray-600">
                  <Calendar className="mr-2" size={20} />
                  <span>
                    {conference.startDate && conference.endDate
                      ? `${new Date(conference.startDate).toLocaleDateString()} – ${new Date(conference.endDate).toLocaleDateString()}`
                      : 'Dates to be announced'}
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">About the Conference</h3>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Food for Education (FFE) programs, such as Nigeria&apos;s National Home-Grown School Feeding Programme (NHGSFP),
                    are pivotal to improving child nutrition, boosting school attendance, and supporting national human capital
                    development goals under the HCD 2.0 Strategy.
                  </p>
                  <p>
                    The Center for Nutrition Research and Innovation (CNRI), Kaduna State University (KASU), is organizing
                    a Conference to convene experts and actors from academia, government, civil society, international development,
                    and the private sector to explore innovative, sustainable, and integrated approaches to accelerate the
                    implementation of the Food for Education (FFE) Policy.
                  </p>
                </div>
              </div>

              {conference.objectives && conference.objectives.length > 0 && (
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 mb-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Conference Objectives</h3>
                  <ul className="space-y-3">
                    {conference.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-sm">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {conference.subThemes && conference.subThemes.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Conference Sub-Themes</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {conference.subThemes.map((theme, index) => (
                      <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <span className="text-accent-600 mr-2 font-bold">•</span>
                        <span className="text-gray-700">{theme}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {conference.targetParticipants && conference.targetParticipants.length > 0 && (
                <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-8 mb-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Target Participants</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {conference.targetParticipants.map((participant, index) => (
                      <div key={index} className="flex items-center p-3 bg-white rounded-lg">
                        <Users size={20} className="text-accent-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{participant}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {conference.activities && conference.activities.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Conference Activities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {conference.activities.map((activity, index) => {
                      const IconComponent = activity.icon && iconMap[activity.icon] ? iconMap[activity.icon] : Award;
                      return (
                        <div key={index} className="text-center">
                          <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                            <IconComponent className="text-white" size={28} />
                          </div>
                          <p className="text-gray-700 font-semibold text-sm">{activity.title}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="text-center">
                {conference.registrationLink ? (
                  <a
                    href={conference.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-accent-700 transition-all transform hover:scale-105 shadow-lg inline-block"
                  >
                    Register Now
                  </a>
                ) : (
                  <>
                    <button className="bg-accent-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-accent-700 transition-all transform hover:scale-105 shadow-lg">
                      Register Now
                    </button>
                    <p className="text-gray-600 mt-4 text-sm">Registration details coming soon</p>
                  </>
                )}
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
