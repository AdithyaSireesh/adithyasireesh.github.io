import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-8 px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        
        <div className="space-y-6 callout-block">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-4 flex-1">
              <h3 className="text-2xl font-semibold">Quantum Threat Tracker (QTT)</h3>
              <p className="text-muted-foreground leading-relaxed">
                An open-source tool for quantifying the threat quantum computers pose to public-key cryptosystems 
                by estimating when they will be powerful enough to break protocols like RSA and DH.
              </p>
              <p className="text-sm text-muted-foreground">
                Developed with support from Ofgem, Cambridge Consultants, and the University of Edinburgh.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="https://github.com/qec-codes/QuantumThreatTracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:underline"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
                <a 
                  href="https://qec-codes.github.io/QuantumThreatTracker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Documentation
                </a>
              </div>
            </div>
          </div>

          <a 
            href="https://github.com/AdithyaSireesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <Github className="w-4 h-4" />
            View full list of projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
