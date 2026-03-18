import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          Center for Nutrition Research <br />
          <span className="text-primary-600">and Innovation (CNRI)</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Improving Nutrition, Advancing Health, Transforming Communities
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/programs"
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Explore Programs
          </Link>
          <Link
            href="/contact"
            className="bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Join Our Initiatives
          </Link>
        </div>

        <div className="inline-block bg-white px-6 py-3 rounded-full shadow-md">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-primary-700">Kaduna State University</span> | Research • Innovation • Impact
          </p>
        </div>
      </div>
    </section>
  );
}
