import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-nutrition-bg.jpg')",
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/80 to-accent-900/85"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
          Center for Nutrition Research <br />
          <span className="text-accent-400">and Innovation (CNRI)</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-md">
          Improving Nutrition, Advancing Health, Transforming Communities
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/programs"
            className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Explore Programs
          </Link>
          <Link
            href="/contact"
            className="bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-all transform hover:scale-105 shadow-lg border-2 border-white/20"
          >
            Join Our Initiatives
          </Link>
        </div>

        <div className="inline-block bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-primary-700">Kaduna State University</span> | Research • Innovation • Impact
          </p>
        </div>
      </div>
    </section>
  );
}
