import { ExternalLink } from 'lucide-react';

const Talks = () => {
  const talks = [
    {
      title: 'Quantum resource estimation for cryptographic attacks',
      event: 'Quantum Summer School, University of St. Andrews',
      date: 'June 2025',
      link: 'https://quantum.wp.st-andrews.ac.uk/summer-school/',
    },
    {
      title: 'Quantum resource estimation for cryptanalysis & Introduction to the Quantum Threat Tracker',
      event: 'Quantum Software Lab Anniversary, University of Edinburgh',
      date: 'June 2025',
    },
  ];

  return (
    <section id="talks" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold">Talks</h2>
        
        <div className="space-y-8">
          {talks.map((talk, index) => (
            <div key={index} className="space-y-2 border-l-2 border-accent/30 pl-6 py-2">
              <h3 className="text-lg font-medium">
                {talk.link ? (
                  <a 
                    href={talk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors inline-flex items-center gap-2 group"
                  >
                    {talk.title}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  talk.title
                )}
              </h3>
              <p className="text-sm text-muted-foreground">{talk.event}</p>
              <p className="text-sm text-muted-foreground italic">{talk.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Talks;
