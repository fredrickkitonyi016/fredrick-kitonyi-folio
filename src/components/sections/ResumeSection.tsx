import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText, User, GraduationCap, Briefcase, Award, BookOpen, Trophy, Code } from 'lucide-react';
import { toast } from 'sonner';
import jsPDF from 'jspdf';

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleDownload = () => {
    try {
      const pdf = new jsPDF();
      const margin = 20;
      let yPosition = margin;
      
      // Helper function to add text with word wrapping
      const addText = (text: string, fontSize = 10, isBold = false, maxWidth = 170) => {
        pdf.setFontSize(fontSize);
        const font = isBold ? 'helvetica' : 'helvetica';
        const weight = isBold ? 'bold' : 'normal';
        pdf.setFont(font, weight);
        
        const lines = pdf.splitTextToSize(text, maxWidth);
        lines.forEach((line: string) => {
          if (yPosition > 270) {
            pdf.addPage();
            yPosition = margin;
          }
          pdf.text(line, margin, yPosition);
          yPosition += fontSize * 0.5;
        });
        yPosition += 5;
      };

      // Header
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.text(resumeData.personalInfo.name, margin, yPosition);
      yPosition += 12;
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.text(resumeData.personalInfo.title, margin, yPosition);
      yPosition += 8;
      
      pdf.setFontSize(10);
      pdf.text(`Email: ${resumeData.personalInfo.email} | Phone: ${resumeData.personalInfo.phone}`, margin, yPosition);
      yPosition += 6;
      pdf.text(`Location: ${resumeData.personalInfo.location}`, margin, yPosition);
      yPosition += 10;
      
      // Objective
      addText('OBJECTIVE', 12, true);
      addText(resumeData.personalInfo.objective, 10, false);
      
      // Education
      addText('EDUCATION', 12, true);
      resumeData.education.forEach(edu => {
        addText(`${edu.degree} - ${edu.institution}`, 11, true);
        addText(`${edu.period}${edu.gpa ? ' | ' + edu.gpa : ''}`, 10);
        addText(edu.description, 10);
        
        if (edu.relevantCoursework) {
          addText('Relevant Coursework:', 10, true);
          addText(edu.relevantCoursework.join(', '), 9);
        }
      });
      
      // Experience
      addText('PROFESSIONAL EXPERIENCE', 12, true);
      resumeData.experience.forEach(exp => {
        addText(`${exp.title} - ${exp.company}`, 11, true);
        addText(exp.period, 10);
        addText(exp.description, 10);
        
        if (exp.achievements) {
          addText('Key Achievements:', 10, true);
          exp.achievements.forEach(achievement => {
            addText(`• ${achievement}`, 9);
          });
        }
      });
      
      // Projects
      addText('ACADEMIC & PERSONAL PROJECTS', 12, true);
      resumeData.projects.forEach(project => {
        addText(`${project.title} (${project.technologies})`, 11, true);
        addText(project.description, 10);
        if (project.features) {
          addText(`Features: ${project.features}`, 9);
        }
      });
      
      // Technical Skills
      addText('TECHNICAL SKILLS', 12, true);
      Object.entries(resumeData.technicalSkills).forEach(([category, skills]) => {
        const categoryName = category.replace(/([A-Z])/g, ' $1').trim();
        addText(`${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}: ${skills.join(', ')}`, 10);
      });
      
      // Achievements
      addText('ACHIEVEMENTS & AWARDS', 12, true);
      resumeData.achievements.forEach(achievement => {
        addText(`• ${achievement}`, 10);
      });
      
      // Certifications
      addText('CERTIFICATIONS', 12, true);
      resumeData.certifications.forEach(cert => {
        addText(`• ${cert}`, 10);
      });
      
      // Save the PDF
      pdf.save(`${resumeData.personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`);
      toast.success('Resume downloaded successfully!');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Failed to generate PDF. Please try again.');
    }
  };

  const resumeData = {
    personalInfo: {
      name: 'Fredrick Kitonyi Kiio',
      title: 'ICT Diploma Student | Web Developer | Tech Innovator',
      email: 'frimattechnologies016@gmail.com',
      phone: '+254 112 277 289',
      linkedin: 'linkedin.com/in/fredrickkitonyikiio',
      location: 'Nairobi, Kenya',
      objective: 'Dedicated ICT diploma student with hands-on experience in web development, cybersecurity, and IT support. Seeking opportunities to apply technical skills and continue learning in the dynamic technology industry.'
    },
    education: [
      {
        degree: 'Diploma in Information Communication Technology (ICT)',
        institution: 'ICS Technical College - Nairobi Branch',
        period: '2023 - 2025 (Expected)',
        gpa: 'Current GPA: 3.8/4.0',
        description: 'Comprehensive ICT program covering web development, cybersecurity, database management, networking, and IT support.',
        relevantCoursework: [
          'Web Development & Programming',
          'Database Design & Management',
          'Network Administration',
          'Cybersecurity Fundamentals',
          'System Analysis & Design',
          'Mobile App Development',
          'IT Project Management',
          'Digital Forensics'
        ]
      },
      {
        degree: 'Kenya Certificate of Secondary Education (KCSE)',
        institution: 'Local Secondary School',
        period: '2019 - 2022',
        description: 'Completed secondary education with focus on Mathematics, Computer Studies, and Physics.'
      }
    ],
    experience: [
      {
        title: 'Freelance Web Developer',
        company: 'Self-Employed',
        period: '2023 - Present',
        description: 'Developed responsive websites and web applications for various clients using modern technologies like React, JavaScript, and CSS frameworks.',
        achievements: [
          'Built 15+ responsive websites for local businesses',
          'Improved client website loading speeds by 40%',
          'Maintained 100% client satisfaction rate'
        ]
      },
      {
        title: 'IT Support Intern',
        company: 'Local IT Company',
        period: '2024 (3 months)',
        description: 'Provided technical support, hardware troubleshooting, and system maintenance services.',
        achievements: [
          'Resolved 95% of technical issues within 24 hours',
          'Assisted in network setup for 20+ workstations',
          'Reduced system downtime by 30%'
        ]
      },
      {
        title: 'Cyber Cafe Assistant',
        company: 'Community Cyber Cafe',
        period: '2023 - 2024',
        description: 'Assisted customers with computer usage, printing services, and internet access while maintaining equipment.',
        achievements: [
          'Helped 50+ customers daily with digital services',
          'Maintained 99% uptime for all systems',
          'Implemented security protocols to prevent malware'
        ]
      }
    ],
    projects: [
      {
        title: 'Portfolio Website',
        technologies: 'React, TypeScript, Tailwind CSS',
        description: 'Personal portfolio showcasing projects and skills with responsive design and modern animations.',
        link: 'https://portfolio.example.com'
      },
      {
        title: 'Student Management System',
        technologies: 'PHP, MySQL, Bootstrap',
        description: 'Web-based system for managing student records, grades, and course enrollment.',
        features: 'User authentication, CRUD operations, reporting dashboard'
      },
      {
        title: 'Cybersecurity Awareness App',
        technologies: 'React Native, Firebase',
        description: 'Mobile app educating users about cybersecurity best practices and threat awareness.',
        features: 'Interactive quizzes, security tips, threat notifications'
      }
    ],
    achievements: [
      'Dean\'s List - Semester 1 & 2 (2024)',
      'Best ICT Project Award - College Tech Fair 2024',
      'Cybersecurity Competition - 2nd Place (Regional)',
      'Volunteer IT Support - Local Community Center',
      'Web Development Bootcamp Graduate - 2023'
    ],
    certifications: [
      'Web Development Fundamentals - FreeCodeCamp',
      'Cybersecurity Basics - Cisco Networking Academy',
      'Network Administration - CompTIA Network+',
      'Hardware Troubleshooting - A+ Certification',
      'Digital Marketing - Google Digital Skills',
      'Python Programming - Codecademy',
      'Database Management - MySQL Certification',
      'IT Project Management - PMI Fundamentals'
    ],
    technicalSkills: {
      programming: ['JavaScript', 'Python', 'PHP', 'HTML5', 'CSS3', 'SQL'],
      frameworks: ['React', 'Node.js', 'Bootstrap', 'Tailwind CSS', 'Express.js'],
      databases: ['MySQL', 'MongoDB', 'Firebase', 'SQLite'],
      tools: ['Git', 'VS Code', 'Figma', 'Photoshop', 'Linux', 'Windows Server'],
      networking: ['TCP/IP', 'DNS', 'DHCP', 'VPN Setup', 'Router Configuration'],
      cybersecurity: ['Penetration Testing', 'Vulnerability Assessment', 'Malware Analysis']
    }
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
            {/* Header with Objective */}
            <div className="text-center mb-8 pb-6 border-b border-border">
              <h3 className="text-3xl font-bold text-foreground mb-2">
                {resumeData.personalInfo.name}
              </h3>
              <p className="text-lg text-accent mb-4">{resumeData.personalInfo.title}</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-4">
                <span>{resumeData.personalInfo.email}</span>
                <span>•</span>
                <span>{resumeData.personalInfo.phone}</span>
                <span>•</span>
                <span>{resumeData.personalInfo.location}</span>
              </div>
              <p className="text-muted-foreground max-w-3xl mx-auto text-sm italic">
                {resumeData.personalInfo.objective}
              </p>
            </div>

            {/* Education with Coursework */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Education</h4>
              </div>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-6 p-4 bg-background/50 rounded-lg">
                  <h5 className="font-semibold text-foreground">{edu.degree}</h5>
                  <p className="text-accent text-sm">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm">{edu.period}</p>
                  {edu.gpa && <p className="text-accent text-sm font-medium">{edu.gpa}</p>}
                  <p className="text-muted-foreground text-sm mt-2">{edu.description}</p>
                  {edu.relevantCoursework && (
                    <div className="mt-3">
                      <p className="text-foreground text-sm font-medium mb-2">Relevant Coursework:</p>
                      <div className="grid grid-cols-2 gap-1">
                        {edu.relevantCoursework.map((course, courseIndex) => (
                          <span key={courseIndex} className="text-muted-foreground text-xs">
                            • {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Experience with Achievements */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Professional Experience</h4>
              </div>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mb-4 p-4 bg-background/50 rounded-lg">
                  <h5 className="font-semibold text-foreground">{exp.title}</h5>
                  <p className="text-accent text-sm">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.period}</p>
                  <p className="text-muted-foreground text-sm mt-2">{exp.description}</p>
                  {exp.achievements && (
                    <div className="mt-3">
                      <p className="text-foreground text-sm font-medium mb-1">Key Achievements:</p>
                      {exp.achievements.map((achievement, achIndex) => (
                        <p key={achIndex} className="text-muted-foreground text-xs ml-2">
                          • {achievement}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Projects */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                  <Code className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Academic & Personal Projects</h4>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="p-4 bg-background/50 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-2">{project.title}</h5>
                    <p className="text-accent text-xs mb-2">{project.technologies}</p>
                    <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                    {project.features && (
                      <p className="text-muted-foreground text-xs">
                        <strong>Features:</strong> {project.features}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technical Skills */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Technical Skills</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(resumeData.technicalSkills).map(([category, skills]) => (
                  <div key={category} className="p-3 bg-background/50 rounded-lg">
                    <h6 className="font-medium text-foreground mb-2 capitalize">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h6>
                    <div className="flex flex-wrap gap-1">
                      {skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-accent/10 text-accent text-xs px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                  <Trophy className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Achievements & Awards</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {resumeData.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-accent/10 border border-accent/20 rounded-lg p-3"
                  >
                    <span className="text-accent text-sm font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              className="border-t border-border pt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Certifications</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {resumeData.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-background/50 border border-border rounded-lg p-3 text-center"
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