import { ArrowRight } from 'lucide-react';
import { client } from '@/lib/sanity';
import { Program } from '@/types/sanity';

async function getPrograms(): Promise<Program[]> {
  return client.fetch(
    `*[_type == "program"] | order(order asc) {
      _id,
      title,
      acronym,
      description,
      slug,
      image,
      order
    }`
  );
}

export const revalidate = 0; // Disable caching for immediate updates

export default async function ProgramsPage() {
  const programs = await getPrograms();

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
          {programs.map((program) => (
            <div
              key={program._id}
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
