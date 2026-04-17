'use client';

import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { Activity } from '@/types/sanity';

interface ActivitiesPreviewProps {
  activities: Activity[];
}

export default function ActivitiesPreview({ activities }: ActivitiesPreviewProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Recent Activities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity._id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary-200 to-primary-300 overflow-hidden">
                {activity.image && (
                  <Image
                    src={urlFor(activity.image).width(400).height(300).url()}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
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
