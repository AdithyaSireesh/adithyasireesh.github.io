import matter from 'gray-matter';
import { Buffer } from 'buffer';

// Make Buffer available globally for gray-matter
if (typeof window !== 'undefined') {
  (window as any).Buffer = Buffer;
}

// Use Vite's glob import to load all .md files from /content/updates
const updateFiles = import.meta.glob('/content/updates/*.md', { as: 'raw', eager: true });

export interface Update {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  link?: string;
  content: string;
}

export const loadUpdates = (): Update[] => {
  const updates: Update[] = [];

  Object.entries(updateFiles).forEach(([filepath, content]) => {
    const { data, content: markdown } = matter(content as string);
    const slug = filepath.replace('/content/updates/', '').replace('.md', '');

    updates.push({
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      summary: data.summary,
      link: data.link,
      content: markdown,
    });
  });

  return updates.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Group updates by year for the main updates page
export const groupUpdatesByYear = (updates: Update[]): Record<number, Update[]> => {
  const grouped: Record<number, Update[]> = {};
  
  updates.forEach(update => {
    const year = new Date(update.date).getFullYear();
    if (!grouped[year]) {
      grouped[year] = [];
    }
    grouped[year].push(update);
  });
  
  return grouped;
};
