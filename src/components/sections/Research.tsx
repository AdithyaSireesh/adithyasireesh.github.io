import { ExternalLink } from 'lucide-react';

const Research = () => {
  const publications = [
    {
      title: 'Logical accreditation: a framework for efficient certification of fault-tolerant computations',
      arxiv: 'https://arxiv.org/abs/2508.05523',
      authors: 'J. Mills, A. Sireesh, D. Leichtle, J. Roffe, E. Kashefi',
      venue: '7th International Conference on Quantum Error Correction (QEC 2025) - Contributed Talk',
    },
    {
      title: 'Disentangling quantum autoencoder',
      arxiv: 'https://iopscience.iop.org/article/10.1088/2058-9565/adfc07',
      authors: 'A. Sireesh, A. Alhajri, M. S. Kim, T. Haug',
      venue: 'Quantum Science and Technology (IOP) (2025)',
    },
    {
      title: 'Measurement-based uncomputation of quantum circuits for modular arithmetic',
      arxiv: 'https://arxiv.org/abs/2407.20167',
      authors: 'A. Luongo, A. M. Miti, V. Narasimhachar, A. Sireesh',
      venue: '62nd ACM/IEEE Design Automation Conference (DAC) 2025 - Contributed Talk',
    },
    {
      title: 'Optimized circuits for windowed modular arithmetic with applications to quantum attacks against RSA',
      arxiv: 'https://arxiv.org/abs/2502.17325',
      authors: 'A. Luongo, V. Narasimhachar, A. Sireesh',
      venue: '62nd ACM/IEEE Design Automation Conference (DAC) 2025 - Contributed Talk',
    }
  ];

  const keywords = [
    'quantum error correction',
    'quantum arithmetic',
    'resource estimation',
    'fault tolerance',
  ];

  return (
    <section id="research" className="py-8 px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Research</h2>
        
        <p className="text-muted-foreground text-sm">
          quantum error correction · decoding · fault tolerance · resource estimation · modular arithmetic
        </p>

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-all hover:shadow-md group"
            >
              <div className="space-y-3">
                <h3 className="text-base font-medium leading-tight">
                  <a 
                    href={pub.arxiv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors inline-flex items-start gap-2 group"
                  >
                    <span>{pub.title}</span>
                    <ExternalLink className="w-4 h-4 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </a>
                </h3>
                <p className="text-sm text-muted-foreground">{pub.authors}</p>
                <p className="text-sm text-muted-foreground italic">{pub.venue}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <a 
            href="https://scholar.google.com/citations?user=YOURID"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-2"
          >
            See full list on Google Scholar →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Research;
