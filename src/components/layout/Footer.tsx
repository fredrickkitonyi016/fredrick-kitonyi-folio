import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MessageSquare, Github, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:frimattechnologies016@gmail.com',
      label: 'Email',
    },
    {
      icon: Phone,
      href: 'tel:+254112277289',
      label: 'Phone',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/fredrickkitonyikiio',
      label: 'LinkedIn',
    },
    {
      icon: MessageSquare,
      href: 'https://wa.me/254112277289',
      label: 'WhatsApp',
    },
    {
      icon: Github,
      href: '#',
      label: 'GitHub',
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary/90 border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-hover opacity-50"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-3">
                Fredrick Kiio
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                ICT Student passionate about innovative technology solutions. 
                Specializing in web development, IT support, and cybersecurity.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Nairobi, Kenya</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>IT Support & Maintenance</li>
              <li>Cybersecurity Solutions</li>
              <li>Hardware Troubleshooting</li>
              <li>Network Setup & Management</li>
              <li>Database Management</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-6">Get in Touch</h4>
            <div className="space-y-4 mb-6">
              <a
                href="mailto:frimattechnologies016@gmail.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>frimattechnologies016@gmail.com</span>
              </a>
              <a
                href="tel:+254112277289"
                className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+254 112 277 289</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-sm text-muted-foreground">
            <p>© {currentYear} Fredrick Kitonyi Kiio – All Rights Reserved.</p>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-accent fill-current" />
            </motion.div>
            <span>in Nairobi, Kenya</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;