import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Smartphone, Brain, Sparkles, ArrowUpRight } from 'lucide-react';

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: 'AI Vision Mobile App',
      category: 'Computer Vision',
      description: 'Intelligent mobile application leveraging real-time object detection and image recognition to enhance user experiences.',
      tags: ['React Native', 'TensorFlow', 'AI', 'Mobile'],
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      featured: true,
    },
    {
      title: 'Smart Productivity Suite',
      category: 'Mobile App',
      description: 'All-in-one productivity platform designed for mobile-first users with AI-powered task management and insights.',
      tags: ['Flutter', 'Firebase', 'AI', 'Cloud'],
      icon: Smartphone,
      gradient: 'from-pink-500 to-purple-500',
      featured: true,
    },
    {
      title: 'EduTech Platform',
      category: 'Startup Project',
      description: 'Educational technology platform connecting students with personalized learning experiences through adaptive AI.',
      tags: ['Mobile', 'EdTech', 'ML', 'Analytics'],
      icon: Sparkles,
      gradient: 'from-blue-500 to-purple-500',
      featured: false,
    },
  ];

  return (
    <section id="projects" ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-wider text-purple-400 mb-4 block">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl mb-6">
            Projects That Matter
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building intelligent, beautiful mobile experiences that solve real problems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Floating icon */}
              <div className="relative z-10 mb-6">
                <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon size={28} className="text-white" />
                </div>
              </div>

              <div className="relative z-10">
                <div className="text-sm text-purple-400 mb-2">{project.category}</div>
                <h3 className="text-2xl md:text-3xl mb-4 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <div className="flex items-center gap-2 text-sm text-purple-400 group-hover:gap-4 transition-all">
                  <span>View Project</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects */}
        <div className="grid grid-cols-1 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <project.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl">{project.title}</h4>
                      <p className="text-sm text-purple-400">{project.category}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
