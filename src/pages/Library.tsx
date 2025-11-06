import Navbar from '@/components/Navbar';
import { Book, Circle } from 'lucide-react';

const Library = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-3xl mx-auto px-6 py-24 space-y-16">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Library</h1>
          <p className="text-xl text-muted-foreground">
            Books, thoughts, and other interests beyond quantum computing.
          </p>
        </div>

        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Book className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-bold">Currently Reading</h2>
          </div>
          
          <div className="callout-block space-y-4">
            <p className="text-lg">
              I'm currently obsessed with Fyodor Dostoevsky.
            </p>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Reading:</span> The Brothers Karamazov
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Finished:</span> Crime and Punishment
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold">Book Notes & Appreciations</h2>
          
          <div className="space-y-6">
            <article className="space-y-4 pb-8 border-b border-border">
              <h3 className="text-xl font-semibold">On Russian Literature</h3>
              <p className="text-muted-foreground leading-relaxed">
                I've developed a newfound appreciation for classics, especially Russian literature. 
                There's something profound about how Dostoevsky explores human nature, morality, 
                and the human condition. The depth of psychological insight in his works is unmatched.
              </p>
            </article>

            <article className="space-y-4 pb-8 border-b border-border">
              <h3 className="text-xl font-semibold">Crime and Punishment</h3>
              <p className="text-muted-foreground leading-relaxed">
                A masterpiece that delves into the psychology of guilt and redemption. 
                Raskolnikov's internal struggle and moral awakening remain relevant today. 
                The way Dostoevsky portrays the burden of conscience is both haunting and beautiful.
              </p>
            </article>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold">Other Interests</h2>
          
          <div className="grid gap-4">
            {['Chess', 'Tennis', 'Yoga'].map((interest, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg border border-border">
                <Circle className="w-2 h-2 fill-accent text-accent" />
                <span className="text-lg">{interest}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Library;
