const experiences = [
  {
    company: "OnTrackNorthAmerica",
    role: "Data Analyst",
    duration: "Feb 2025 - Present",
    description: [
      "Structured scalable ETL pipelines using Python and SQL Alchemy to ingest and integrate large volumes of logistics and regulatory data, improving processing efficiency by 70%",
      "Formulated comprehensive data transformation workflows with Pandas to clean, normalize, and validate multi-source datasets",
      "Performed in-depth exploratory data analysis using Python (NumPy, Pandas) to identify inefficiencies in supply chain routes, leading to 30% improvement in report turnaround time",
      "Assembled Power BI dashboards to monitor KPIs such as emissions, route delays, and regulatory compliance, contributing to 20% increase in project ROI"
    ],
    skills: ["Python", "SQL", "ETL", "Power BI", "Data Analysis", "Pandas", "NumPy"],
    icon: "📈"
  },
  {
    company: "CSS CORP PVT LTD",
    role: "Data Analyst",
    duration: "Jun 2021 - Jul 2022",
    description: [
      "Optimized advanced SQL queries to cleanse and aggregate operational data, improving reporting accuracy and reducing query execution times by 40%",
      "Implemented automated data validation workflows leveraging SQL rule engines, resulting in 35% increase in ETL process accuracy",
      "Conducted statistical analysis on A/B testing datasets using Python to evaluate web engagement metrics, driving 20% uplift in user retention",
      "Created Tableau dashboards to deliver real-time visibility into product KPIs and experimentation results"
    ],
    skills: ["SQL", "Python", "Tableau", "Data Analysis", "ETL", "A/B Testing"],
    icon: "🔍"
  }
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg">
            Professional journey and key achievements
          </p>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{exp.icon}</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-xl text-blue-400">{exp.company}</p>
                  </div>
                </div>
                <span className="text-gray-400">{exp.duration}</span>
              </div>
              <ul className="list-disc list-inside space-y-3 mb-6 text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i} className="hover:text-white transition-colors">{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 border-t border-gray-700 pt-4">
                {exp.skills.map((skill, i) => (
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