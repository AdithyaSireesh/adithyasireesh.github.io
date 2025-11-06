import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Research from "@/components/sections/Research";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import UpdatesPreview from "@/components/sections/UpdatesPreview";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />

      <main className="relative z-10">
        <Hero />
        
        {/* Updates section - compact, right after hero */}
        <section className="py-6 px-6">
          <UpdatesPreview />
        </section>
        
        <section className="py-6 px-6 bg-muted/30">
          <Research />
        </section>
        <section className="py-6 px-6">
          <Projects />
        </section>
        <section className="py-6 px-6 bg-muted/30">
          <Achievements />
        </section>
      </main>

      <Contact />
    </div>
  );
};

export default Index;
