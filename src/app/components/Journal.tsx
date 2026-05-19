import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowRight, Clock } from 'lucide-react';

export function Journal() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const posts = [
    {
      title: 'Building with Purpose: Why Every Line of Code Matters',
      excerpt: 'Reflections on creating technology that serves humanity, not just innovation for innovation\'s sake.',
      date: 'May 15, 2026',
      readTime: '5 min read',
      category: 'Thoughts',
    },
    {
      title: 'Lessons from the Mountain: What Hiking Taught Me About Startups',
      excerpt: 'The parallels between reaching a summit and building a successful company are more profound than you might think.',
      date: 'May 8, 2026',
      readTime: '7 min read',
      category: 'Life & Growth',
    },
    {
      title: 'The Future of Mobile AI: My Vision for 2027',
      excerpt: 'Where mobile technology and artificial intelligence are heading, and how we can build more human-centered experiences.',
      date: 'April 28, 2026',
      readTime: '6 min read',
      category: 'Tech',
    },
  ];

  return (
    <section id="journal" ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-wider text-purple-400 mb-4 block">
            Journal
          </span>
          <h2 className="text-4xl md:text-5xl mb-6">
            Thoughts & Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of musings on technology, life, and everything in between
          </p>
        </motion.div>

        {/* Posts Grid */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Category & Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Title & Excerpt */}
                  <h3 className="text-2xl md:text-3xl mb-4 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-sm text-purple-400">
                    <span>Read full article</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/5 transition-all group"
          >
            <span>View All Articles</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
