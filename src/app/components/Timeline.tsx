import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { GraduationCap, Briefcase, Award, Lightbulb } from 'lucide-react';

export function Timeline() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const milestones = [
    {
      year: '2026',
      icon: Lightbulb,
      title: 'AI Innovation',
      description: 'Pioneering computer vision solutions in mobile applications',
      color: 'from-purple-500 to-pink-500',
    },
    {
      year: '2025',
      icon: Briefcase,
      title: 'Startup Journey',
      description: 'Founded tech startup focused on intelligent mobile experiences',
      color: 'from-pink-500 to-purple-500',
    },
    {
      year: '2024',
      icon: Award,
      title: 'Competition Success',
      description: 'Won multiple national tech competitions and hackathons',
      color: 'from-purple-500 to-blue-500',
    },
    {
      year: '2023',
      icon: GraduationCap,
      title: 'Tech Education',
      description: 'Started sharing knowledge through workshops and speaking events',
      color: 'from-blue-500 to-purple-500',
    },
  ];

  return (
    <section id="journey" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent hidden md:block" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-wider text-purple-400 mb-4 block">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl mb-6">
            The Road So Far
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every milestone tells a story of growth, learning, and pushing boundaries
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="inline-block">
                  <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />

                    <div className="relative z-10">
                      <div className="text-sm text-purple-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl md:text-2xl mb-3">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Icon */}
              <div className="relative flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg shadow-purple-500/20`}
                >
                  <milestone.icon size={28} className="text-white" />
                </motion.div>

                {/* Connecting dot */}
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 hidden md:block" />
              </div>

              {/* Spacer for layout balance */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
