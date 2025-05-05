const projects = [
  {
    title: "EHR Data Visualization",
    description: "A comprehensive data visualization project for Electronic Health Records, showcasing patient data analysis and healthcare insights.",
    technologies: ["Python", "Tableau", "Pandas", "Matplotlib"],
    githubLink: "https://github.com/VedantShah26/EHR-Data-Visualization",
  },
  {
    title: "Custom Chatbot with RAG",
    description: "Built a custom chatbot with language translation capabilities using Retrieval-Augmented Generation (RAG) architecture.",
    technologies: ["Python", "NLP", "Machine Learning", "RAG"],
    githubLink: "https://github.com/VedantShah26/Custom-Chatbot-with-Language-Translation-using-RAG",
  },
  {
    title: "Sales Analysis Project",
    description: "Analyzed sales data to identify trends, patterns, and opportunities for business growth.",
    technologies: ["Python", "Pandas", "Seaborn", "Data Analysis"],
    githubLink: "https://github.com/VedantShah26/Sales-Analysis-Project",
  },
  {
    title: "E-commerce Analysis",
    description: "Comprehensive analysis of e-commerce data to optimize business strategies and customer experience.",
    technologies: ["Python", "Data Analysis", "Visualization", "SQL"],
    githubLink: "https://github.com/VedantShah26/ecommerce_analysis",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
              >
                View on GitHub
                <svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 