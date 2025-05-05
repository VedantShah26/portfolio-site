export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              I am a passionate Data Analyst with expertise in Python, data visualization, and machine learning. 
              My journey in data analysis has led me to work on various projects involving data processing, 
              statistical analysis, and building predictive models.
            </p>
            <p className="text-lg text-gray-300">
              I specialize in transforming complex datasets into meaningful insights and creating interactive 
              visualizations that help businesses make data-driven decisions. My experience includes working 
              with healthcare data, sales analysis, and building custom AI solutions.
            </p>
            <div className="pt-6">
              <a 
                href="/Uptd_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
              <p className="text-gray-400">Expert in Python, Pandas, and statistical analysis</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Visualization</h3>
              <p className="text-gray-400">Proficient in Tableau, Matplotlib, and Seaborn</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-400">Experience with Scikit-learn and TensorFlow</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Database</h3>
              <p className="text-gray-400">SQL, MongoDB, and data warehousing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 