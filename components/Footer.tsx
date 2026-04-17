import Link from 'next/link';
import { Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { client } from '@/lib/sanity';
import { SiteSettings } from '@/types/sanity';

async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      _id,
      title,
      description,
      contactEmail,
      contactPhone,
      address,
      socialMedia
    }`
  );
}

export default async function Footer() {
  const settings = await getSiteSettings();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">CNRI</h3>
            <p className="text-sm">
              {settings?.description || 'Center for Nutrition Research and Innovation, Kaduna State University'}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-primary-400 transition-colors">Programs</Link></li>
              <li><Link href="/conference" className="hover:text-primary-400 transition-colors">Conference</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>{settings?.address || 'Kaduna State University, Kaduna, Nigeria'}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>{settings?.contactEmail || 'info@cnri-kasu.edu.ng'}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {settings?.socialMedia?.facebook && (
                <a href={settings.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  <Facebook size={20} />
                </a>
              )}
              {settings?.socialMedia?.twitter && (
                <a href={settings.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  <Twitter size={20} />
                </a>
              )}
              {settings?.socialMedia?.linkedin && (
                <a href={settings.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  <Linkedin size={20} />
                </a>
              )}
              {settings?.socialMedia?.instagram && (
                <a href={settings.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  <Instagram size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Center for Nutrition Research and Innovation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
