const experiences = [
  {
    company: "Your Company Name",
    role: "Data Analyst",
    duration: "2023 - Present",
    description: [
      "Analyzed large datasets to identify trends and patterns, leading to a 20% increase in operational efficiency",
      "Developed interactive dashboards using Tableau and Python for real-time business insights",
      "Collaborated with cross-functional teams to implement data-driven solutions",
      "Built predictive models using machine learning to forecast business metrics"
    ],
    skills: ["Python", "Tableau", "SQL", "Machine Learning", "Data Visualization"]
  },
  {
    company: "Previous Company",
    role: "Junior Data Analyst",
    duration: "2022 - 2023",
    description: [
      "Processed and cleaned large datasets using Python and SQL",
      "Created automated data pipelines to streamline reporting processes",
      "Developed data visualizations to communicate insights to stakeholders",
      "Assisted in building machine learning models for business predictions"
    ],
    skills: ["Python", "Pandas", "SQL", "Data Analysis", "Excel"]
  }
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-xl text-blue-400">{exp.company}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">{exp.duration}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
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