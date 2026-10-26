import type { BlogPost } from '../data/blogPosts';

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${post.date}T00:00:00Z`));

  return (
    <a className="blog-post-card" href={`/blog/${post.slug}`}>
      <article>
        <div className="blog-post-card__media">
          <img
            src={post.image}
            alt={post.imageAlt}
            width="640"
            height="480"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </div>
        <div className="blog-post-card__body">
          <p className="blog-post-card__meta">
            <time dateTime={post.date}>{formattedDate}</time>
            <span aria-hidden="true">|</span>
            <span>{post.readTime}</span>
          </p>
          <h2 className="blog-post-card__title">{post.title}</h2>
          <span className="blog-post-card__tag">{post.tag}</span>
        </div>
      </article>
    </a>
  );
}
