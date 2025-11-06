import { useMemo } from "react";
import { Link } from "react-router-dom";
import { loadUpdates } from "@/utils/updatesLoader";
import { ExternalLink } from "lucide-react";

const UpdatesPreview = () => {
  const allUpdates = useMemo(() => loadUpdates(), []);
  
  // Show 5 most recent updates
  const recentUpdates = allUpdates.slice(0, 5);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  return (
    <section id="updates-preview" className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Updates</h2>

      <div className="space-y-1.5 mb-4">
        {recentUpdates.map((update) => (
          <div key={update.slug} className="flex gap-3 text-sm items-baseline">
            <span className="text-muted-foreground text-xs whitespace-nowrap">
              {formatDate(update.date)}
            </span>
            <div className="flex items-baseline gap-2 flex-1">
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
                  className="text-foreground hover:text-accent transition-colors flex items-center gap-1"
                >
                  {update.title}
                  <ExternalLink className="w-3 h-3" />
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

      <Link 
        to="/updates" 
        className="text-accent hover:underline font-medium text-sm"
      >
        → More updates
      </Link>
    </section>
  );
};

export default UpdatesPreview;
