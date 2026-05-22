import { User, Building2 } from 'lucide-react';
import { client, urlFor } from '@/lib/sanity';
import { TeamMember, Partner } from '@/types/sanity';
import Image from 'next/image';
import Link from 'next/link';

async function getTeamMembers(): Promise<TeamMember[]> {
  return client.fetch(
    `*[_type == "teamMember"] | order(order asc) {
      _id, name, role, description, category, image, order
    }`
  );
}

async function getPartners(): Promise<Partner[]> {
  return client.fetch(
    `*[_type == "partner"] | order(order asc) {
      _id, name, fullName, location, description, logo, website, order
    }`
  );
}

export const revalidate = 0;

export default async function TeamPage() {
  const [allMembers, partners] = await Promise.all([getTeamMembers(), getPartners()]);

  const teamMembers = allMembers.filter(m =>
    ['leadership', 'coordinators', 'staff', 'technical'].includes(m.category)
  );
  const advisoryBoard = allMembers.filter(m => m.category === 'advisory');
  const interns = allMembers.filter(m => m.category === 'interns');

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Team Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
          Our Team
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          A dynamic and competent team dedicated to delivering CNRI&apos;s mandate
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
                  {member.image?.asset ? (
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

        <div className="grid md:grid-cols-2 gap-8 mb-24">
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Interns &amp; Volunteers</h2>
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

        {/* Partners Section */}
        <div className="border-t border-gray-200 pt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            Our Partners
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            CNRI collaborates with government agencies, NGOs, and community organizations to maximize impact
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div
                key={partner._id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-4 mx-auto overflow-hidden">
                  {partner.logo?.asset ? (
                    <Image
                      src={urlFor(partner.logo).width(64).height(64).url()}
                      alt={partner.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  ) : (
                    <Building2 className="text-white" size={32} />
                  )}
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-gray-900">{partner.name}</h3>
                {partner.fullName && (
                  <p className="text-sm text-gray-500 text-center mb-2">({partner.fullName})</p>
                )}
                {partner.location && (
                  <p className="text-sm text-primary-600 text-center mb-3">{partner.location}</p>
                )}
                <p className="text-gray-600 text-center text-sm">{partner.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Join us in our mission to improve nutrition and health outcomes across Nigeria and Africa
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
