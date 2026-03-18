'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Get in touch with CNRI for partnerships, inquiries, or to learn more about our work
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
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
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
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
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
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

          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <MapPin className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">
                    Center for Nutrition Research and Innovation<br />
                    Kaduna State University<br />
                    Kaduna, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <Mail className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@cnri-kasu.edu.ng</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <Phone className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+234 XXX XXX XXXX</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Follow Us on Social Media</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors text-gray-700"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="bg-white p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors text-gray-700"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="#"
                  className="bg-white p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors text-gray-700"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="bg-white p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors text-gray-700"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-primary-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Newsletter Subscription</h2>
          <p className="mb-6">Stay updated with our latest research, programs, and community initiatives</p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none"
              required
            />
            <button
              type="submit"
              className="bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
