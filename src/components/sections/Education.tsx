const Education = () => {
  const education = [
    {
      institution: "The University of Edinburgh",
      degree: "PhD",
      field: "Quantum Error Correction",
      period: "Sep 2024 - 2028",
      location: "Edinburgh, Scotland",
    },
    {
      institution: "Imperial College London",
      degree: "MSc. (Distinction)",
      field: "Advanced Computing",
      period: "Oct 2021 - Oct 2022",
      location: "London, England",
    },
    {
      institution: "The University of Edinburgh",
      degree: "BSc. (Hons) (First Class)",
      field: "Computer Science and Mathematics",
      period: "2016 - 2020",
      location: "Edinburgh, Scotland",
    },
  ];

  return (
    <section id="education" className="py-36 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-accent pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>

              <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                </div>

                <p className="text-lg text-accent font-medium">{edu.institution}</p>
                <p className="text-muted-foreground">{edu.field}</p>
                <p className="text-sm text-muted-foreground">{edu.location}</p>
              </div>
            </div>
          ))}

          <a
            href="https://www.linkedin.com/in/s1616497/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline mt-6"
          >
            View full education on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Education;
