type BlogPost = {
  image: string;
  date: string;
  readTime: string;
  title: string;
  href: string;
};

const posts: BlogPost[] = [
  {
    image: '/assets/womanbrain.svg',
    date: 'November 2, 2026',
    readTime: '6 min read',
    title: "A Slip Isn't Day One: What to Do in the 24 Hours After a Relapse",
    href: '/blog/slip-isnt-day-one-24-hours-after-relapse',
  },
];

export function BlogsSection() {
  return (
    <section className="blogs" id="blog" aria-labelledby="blogs-heading">
      <h2 className="blogs__title" id="blogs-heading">
        Check out blogs from Bulwark
      </h2>

      <a className="blogs__link" href="/blog">
        Go to blog
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      </a>

      <div className="blogs__grid">
        {posts.map((post) => (
          <a className="blog-card" href={post.href} key={post.title}>
            <div className="blog-card__media">
              <img src={post.image} alt="" aria-hidden="true" draggable={false} />
            </div>

            <div className="blog-card__body">
              <p className="blog-card__meta">
                <span>{post.date}</span>
                <span className="blog-card__sep" aria-hidden="true">
                  |
                </span>
                <span>{post.readTime}</span>
              </p>
              <h3 className="blog-card__title">{post.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
