import { useMemo, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Navbar from '@/components/Navbar';
import { loadUpdates } from '@/utils/updatesLoader';
import { ArrowLeft } from 'lucide-react';

const UpdatePost = () => {
  const { slug } = useParams<{ slug: string }>();
  const allUpdates = useMemo(() => loadUpdates(), []);
  const update = allUpdates.find(u => u.slug === slug);

  useEffect(() => {
    // If update has external link, redirect to it
    if (update?.link) {
      window.location.href = update.link;
    }
  }, [update]);

  if (!update) {
    return <Navigate to="/updates" replace />;
  }

  // If redirecting to external link, show loading state
  if (update.link) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Redirecting...</p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-3xl mx-auto px-6 py-16">
        <article className="space-y-6">
          <Link
            to="/updates"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Updates
          </Link>

          <header className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold">{update.title}</h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <time>{formatDate(update.date)}</time>
              {update.tags?.[0] && (
                <>
                  <span>·</span>
                  <span className="text-xs">[{update.tags[0]}]</span>
                </>
              )}
            </div>
          </header>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <ReactMarkdown>{update.content}</ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  );
};

export default UpdatePost;
