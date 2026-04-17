import { User } from 'lucide-react';
import { client, urlFor } from '@/lib/sanity';
import { TeamMember } from '@/types/sanity';
import Image from 'next/image';

async function getTeamMembers(): Promise<TeamMember[]> {
  return client.fetch(
    `*[_type == "teamMember"] | order(order asc) {
      _id,
      name,
      role,
      description,
      category,
      image,
      order
    }`
  );
}

export const revalidate = 0;

export default async function TeamPage() {
  const allMembers = await getTeamMembers();
  
  const teamMembers = allMembers.filter(m => 
    ['leadership', 'coordinators', 'staff', 'technical'].includes(m.category)
  );
  const advisoryBoard = allMembers.filter(m => m.category === 'advisory');
  const interns = allMembers.filter(m => m.category === 'interns');

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
          Our Team
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          A dynamic and competent team dedicated to delivering CNRI's mandate
        </p>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member._id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mb-4 mx-auto overflow-hidden">
                  {member.image ? (
                    <Image
                      src={urlFor(member.image).width(80).height(80).url()}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  ) : (
                    <User className="text-white" size={32} />
                  )}
                </div>
                <h3 className="text-lg font-bold text-center mb-2 text-gray-900">{member.name}</h3>
                <p className="text-primary-600 text-center font-semibold mb-3 text-sm">{member.role}</p>
                {member.description && (
                  <p className="text-gray-600 text-sm text-center">{member.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Advisory Board</h2>
            <p className="text-gray-700 mb-4">
              The Advisory Board provides strategic guidance and ensures alignment with national and global nutrition priorities.
            </p>
            <ul className="space-y-3">
              {advisoryBoard.map((member) => (
                <li key={member._id} className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-800 font-medium">{member.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Interns & Volunteers</h2>
            <p className="text-gray-700 mb-4">
              CNRI maintains a vibrant network of young professionals and students contributing to ongoing projects 
              while building capacity in nutrition research and innovation.
            </p>
            <ul className="space-y-3">
              {interns.map((intern) => (
                <li key={intern._id} className="flex items-center">
                  <span className="w-2 h-2 bg-accent-600 rounded-full mr-3"></span>
                  <span className="text-gray-800 font-medium">{intern.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
