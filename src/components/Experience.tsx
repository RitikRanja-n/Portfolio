import React from 'react';
import { motion } from 'framer-motion';
import { 
  BriefcaseIcon, 
  MapPinIcon, 
  CalendarIcon, 
  LinkIcon, 
  DocumentCheckIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  companyWebsite: string;
  certificateLink?: string;
};

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      role: 'System Engineer',
      company: 'Capsitech It Services',
      location: 'Jodhpur, Rajasthan',
      duration: 'Jan 2025 – Jun 2025',
      companyWebsite: 'https://www.capsitech.com/',
      certificateLink: 'https://drive.google.com/file/d/YOUR_CERTIFICATE_ID/view', // Update with your actual Google Drive link
      description: [
        'Developed and enhanced dynamic frontend modules for an AI-powered multi-tenant Chat Widget SaaS platform using React.js, TypeScript, Tailwind CSS, and Ant Design.',
        'Converted Figma UI/UX designs into reusable, responsive, and production-ready frontend components with focus on scalability and clean architecture.',
        'Built and maintained Super Admin Dashboard features including company onboarding, employee management, analytics, chatbot configuration, and predefined chat flow management.',
        'Integrated REST APIs into frontend applications and collaborated closely with the .NET backend team for API development, debugging, and data flow optimization.',
        'Contributed to backend development by creating and testing APIs, assisting in endpoint integration, and supporting full-stack feature implementation.',
        'Implemented responsive admin panels and chatbot interfaces with optimized user experience across multiple devices and screen sizes.',
        'Collaborated with cross-functional teams using Git-based workflows and agile development practices for feature delivery and issue resolution.',
        'Worked on real-time chatbot workflow systems where companies could manage employees, chatbot responses, and customer interaction flows dynamically.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-20 bg-primary relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-secondary font-medium tracking-widest uppercase text-xs mb-2 block">My Journey</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Work <span className="text-secondary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-secondary/30 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Hands-on experience in building scalable SaaS solutions and modern web architectures.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-transparent rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-dark/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 mb-8 hover:border-secondary/40 transition-all duration-500 shadow-2xl overflow-hidden">
                {/* Decorative Icon in background */}
                <BriefcaseIcon className="absolute -right-8 -bottom-8 w-48 h-48 text-secondary/5 -rotate-12 pointer-events-none" />

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-secondary/15 rounded-2xl text-secondary shadow-lg shadow-secondary/10 group-hover:scale-110 transition-transform duration-500">
                        <BriefcaseIcon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-xl text-gray-300 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-6 text-gray-400 mt-6">
                      <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                        <MapPinIcon className="w-4 h-4 text-secondary" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                        <CalendarIcon className="w-4 h-4 text-secondary" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row sm:flex-col lg:flex-row gap-4">
                    <a
                      href={exp.companyWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-xl transition-all duration-300 font-bold overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500"></div>
                      <LinkIcon className="w-5 h-5" />
                      Visit Site
                    </a>
                    <a
                      href={"https://drive.google.com/file/d/1avl4Vn0RzrG9qggVw1L2x_i1KIT0xL9u/view?usp=sharing"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-gray-200 rounded-xl transition-all duration-300 font-bold border border-white/10"
                    >
                      <DocumentCheckIcon className="w-5 h-5 text-secondary" />
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 relative z-10">
                  {exp.description.map((point, i) => (
                    <motion.div 
                      key={i} 
                      className="flex gap-4 group/item"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 + (i * 0.05) }}
                    >
                      <div className="mt-1.5 flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center group-hover/item:bg-secondary/20 transition-colors">
                          <ChevronRightIcon className="w-4 h-4 text-secondary" />
                        </div>
                      </div>
                      <p className="text-gray-400 text-[15px] leading-relaxed group-hover/item:text-gray-200 transition-colors">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

