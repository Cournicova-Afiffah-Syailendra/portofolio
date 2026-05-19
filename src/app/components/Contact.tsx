import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Mail, Linkedin, Github, Instagram, Twitter, Send } from 'lucide-react';

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '#',
      color: 'hover:text-blue-400',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: '#',
      color: 'hover:text-purple-400',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: '#',
      color: 'hover:text-pink-400',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: '#',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:hello@cournicova.com',
      color: 'hover:text-purple-400',
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-wider text-purple-400 mb-4 block">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Got an Idea? Let's Talk
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether it's a project collaboration, speaking opportunity, or just a chat about tech and life—
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden group">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-500/10 opacity-50" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-8 shadow-lg shadow-purple-500/30">
                <Send size={32} className="text-white" />
              </div>

              <h3 className="text-3xl md:text-4xl mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Drop me a message and let's turn ideas into reality
              </p>

              <a
                href="mailto:hello@cournicova.com"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all group"
              >
                <Mail size={20} />
                <span>hello@cournicova.com</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h4 className="text-center text-sm text-muted-foreground mb-8">
            Or connect with me on
          </h4>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 text-muted-foreground ${link.color} transition-all group`}
              >
                <link.icon size={20} />
                <span className="text-sm">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-green-400">
              Currently available for select projects and collaborations
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
