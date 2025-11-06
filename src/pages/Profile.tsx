import Navbar from "@/components/Navbar";
import Education from "@/components/sections/Education";
import WorkExperience from "@/components/sections/WorkExperience";
import Contact from "@/components/sections/Contact";

const Profile = () => {
  return (
    <div className="min-h-screen relative">
      {/* <Navbar /> */}

      <main className="relative z-10">
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold">Profile</h1>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hi, I'm Adithya. I'm a 2<sup>nd</sup> year PhD student supervised by Dr. Joschka Roffe and Dr. Alexandru
                Cojocaru in quantum error correction at the{" "}
                <b>
                  <a href="https://www.quantumsoftwarelab.com/">Quantum Software Lab (QSL)</a>
                </b>
                , University of Edinburgh. My path to my PhD has been both long and windy, but in short, I was
                previously a research assistant at the QSL working on quantum algorithms. Prior to this, I was at
                Inveriant Inc a startup in Singapore where I did a bit of quantum algorithms research and fault tolerant
                quantum resource estimation for cryptographic attacks. Before quantum, i spent some time as a software
                developer at Amazon in Prime Video, London first as an intern and then as a full time employee.
              </p>
              <p>
                I'm currently exploring decoding, both in the context of quantum error correction and in how hard
                algorithmic problems can often be reduced to classical decoding tasks.
              </p>
              <p></p>
            </div>
          </div>
        </section>

        <Education />
        <WorkExperience />
      </main>

      {/* <Contact /> */}
    </div>
  );
};

export default Profile;
