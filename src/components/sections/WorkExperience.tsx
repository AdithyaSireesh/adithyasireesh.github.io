import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const WorkExperience = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const mainExperiences = [
    {
      company: "Quantum Software Lab",
      role: "Research Assistant",
      period: "Sep 2023 - Sep 2024",
      description: "",
      location: "Edinburgh, Scotland, United Kingdom · On-site"
    },
    {
      company: "Inveriant",
      role: "Quantum Computing Researcher",
      period: "Oct 2022 - Sep 2023",
      description: "Worked on resource estimation and optimization of fault tolerant algorithms",
      location: "Remote"
    },
    {
      company: "Amazon",
      role: "Software Engineer",
      period: "Sep 2020 - Sep 2021",
      description: "",
      location: "London, England, United Kingdom"
    },
  ];

  const additionalExperiences = [
    {
      company: "Amazon",
      role: "Software Development Engineer Intern",
      period: "Jul 2019 - Sep 2019",
      description: "",
      location: "London, United Kingdom"
    },
    {
      company: "AlgoSurg Inc.",
      role: "Machine Learning Research Intern (YC W18)",
      period: "Jun 2018 - Sep 2018",
      description: "Built a statistical shape model (SSM) which can be applied in image segmentation of CT data of the knee region. Applied the SSM to automate the segmentation of the femur bone in CT scans.",
      location: "Mumbai Area, India"
    },
    {
      company: "HYPED",
      role: "Software Engineer",
      period: "Oct 2017 - Jun 2018",
      description: "Devised an algorithm to find the orientation of the hyperloop pod using only proximity sensor data. Worked on building math libraries for software teams.",
      location: "Edinburgh"
    },
  ];

  return (
    <section id="work" className="py-36 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Work Experience</h2>
        
        <div className="space-y-8">
          {mainExperiences.map((exp, index) => (
            <div 
              key={index}
              className="border-l-2 border-accent pl-6 relative"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
              
              <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                
                <p className="text-lg text-accent font-medium">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.location}</p>
                {exp.description && <p className="text-muted-foreground mt-3">{exp.description}</p>}
              </div>
            </div>
          ))}

          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="flex items-center gap-2 text-accent hover:underline transition-colors mb-8">
              <span>{isOpen ? 'Show Less' : 'See More'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            
            <CollapsibleContent className="space-y-8">
              {additionalExperiences.map((exp, index) => (
                <div 
                  key={index}
                  className="border-l-2 border-accent pl-6 relative"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
                  
                  <div className="space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    
                    <p className="text-lg text-accent font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                    {exp.description && <p className="text-muted-foreground mt-3">{exp.description}</p>}
                  </div>
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>

          <a 
            href="https://www.linkedin.com/in/s1616497/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            View full experience on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
