const skills = [
  {
    category: "Programming Languages",
    items: ["R", "Python", "SQL", "HTML", "CSS", "JavaScript", "NodeJS", "C", "Java", "Git"],
    icon: "💻"
  },
  {
    category: "Data Science Libraries",
    items: ["NumPy", "Pandas", "PySpark", "Matplotlib", "Scikit-Learn", "TensorFlow", "Seaborn", "ggplot2"],
    icon: "📊"
  },
  {
    category: "Databases",
    items: ["MySQL", "PL/SQL", "Redis", "Neo4j", "SQLite"],
    icon: "🗄️"
  },
  {
    category: "Cloud & Tools",
    items: ["Azure", "GCP", "Power BI", "Tableau", "Looker", "SAS"],
    icon: "☁️"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg">
            A comprehensive toolkit for data analysis and software development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{skillGroup.icon}</span>
                <h3 className="text-2xl font-semibold text-white">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 rounded-full text-sm border border-blue-500/20 hover:border-blue-500/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 