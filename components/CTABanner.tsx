import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-accent-500 to-accent-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join Us in Transforming Communities
        </h2>
        <p className="text-lg mb-8 text-accent-50">
          Partner with CNRI to combat malnutrition and improve health outcomes across Africa
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get in Touch
          </Link>
          <Link
            href="/conference"
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
          >
            Attend Our Conference
          </Link>
        </div>
      </div>
    </section>
  );
}
