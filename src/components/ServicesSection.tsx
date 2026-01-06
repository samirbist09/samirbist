import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, 
  Code, 
  Layout, 
  Smartphone, 
  RefreshCw,
  Palette
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Custom Website Development',
    description: 'Building tailored websites from scratch to match your unique vision and requirements.',
  },
  {
    icon: Code,
    title: 'Front-End Development',
    description: 'Creating responsive and interactive user interfaces using modern frameworks like React.',
  },
  {
    icon: Layout,
    title: 'Portfolio Websites',
    description: 'Designing professional portfolio sites that showcase your work and attract opportunities.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Ensuring your website looks and works perfectly on all devices and screen sizes.',
  },
  {
    icon: Palette,
    title: 'UI/UX Implementation',
    description: 'Transforming design mockups into fully functional, pixel-perfect web interfaces.',
  },
  {
    icon: RefreshCw,
    title: 'Website Maintenance',
    description: 'Keeping your website updated, secure, and running smoothly with regular maintenance.',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 lg:py-32 bg-card/30 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subheading">Services</p>
          <h2 className="section-heading">What I Can Build For You</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Looking for affordable, quality web development? As a passionate beginner, 
            I offer competitive rates while delivering professional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5
                            group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={28} />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Have a project in mind? Let's discuss how I can help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground 
                       rounded-lg font-semibold hover:bg-primary/90 transition-colors btn-primary-glow"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
