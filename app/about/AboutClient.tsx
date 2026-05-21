'use client';

import { useState } from 'react';
import { Target, Eye, Heart, Mail, MapPin, Phone, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { About, SiteSettings } from '@/types/sanity';

interface Props {
  about: About | null;
  settings: SiteSettings | null;
}

export default function AboutClient({ about, settings }: Props) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
          About <span className="text-primary-600">CNRI</span>
        </h1>

        {/* Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Overview</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              The Center for Nutrition Research and Innovation (CNRI) at Kaduna State University was established
              to bridge the gap between academia, government, and the community. The Center is committed to
              translating research outputs into practical products and services, positioning itself as a catalyst
              for combating malnutrition, food insecurity, and health disparities in Nigeria and across Africa.
            </p>
            <p>
              Through strategic partnerships, community engagement, and applied research, CNRI is committed to
              improving nutrition and health outcomes and advancing evidence-based policy reforms in Kaduna State
              and beyond.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-primary-600 p-3 rounded-lg mr-4">
                <Target className="text-white" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {about?.mission ?? 'To conduct cutting-edge research and develop innovative solutions to address nutrition challenges in Nigeria and Africa.'}
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-accent-600 p-3 rounded-lg mr-4">
                <Eye className="text-white" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {about?.vision ?? 'To be a leading center of excellence in nutrition research and innovation in Africa.'}
            </p>
          </div>
        </div>

        {/* Commitment */}
        {(about?.commitment || !about) && (
          <div className="mb-12 bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-pink-500 p-3 rounded-lg mr-4">
                <Heart className="text-white" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Commitment</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {about?.commitment ?? 'CNRI is committed to translating research into practical solutions that improve nutrition outcomes and health equity across communities.'}
            </p>
          </div>
        )}

        {/* Contact Section */}
        <div id="contact" className="border-t border-gray-200 pt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Contact Us</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Get in touch with CNRI for partnerships, inquiries, or to learn more about our work
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-900">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">
                      {settings?.address ?? 'Center for Nutrition Research and Innovation\nKaduna State University\nKaduna, Nigeria'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Mail className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">{settings?.contactEmail ?? 'info@cnri-kasu.edu.ng'}</p>
                  </div>
                </div>
                {(settings?.contactPhone || !settings) && (
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Phone className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">{settings?.contactPhone ?? '+234 XXX XXX XXXX'}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Follow Us on Social Media</h4>
                <div className="flex space-x-4">
                  {settings?.socialMedia?.facebook && (
                    <a href={settings.socialMedia.facebook} target="_blank" rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors text-gray-700">
                      <Facebook size={24} />
                    </a>
                  )}
                  {settings?.socialMedia?.twitter && (
                    <a href={settings.socialMedia.twitter} target="_blank" rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors text-gray-700">
                      <Twitter size={24} />
                    </a>
                  )}
                  {settings?.socialMedia?.linkedin && (
                    <a href={settings.socialMedia.linkedin} target="_blank" rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors text-gray-700">
                      <Linkedin size={24} />
                    </a>
                  )}
                  {settings?.socialMedia?.instagram && (
                    <a href={settings.socialMedia.instagram} target="_blank" rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors text-gray-700">
                      <Instagram size={24} />
                    </a>
                  )}
                  {/* Fallback icons if no social media set in Sanity */}
                  {!settings?.socialMedia && (
                    <>
                      {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                        <a key={i} href="#"
                          className="bg-white p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors text-gray-700">
                          <Icon size={24} />
                        </a>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-12 bg-primary-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Newsletter Subscription</h3>
            <p className="mb-6">Stay updated with our latest research, programs, and community initiatives</p>
            <form className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none"
                required
              />
              <button type="submit" className="bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
