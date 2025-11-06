import { Award, Trophy } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Semifinalist, Google Quantum XPRIZE 2025",
      description: "Competed as part of a team tackling molecular dynamics for graphene.",
      link: "https://informatics.ed.ac.uk/news/latest-news/quantum-software-lab-team-reaches-semi-finals-of-5m-global-quantum-competition",
    },
    {
      icon: Award,
      title: "3rd Place, NQCC Quantum Hackathon 2022",
      description: "We were given a usecase by BT to solve the problem of optimal placement of celltowers.",
      link: "https://www.nqcc.ac.uk/uk-quantum-hackathon-july2022/",
    },
    {
      icon: Trophy,
      title: "1st Place, Ericcsson Challenge, Hack Junction (2019)",
      description:
        "Largest hackathon in Europe. Our team had to build agents to compete in a game for optimizing a city-wide transportation network.",
      link: "https://www.nqcc.ac.uk/uk-quantum-hackathon-july2022/",
    },
  ];

  return (
    <section id="achievements" className="py-8 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Competitions</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-all hover:shadow-lg group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <achievement.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold leading-tight">
                    {achievement.link ? (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                      >
                        {achievement.title}
                      </a>
                    ) : (
                      achievement.title
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
