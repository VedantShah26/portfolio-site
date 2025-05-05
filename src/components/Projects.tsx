const projects = [
  {
    title: "E-Commerce Customer Analytics & Predictive Modeling",
    technologies: ["Python", "MySQL", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn"],
    description: [
      "Curated and preprocessed over 1 million customer records from multiple relational tables using Python and SQL",
      "Applied K-Means clustering on RFM metrics to segment users into five distinct personas for targeted marketing",
      "Constructed a sales forecasting model using Holt-Winters exponential smoothing with 10% MAPE for inventory optimization"
    ],
    impact: "Enabled targeted marketing campaigns and improved short-term demand planning",
    icon: "🛍️"
  },
  {
    title: "EHR Data Visualization",
    technologies: ["Python", "Redis", "ODBC Driver", "Power BI", "Statistical Modeling"],
    description: [
      "Established a scalable analytics system to process 100,000+ Electronic Health Records (EHR)",
      "Integrated Redis for real-time data streaming and caching, boosting processing speeds by 60%",
      "Trained predictive models to identify cardiovascular risk factors with 88% accuracy",
      "Crafted six Power BI dashboards with advanced filtering and real-time KPI tracking"
    ],
    impact: "Enhanced early risk detection and optimized data accessibility for clinical staff",
    icon: "🏥"
  },
  {
    title: "Custom Chatbot with Language Translation using RAG",
    technologies: ["Streamlit", "LangChain", "Hugging Face", "FAISS", "RAG", "Google Gemini AI"],
    description: [
      "Built a full-stack chatbot using RAG and Google's Gemini AI for multilingual question answering",
      "Achieved 97% accurate translation across 10+ languages",
      "Enhanced document retrieval performance by integrating FAISS with HNSW indexing",
      "Developed a BERT-based context-aware tokenization pipeline with 92% context retention"
    ],
    impact: "Improved multilingual communication and document understanding",
    icon: "🤖"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Academic Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Showcasing innovative solutions and measurable impact
          </p>
        </div>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{project.icon}</span>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 rounded-full text-sm border border-blue-500/20 hover:border-blue-500/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="list-disc list-inside space-y-3 mb-6 text-gray-300">
                {project.description.map((item, i) => (
                  <li key={i} className="hover:text-white transition-colors">{item}</li>
                ))}
              </ul>
              <div className="text-blue-400 font-semibold border-t border-gray-700 pt-4">
                <span className="text-white">Impact: </span>{project.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 