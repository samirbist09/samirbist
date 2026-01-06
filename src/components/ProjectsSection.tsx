import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder, Star } from 'lucide-react';

const projects = [
  {
    title: 'Quizzer App',
    description: 'A dedicated web application for my university, designed to help students prepare for licensing exams by providing a platform to add and practice relevant questions.',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
    featured: true,
    github: '#',
    live: '#',
  },
  {
    title: 'Hotel Website',
    description: 'Fully responsive and modern website layouts designed for the hospitality sector, featuring booking systems and elegant UI.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    featured: true,
    github: '#',
    live: '#',
  },
  {
    title: 'Portfolio Websites',
    description: 'Clean and professional portfolio designs for individuals looking to showcase their work and skills online.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    featured: true,
    github: '#',
    live: '#',
  },
  {
    title: 'E-Commerce UI',
    description: 'A modern e-commerce interface with product listings, cart functionality, and responsive design.',
    tags: ['React', 'Redux', 'CSS'],
    featured: false,
    github: '#',
    live: '#',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subheading">Portfolio</p>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one has taught me 
            something new and helped me grow as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card group"
            >
              {/* Project header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Folder className="text-primary" size={24} />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live site"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <Star className="text-primary fill-primary" size={16} />
                  )}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project tags */}
              <div className="p-6 pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More projects note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary 
                       rounded-lg font-medium hover:bg-primary/10 transition-colors"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
