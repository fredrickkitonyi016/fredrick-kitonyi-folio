import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText, User, GraduationCap, Briefcase, Award } from 'lucide-react';
import { toast } from 'sonner';

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleDownload = () => {
    // For now, show a toast. In a real implementation, this would trigger a PDF download
    toast.success('Resume download will be available soon!');
  };

  const resumeData = {
    personalInfo: {
      name: 'Fredrick Kitonyi Kiio',
      title: 'ICT Student | Web Developer | Tech Innovator',
      email: 'frimattechnologies016@gmail.com',
      phone: '+254 112 277 289',
      linkedin: 'linkedin.com/in/fredrickkitonyikiio',
      location: 'Nairobi, Kenya',
    },
    education: [
      {
        degree: 'ICT Diploma',
        institution: 'ICS Technical College - Nairobi Branch',
        period: '2023 - 2025',
        description: 'Comprehensive ICT program covering web development, cybersecurity, and IT support.',
      },
    ],
    experience: [
      {
        title: 'Freelance Web Developer',
        company: 'Self-Employed',
        period: '2023 - Present',
        description: 'Developed responsive websites and web applications for various clients using modern technologies.',
      },
      {
        title: 'IT Support Intern',
        company: 'Local IT Company',
        period: '2023 - 2024',
        description: 'Provided technical support, hardware troubleshooting, and system maintenance services.',
      },
    ],
    certifications: [
      'Web Development Fundamentals',
      'Cybersecurity Basics',
      'Network Administration',
      'Hardware Troubleshooting',
    ],
  };

  const resumeSections = [
    {
      icon: User,
      title: 'Personal Information',
      content: resumeData.personalInfo,
    },
    {
      icon: GraduationCap,
      title: 'Education',
      content: resumeData.education,
    },
    {
      icon: Briefcase,
      title: 'Experience',
      content: resumeData.experience,
    },
    {
      icon: Award,
      title: 'Certifications',
      content: resumeData.certifications,
    },
  ];

  return (
    <section id="resume" className="py-20 bg-card/20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my education, experience, and qualifications
          </p>
        </motion.div>

        {/* Download Button */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button
            onClick={handleDownload}
            className="btn-hero inline-flex items-center gap-3 text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={24} />
            Download Full Resume (PDF)
            <FileText size={24} />
          </motion.button>
        </motion.div>

        {/* Resume Preview */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Header */}
            <div className="text-center mb-8 pb-6 border-b border-border">
              <h3 className="text-3xl font-bold text-foreground mb-2">
                {resumeData.personalInfo.name}
              </h3>
              <p className="text-lg text-accent mb-4">{resumeData.personalInfo.title}</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span>{resumeData.personalInfo.email}</span>
                <span>•</span>
                <span>{resumeData.personalInfo.phone}</span>
                <span>•</span>
                <span>{resumeData.personalInfo.location}</span>
              </div>
            </div>

            {/* Resume Sections */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                    <GraduationCap className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Education</h4>
                </div>
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="mb-4 p-4 bg-background/50 rounded-lg">
                    <h5 className="font-semibold text-foreground">{edu.degree}</h5>
                    <p className="text-accent text-sm">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm">{edu.period}</p>
                    <p className="text-muted-foreground text-sm mt-2">{edu.description}</p>
                  </div>
                ))}
              </motion.div>

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Experience</h4>
                </div>
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="mb-4 p-4 bg-background/50 rounded-lg">
                    <h5 className="font-semibold text-foreground">{exp.title}</h5>
                    <p className="text-accent text-sm">{exp.company}</p>
                    <p className="text-muted-foreground text-sm">{exp.period}</p>
                    <p className="text-muted-foreground text-sm mt-2">{exp.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Certifications */}
            <motion.div
              className="mt-8 pt-6 border-t border-border"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Certifications & Skills</h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {resumeData.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-accent/10 border border-accent/20 rounded-lg p-3 text-center"
                  >
                    <span className="text-accent text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;