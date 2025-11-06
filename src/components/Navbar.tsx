import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Moon, Sun, Github, Linkedin, Mail, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-bold tracking-tight hover:text-accent transition-colors">
              AS
            </Link>

            <div className="hidden md:flex items-center gap-6 text-sm">
              <button onClick={() => scrollToSection("research")} className="hover:text-accent transition-colors">
                Research
              </button>
              <Link to="/experience" className="hover:text-accent transition-colors">
                Experience
              </Link>
              <button onClick={() => scrollToSection("achievements")} className="hover:text-accent transition-colors">
                Achievements
              </button>
              <Link to="/updates" className="hover:text-accent transition-colors">
                Updates
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/AdithyaSireesh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/s1616497/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=YOURID"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors text-sm font-medium"
              aria-label="Google Scholar"
            >
              GS
            </a>
            <a
              href="mailto:adithya.sireesh@gmail.com"
              className="hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            <Button variant="outline" size="sm" asChild className="hidden sm:flex">
              <a href="/assets/AdithyaSireesh_Resume.pdf" download>
                <FileDown className="w-4 h-4 mr-2" />
                CV
              </a>
            </Button>

            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
