import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Wrench, Shield } from 'lucide-react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Responsive websites & custom applications built with modern technologies',
      features: ['React & JavaScript', 'Responsive Design', 'Custom Applications', 'E-commerce Solutions'],
    },
    {
      icon: Wrench,
      title: 'IT Support',
      description: 'Fast troubleshooting & comprehensive system maintenance services',
      features: ['Hardware Diagnostics', 'Software Installation', 'Network Setup', 'System Optimization'],
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Secure systems & network protection for your digital assets',
      features: ['Security Audits', 'Network Protection', 'Data Encryption', 'Threat Assessment'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-card/20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to meet your digital needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card text-center h-80 w-80 mx-auto flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="w-10 h-10 text-accent" />
              </motion.div>

              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 px-4">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ transitionDelay: `${featureIndex * 100}ms` }}
                  >
                    • {feature}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
          <motion.div
            className="w-96 h-96 bg-accent/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;