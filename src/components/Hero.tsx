import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Vedant Shah
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-300">
          Data Analyst | Python Developer | Machine Learning Enthusiast
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
          Transforming complex data into actionable insights. Specializing in data analysis, 
          visualization, and machine learning solutions to drive business growth and innovation.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="#experience"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            View Experience
          </Link>
          <Link 
            href="#projects"
            className="px-8 py-3 border border-blue-600 hover:bg-blue-600 rounded-lg font-semibold transition-colors"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
} 