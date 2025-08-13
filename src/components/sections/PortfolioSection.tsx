import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Network Security Audit',
      description: 'Comprehensive security assessment and vulnerability testing',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
      technologies: ['Nmap', 'Wireshark', 'Metasploit', 'Python'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Corporate IT Infrastructure',
      description: 'Complete IT setup and maintenance for a 50-employee company',
      category: 'IT Support',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      technologies: ['Windows Server', 'Active Directory', 'Network Setup'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'React Task Management App',
      description: 'Modern task management application with real-time updates',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Database Security Implementation',
      description: 'Secure database design with encryption and access controls',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
      technologies: ['MySQL', 'Encryption', 'Access Control', 'Backup Systems'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Hardware Diagnostic Tool',
      description: 'Custom diagnostic software for hardware troubleshooting',
      category: 'IT Support',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
      technologies: ['Python', 'Hardware APIs', 'System Monitoring'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const categories = ['All', 'Web Development', 'IT Support', 'Cybersecurity'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-card/20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent projects and technical achievements
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-full p-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-primary font-semibold'
                    : 'text-muted-foreground hover:text-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="portfolio-card bg-card border border-border group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              layout
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="portfolio-overlay">
                <div className="mb-2">
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-background/20 text-foreground px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-accent hover:text-secondary transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-accent hover:text-secondary transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;