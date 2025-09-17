import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, Info, Wrench, Zap, Palette, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home, isLink: false },
    { name: 'About', href: '#about', icon: Info, isLink: false },
    { name: 'Services', href: '#services', icon: Wrench, isLink: false },
    { name: 'Skills', href: '#skills', icon: Zap, isLink: false },
    { name: 'Portfolio', href: '#portfolio', icon: Palette, isLink: false },
    { name: 'Contact', href: '#contact', icon: Phone, isLink: false },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavigation = (item: { name: string; href: string; icon: any; isLink: boolean }) => {
    if (item.isLink) {
      setIsMobileMenuOpen(false);
    } else {
      if (location.pathname === '/') {
        scrollToSection(item.href);
      } else {
        window.location.href = `/${item.href}`;
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'navbar-solid text-white' 
          : 'navbar-transparent text-foreground'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/">Fredrick Kiio</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                item.isLink ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="nav-link"
                  >
                    <motion.div
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <IconComponent size={18} />
                      {item.name}
                    </motion.div>
                  </Link>
                ) : (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className="nav-link"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <IconComponent size={18} />
                    {item.name}
                  </motion.button>
                )
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-white hover:text-accent' : 'text-foreground hover:text-accent'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-card/95 backdrop-blur-md rounded-lg p-4 shadow-green-glow"
          >
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                item.isLink ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 w-full text-left py-3 px-2 text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300"
                  >
                    <motion.div
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <IconComponent size={18} />
                      {item.name}
                    </motion.div>
                  </Link>
                ) : (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className="flex items-center gap-3 w-full text-left py-3 px-2 text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <IconComponent size={18} />
                    {item.name}
                  </motion.button>
                )
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;