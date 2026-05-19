import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Heart, Code, Rocket, Mountain } from 'lucide-react';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const values = [
    {
      icon: Code,
      title: 'Tech Builder',
      description: 'Creating intelligent mobile apps with AI and computer vision',
    },
    {
      icon: Rocket,
      title: 'Entrepreneur',
      description: 'Building startups and turning ideas into reality',
    },
    {
      icon: Heart,
      title: 'Storyteller',
      description: 'Sharing knowledge through speaking and education',
    },
    {
      icon: Mountain,
      title: 'Explorer',
      description: 'Finding inspiration in mountains, cafes, and life moments',
    },
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-wider text-purple-400 mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl mb-6">
            More Than Just Code
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I believe technology should feel human. Every app I build, every line of code I write,
            is guided by the belief that the best digital experiences are the ones that understand us.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-500"
          >
            {/* Glassmorphic glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My path in tech began with a simple fascination: how can we create digital experiences
                  that truly understand and serve people? This question led me into the world of mobile
                  app development, where every swipe, tap, and interaction matters.
                </p>
                <p>
                  As a young tech entrepreneur, I've learned to balance the precision of code with the
                  creativity of design. I specialize in AI-powered mobile applications and computer vision,
                  building tools that don't just work—they anticipate, adapt, and inspire.
                </p>
                <p>
                  Beyond the screen, you'll find me chasing sunrises on mountain peaks, brainstorming in
                  quiet cafes, or sharing what I've learned on stage. Because the best tech isn't built
                  in isolation—it's shaped by the richness of life itself.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon size={24} className="text-purple-400" />
                </div>
                <h4 className="text-lg mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
