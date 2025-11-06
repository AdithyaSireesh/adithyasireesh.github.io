import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/AdithyaSireesh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/s1616497/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a 
            href="https://scholar.google.com/citations?user=lBNBMUMAAAAJ&hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent transition-colors"
            aria-label="Google Scholar"
          >
            <span className="text-sm font-medium">Google Scholar</span>
          </a>
          <a 
            href="mailto:adithya.sireesh@gmail.com"
            className="flex items-center gap-2 hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">adithya.sireesh@gmail.com</span>
          </a>
        </div>

        <div className="pt-8 text-sm text-muted-foreground">
          © 2025 Adithya Sireesh · Built for clarity and coherence :)
        </div>
      </div>
    </footer>
  );
};

export default Contact;
