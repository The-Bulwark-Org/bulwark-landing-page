import { useMemo, useState } from 'react';
import { blogPosts, type BlogCategory } from '../data/blogPosts';
import { FaqSection } from './FaqSection';
import { Header } from './Header';
import { JourneySection } from './JourneySection';
import { SiteFooter } from './SiteFooter';
import { BlogPostCard } from './BlogPostCard';

type BlogFilter = 'All' | 'Latest' | BlogCategory;

const filters: BlogFilter[] = ['All', 'Latest', 'Habits', 'Stories'];

interface BlogPageProps {
  onJoinWaitlist: () => void;
}

export function BlogPage({ onJoinWaitlist }: BlogPageProps) {
  const [activeFilter, setActiveFilter] = useState<BlogFilter>('All');

  const visiblePosts = useMemo(() => {
    if (activeFilter === 'Latest') {
      return [...blogPosts].sort((first, second) => second.date.localeCompare(first.date));
    }

    if (activeFilter === 'All') return blogPosts;
    return blogPosts.filter((post) => post.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="page-dark blog-page" id="hero">
      <Header onJoinWaitlist={onJoinWaitlist} />

      <main className="blog-page__main">
        <section className="blog-listing" id="blog" aria-labelledby="blog-heading">
          <div className="blog-listing__top">
            <h1 className="blog-listing__title" id="blog-heading">
              Blog posts
            </h1>

            <nav className="blog-listing__filters" aria-label="Filter blog posts">
              {filters.map((filter) => (
                <button
                  className={`blog-listing__filter${activeFilter === filter ? ' is-active' : ''}`}
                  type="button"
                  key={filter}
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </nav>
          </div>

          <div className="blog-listing__grid" aria-live="polite">
            {visiblePosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </main>

      <JourneySection />
      <FaqSection onJoinWaitlist={onJoinWaitlist} />
      <SiteFooter onJoinWaitlist={onJoinWaitlist} />
    </div>
  );
}
