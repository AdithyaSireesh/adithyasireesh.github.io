import Navbar from "@/components/Navbar";
import Education from "@/components/sections/Education";
import WorkExperience from "@/components/sections/WorkExperience";

const Experience = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="relative z-10">
        <section className="py-24 px-6 bg-muted/30">
          <Education />
        </section>
        
        <section className="py-24 px-6">
          <WorkExperience />
        </section>
      </main>
    </div>
  );
};

export default Experience;
