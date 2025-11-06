import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToResearch = () => {
    const element = document.getElementById('research');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Adithya Sireesh
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            PhD Student in Quantum Computing · University of Edinburgh
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6 text-left">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Hi, I'm Adithya. I'm a 2<sup>nd</sup> year PhD student supervised by Dr. Joschka Roffe and Dr. Alexandru
            Cojocaru in quantum error correction at the{" "}
            <b>
              <a href="https://www.quantumsoftwarelab.com/" className="hover:text-accent transition-colors">
                Quantum Software Lab (QSL)
              </a>
            </b>
            , University of Edinburgh. My path to my PhD has been both long and windy, but in short, I was
            previously a research assistant at the QSL working on quantum algorithms. Prior to this, I was at
            Inveriant Inc a startup in Singapore where I did a bit of quantum algorithms research and fault tolerant
            quantum resource estimation for cryptographic attacks. Before quantum, I spent some time as a software
            developer at Amazon in Prime Video, London first as an intern and then as a full time employee.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            I'm currently exploring decoding, both in the context of quantum error correction and in how hard
            algorithmic problems can often be reduced to classical decoding tasks.
          </p>
        </div>
        
        <div className="pt-6">
          <Button 
            onClick={scrollToResearch}
            size="lg"
            className="group"
          >
            View Research
            <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
