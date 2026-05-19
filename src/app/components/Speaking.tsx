import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Mic, Users, Calendar } from 'lucide-react';

export function Speaking() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const events = [
    {
      title: 'Women in Tech Summit 2026',
      role: 'Keynote Speaker',
      topic: 'Building the Future: AI in Mobile Development',
      date: 'March 2026',
      audience: '500+ attendees',
      location: 'Jakarta, Indonesia',
    },
    {
      title: 'Mobile Dev Conference',
      role: 'Panel Speaker',
      topic: 'Young Entrepreneurs in Tech',
      date: 'January 2026',
      audience: '300+ developers',
      location: 'Singapore',
    },
    {
      title: 'University Tech Workshop',
      role: 'Workshop Leader',
      topic: 'Getting Started with AI & Computer Vision',
      date: 'December 2025',
      audience: '100+ students',
      location: 'Bandung, Indonesia',
    },
  ];

  return (
    <section id="speaking" ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-wider text-purple-400 mb-4 block">
            Speaking & Education
          </span>
          <h2 className="text-4xl md:text-5xl mb-6">
            Sharing Knowledge
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Inspiring the next generation of tech builders through talks, workshops, and mentorship
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { icon: Mic, label: 'Speaking Events', value: '15+' },
            { icon: Users, label: 'People Reached', value: '2000+' },
            { icon: Calendar, label: 'Workshops Led', value: '20+' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center group hover:border-white/20 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <stat.icon size={24} className="text-purple-400" />
                </div>
                <div className="text-3xl md:text-4xl font-light mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Events List */}
        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Mic size={20} className="text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl mb-1">{event.title}</h3>
                      <p className="text-purple-400 text-sm mb-2">{event.role}</p>
                      <p className="text-muted-foreground mb-3">{event.topic}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span>📅 {event.date}</span>
                        <span>👥 {event.audience}</span>
                        <span>📍 {event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
