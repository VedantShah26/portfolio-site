const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "SQL", "R", "JavaScript"],
  },
  {
    category: "Data Analysis",
    items: ["Pandas", "NumPy", "SciPy", "Statistics"],
  },
  {
    category: "Data Visualization",
    items: ["Tableau", "Matplotlib", "Seaborn", "Plotly"],
  },
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "TensorFlow", "NLP", "Deep Learning"],
  },
  {
    category: "Database",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Data Warehousing"],
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "Docker", "AWS", "Jupyter Notebooks"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                  >
                    {item}
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