import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Monitor, Cpu } from 'lucide-react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setAnimateProgress(true), 200);
    }
  }, [isInView]);

  const softwareSkills = [
    { name: 'HTML, CSS, JavaScript', level: 90 },
    { name: 'React & Front-End Frameworks', level: 85 },
    { name: 'Database Management (MySQL, MongoDB)', level: 80 },
    { name: 'UI/UX Design (Figma, Adobe XD)', level: 75 },
    { name: 'Graphic Design (Adobe Photoshop, Illustrator)', level: 75 },
    { name: 'Operating Systems (Windows, macOS, Linux)', level: 85 },
    { name: 'Software Installation & Configuration', level: 90 },
    { name: 'Office Productivity Suites', level: 95 },
  ];

  const hardwareSkills = [
    { name: 'PC Assembly & Disassembly', level: 95 },
    { name: 'Computer Hardware Troubleshooting', level: 90 },
    { name: 'Peripheral Device Setup', level: 85 },
    { name: 'Network Device Installation', level: 85 },
    { name: 'Cabling & Network Infrastructure Setup', level: 80 },
    { name: 'Preventive Maintenance', level: 90 },
    { name: 'Hardware Upgrades & Replacement', level: 85 },
    { name: 'Basic Electronics & Circuitry', level: 70 },
  ];

  const SkillBar = ({ skill, index, delay = 0 }: { skill: { name: string; level: number }; index: number; delay?: number }) => (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: delay + index * 0.1 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-foreground font-medium">{skill.name}</span>
        <span className="text-accent font-semibold">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-progress"
          initial={{ width: 0 }}
          animate={animateProgress ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: delay + index * 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-background relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in both software development and hardware technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Software Skills */}
          <motion.div
            className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                <Monitor className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Software Skills</h3>
            </div>
            
            <div className="space-y-4">
              {softwareSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} delay={0.5} />
              ))}
            </div>
          </motion.div>

          {/* Hardware Skills */}
          <motion.div
            className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                <Cpu className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Hardware & IT Skills</h3>
            </div>
            
            <div className="space-y-4">
              {hardwareSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} delay={0.8} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating skill badges */}
        <motion.div
          className="flex justify-center mt-12 space-x-4 flex-wrap gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {['React', 'JavaScript', 'MySQL', 'Linux', 'Cybersecurity', 'Network Setup'].map((tech, index) => (
            <motion.div
              key={tech}
              className="bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-accent font-medium"
              whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--accent) / 0.2)' }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;