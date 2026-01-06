import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code2, Sparkles } from 'lucide-react';
import samirProfile from '@/assets/samir-profile.png';

const HeroSection = () => {
  const floatingIcons = [
    { icon: '⚛️', delay: 0, x: '10%', y: '20%' },
    { icon: '🚀', delay: 0.5, x: '85%', y: '15%' },
    { icon: '💻', delay: 1, x: '75%', y: '70%' },
    { icon: '✨', delay: 1.5, x: '15%', y: '75%' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Animated mesh gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px]"
      />
      
      {/* Floating tech icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            delay: item.delay,
            ease: "easeInOut"
          }}
          className="absolute text-3xl hidden lg:block"
          style={{ left: item.x, top: item.y }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm text-primary font-medium">Available for opportunities</span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground font-medium mb-4 flex items-center gap-2"
            >
              <Code2 size={18} className="text-primary" />
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="text-foreground">Samir</span>{' '}
              <span className="text-gradient">Bist</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="text-xl md:text-2xl text-muted-foreground">Computer Engineering Student</span>
              <span className="w-2 h-2 rounded-full bg-primary hidden md:block" />
              <span className="text-xl md:text-2xl text-primary font-semibold">Web Developer</span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground max-w-lg mb-8 text-lg leading-relaxed"
            >
              Building the web, one project at a time. Passionate about creating 
              <span className="text-foreground font-medium"> elegant solutions </span> 
              and continuously learning new technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold
                           overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={18} />
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-[hsl(180,100%,60%)] to-primary bg-[length:200%_100%] 
                                opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_infinite] transition-opacity" />
              </a>
              <a
                href="#contact"
                className="group px-8 py-4 border-2 border-primary/50 text-primary rounded-xl font-semibold
                           hover:bg-primary/10 hover:border-primary transition-all duration-300
                           flex items-center gap-2"
              >
                <Mail size={18} />
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6"
            >
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="h-px w-12 bg-border" />
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:samir@example.com', label: 'Email' },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.label !== 'Email' ? '_blank' : undefined}
                    rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center
                               text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5
                               transition-all duration-300 shadow-lg"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, hsl(var(--primary)/0.4), transparent, hsl(var(--primary)/0.4))',
                }}
              />
              
              {/* Decorative dots */}
              <div className="absolute -inset-8 rounded-full border border-dashed border-primary/20" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden 
                              border-4 border-primary/30 shadow-[0_0_60px_hsl(var(--primary)/0.3)]">
                <img
                  src={samirProfile}
                  alt="Samir Bist"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -right-6 top-8 bg-card/90 backdrop-blur-sm border border-border 
                           rounded-2xl px-5 py-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-xl">🎓</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">7th</p>
                    <p className="text-xs text-muted-foreground">Semester</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -left-6 bottom-8 bg-card/90 backdrop-blur-sm border border-border 
                           rounded-2xl px-5 py-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-xl">💼</span>
                  </div>
                  <div>
                    <p className="text-xs text-primary font-medium">Status</p>
                    <p className="text-sm font-semibold text-foreground">Open to Work</p>
                  </div>
                </div>
              </motion.div>

              {/* Tech stack mini badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-sm 
                           border border-border rounded-full px-6 py-2 shadow-xl"
              >
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Tech:</span>
                  <span className="text-lg">⚛️</span>
                  <span className="text-lg">🟨</span>
                  <span className="text-lg">🎨</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="group flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm mb-2 group-hover:text-primary transition-colors">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2"
            >
              <motion.div className="w-1.5 h-1.5 rounded-full bg-current" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
