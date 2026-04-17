import { Building2 } from 'lucide-react';
import { client, urlFor } from '@/lib/sanity';
import { Partner } from '@/types/sanity';
import Image from 'next/image';

async function getPartners(): Promise<Partner[]> {
  return client.fetch(
    `*[_type == "partner"] | order(order asc) {
      _id,
      name,
      fullName,
      location,
      description,
      logo,
      website,
      order
    }`
  );
}

export const revalidate = 0;

export default async function PartnersPage() {
  const partners = await getPartners();

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
          Our Partners
        </h1>
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
                {partner.logo ? (
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
          <a
            href="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </div>
  );
}
