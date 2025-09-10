import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import ResumePreviewModal from '../ui/resume-preview-modal';
const profilePhoto = '/lovable-uploads/b3f63b1f-5ffb-44a5-bd1d-7fe39fe12f5f.png';

const HeroSection = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResumePreview = () => {
    setIsResumeModalOpen(true);
  };

  return (
    <section id="home" className="min-h-screen relative bg-background flex items-center">

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Fredrick
              </span>
              <br />
              <span className="text-foreground">Kitonyi Kiio</span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="font-medium">Software Engineering Student | Full Stack Developer | Tech Innovator</div>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate Software Engineering student at Zetech University with expertise in full-stack development, 
              software architecture, and emerging technologies. Building innovative solutions for real-world challenges.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.button
                onClick={openResumePreview}
                className="btn-hero inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                className="btn-outline-hero inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Contact Me
              </motion.button>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-full overflow-hidden border-4 border-accent shadow-glow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profilePhoto}
                  alt="Fredrick Kitonyi Kiio - Professional Portrait"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-accent cursor-pointer"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>

      {/* Resume Preview Modal */}
      <ResumePreviewModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;