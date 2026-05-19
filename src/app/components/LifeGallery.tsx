import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Coffee, Mountain, BookOpen, Camera } from 'lucide-react';

export function LifeGallery() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const moments = [
    {
      title: 'Mountain Adventures',
      description: 'Finding clarity and inspiration at sunrise',
      icon: Mountain,
      color: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Cafe Culture',
      description: 'Best ideas happen over good coffee',
      icon: Coffee,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Creative Moments',
      description: 'Capturing life through the lens',
      icon: Camera,
      color: 'from-pink-500 to-purple-500',
    },
    {
      title: 'Self Growth',
      description: 'Always learning, always evolving',
      icon: BookOpen,
      color: 'from-purple-500 to-blue-500',
    },
  ];

  return (
    <section id="life" ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-wider text-purple-400 mb-4 block">
            Life Outside Tech
          </span>
          <h2 className="text-4xl md:text-5xl mb-6">
            Beyond the Code
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The moments that fuel creativity, inspire innovation, and remind me why I build
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${moment.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

              {/* Glass overlay */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-500" />

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${moment.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <moment.icon size={36} className="text-white" />
                </motion.div>

                <h3 className="text-2xl md:text-3xl mb-3">{moment.title}</h3>
                <p className="text-muted-foreground">{moment.description}</p>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${moment.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-3xl" />
            <div className="relative z-10">
              <p className="text-xl md:text-2xl italic text-muted-foreground mb-4">
                "The best code comes from a life well-lived. Every mountain climbed, every conversation
                shared, every moment of wonder—they all flow back into what I create."
              </p>
              <div className="text-sm text-purple-400">— Cournicova</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
