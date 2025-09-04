import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Mail, Phone, Linkedin } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const quickInfo = [
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'Zetech University (Software Engineering) | ICS Technical College (ICT Diploma)',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'frimattechnologies016@gmail.com',
      href: 'mailto:frimattechnologies016@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 112 277 289',
      href: 'tel:+254112277289',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/fredrickkitonyikiio',
      href: 'https://linkedin.com/in/fredrickkitonyikiio',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="text-lg text-muted-foreground leading-relaxed">
              <p className="mb-6">
                I'm <span className="text-accent font-semibold">Fredrick Kitonyi Kiio</span>, a passionate Software Engineering student 
                at Zetech University - Nairobi Campus with a strong foundation from my ICT Diploma at ICS Technical College. 
                I'm committed to building innovative and scalable software solutions that address real-world challenges.
              </p>
              <p className="mb-6">
                My educational journey began at ICS Technical College where I built a solid foundation in <span className="text-accent">information technology</span> and 
                <span className="text-accent"> programming fundamentals</span>. Currently pursuing Software Engineering at Zetech University, 
                I specialize in <span className="text-accent">full-stack development</span>, <span className="text-accent">software architecture</span>, 
                <span className="text-accent"> cloud computing</span>, and <span className="text-accent">modern web technologies</span>.
              </p>
              <p>
                With a strong foundation in software engineering principles and modern development practices, I'm always eager to learn 
                new technologies and take on challenging projects that push the boundaries of innovation.
              </p>
            </div>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            {quickInfo.map((item, index) => (
              <motion.div
                key={item.label}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-accent transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors duration-300 break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;