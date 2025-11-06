import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { loadUpdates, groupUpdatesByYear } from '@/utils/updatesLoader';
import { ExternalLink } from 'lucide-react';

const Updates = () => {
  const allUpdates = useMemo(() => loadUpdates(), []);
  const groupedByYear = useMemo(() => groupUpdatesByYear(allUpdates), [allUpdates]);
  const years = Object.keys(groupedByYear).map(Number).sort((a, b) => b - a);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">Updates</h1>
            <p className="text-sm text-muted-foreground">
              Short notes, papers, and research updates.
            </p>
          </div>

          {/* Updates grouped by year */}
          <div className="space-y-10">
            {years.map(year => (
              <div key={year} className="space-y-3">
                <h2 className="text-lg font-bold text-muted-foreground border-b border-border pb-1">
                  {year}
                </h2>
                <div className="space-y-2">
                  {groupedByYear[year].map(update => (
                    <div key={update.slug} className="flex gap-4 text-sm items-baseline hover:bg-muted/30 -mx-2 px-2 py-1.5 rounded transition-colors">
                      <span className="text-muted-foreground text-xs whitespace-nowrap w-16">
                        {formatDate(update.date)}
                      </span>
                      <div className="flex-1 flex items-baseline gap-2">
                        {update.tags?.[0] && (
                          <span className="text-muted-foreground text-xs whitespace-nowrap">
                            [{update.tags[0]}]
                          </span>
                        )}
                        {update.link ? (
                          <a
                            href={update.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-accent transition-colors flex items-center gap-1.5"
                          >
                            {update.title}
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <Link
                            to={`/updates/${update.slug}`}
                            className="text-foreground hover:text-accent transition-colors"
                          >
                            {update.title}
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {allUpdates.length === 0 && (
            <div className="text-center py-12 space-y-3">
              <p className="text-muted-foreground">No updates yet.</p>
              <p className="text-sm text-muted-foreground italic">
                Coming soon: papers, notes, and research updates.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Updates;
