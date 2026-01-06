import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code, Heart, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-subheading">About Me</p>
            <h2 className="section-heading">
              Passionate About Building
              <span className="text-primary"> Digital Solutions</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a dedicated Computer Engineering student at the National Academy of Science 
              and Technology (NAST), Dhangadhi, Nepal, currently in my 7th semester. My journey 
              in tech started with a simple curiosity about how websites work, and it has evolved 
              into a deep passion for web development and software engineering.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I describe myself as a "capable newbie" — someone who's constantly learning, 
              experimenting, and building projects to sharpen my skills. Every line of code 
              I write brings me closer to becoming the developer I aspire to be.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Code className="text-primary" size={24} />
                <div>
                  <p className="text-foreground font-semibold">10+</p>
                  <p className="text-sm text-muted-foreground">Projects Built</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Heart className="text-primary" size={24} />
                <div>
                  <p className="text-foreground font-semibold">100%</p>
                  <p className="text-sm text-muted-foreground">Passion</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 card-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Education</h3>
              </div>

              <div className="space-y-6">
                {/* BE Degree */}
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full" />
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={14} className="text-primary" />
                    <span className="text-xs text-primary font-medium">Currently Pursuing</span>
                  </div>
                  <h4 className="text-foreground font-semibold mb-1">
                    BE in Computer Engineering
                  </h4>
                  <p className="text-muted-foreground text-sm mb-1">
                    National Academy of Science and Technology (NAST)
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Dhangadhi, Nepal • 7th Semester
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Expected Graduation: 2025/2026
                  </p>
                </div>

                {/* +2 */}
                <div className="relative pl-6 border-l-2 border-border">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-card border-2 border-primary rounded-full" />
                  <h4 className="text-foreground font-semibold mb-1">
                    +2 in Science
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Completed in 2022
                  </p>
                </div>
              </div>

              {/* Experience note */}
              <div className="mt-8 p-4 bg-secondary/50 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="text-primary font-medium">Currently building experience</span>{' '}
                  through academic projects and personal ventures, eager to take on new challenges 
                  and opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
