import React from 'react';
import { motion } from 'framer-motion';
import { 
  CommandLineIcon, 
  CheckBadgeIcon,
  LinkIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

type TrainingItem = {
  title: string;
  provider: string;
  duration: string;
  period: string;
  description: string[];
  certificateLink: string;
  skills: string[];
};

const InternshipTraining: React.FC = () => {
  const items: TrainingItem[] = [
    {
      title: 'Full Stack Developer Intern',
      provider: 'Capsitech IT Services',
      duration: 'Remote Internship | Jan 2025 - Jun 2025',
      period: 'Full-Stack Development',
      certificateLink: 'https://drive.google.com/file/d/1R3io59NFQVcgd5qVtmb8FjT5Zq9kjXxz/view?usp=drive_link',
      skills: ['React.js', 'Express.js', 'C#', '.NET Core', 'MongoDB', 'TypeScript'],
      description: [
        'Completed an intensive 20-week Full Stack curriculum, mastering both MERN (React, Express, MongoDB) and .NET Core architectures.',
        'Developed responsive, high-performance user interfaces by translating complex Figma designs into semantic HTML/CSS and interactive React components.',
        'Built scalable backend services with Node.js/Express and C#/.NET Core, implementing JWT-based authentication and Zod schema validation.',
        'Integrated MongoDB with advanced Mongoose modeling and aggregation pipelines to manage complex team, project, and task relationship modules.',
        'Engineered a production-grade Task Management Application as a final project, featuring server-side pagination, filtering, and type-safe TypeScript code.'
      ]
    },
    {
      title: 'Java Full Stack Developer Trainee',
      provider: 'Wipro (TalentNext Program)',
      duration: 'May 2024 – Sep 2024',
      period: 'Advanced Certification',
      certificateLink: 'https://drive.google.com/file/d/14N4tnqDtmblTgmvBNjv4NSFeQGBtTqPS/view?usp=drive_link',
      skills: ['Java', 'Spring Boot', 'Hibernate', 'Angular', 'SQL', 'JUnit'],
      description: [
        'Completed a two-phase intensive Java Full Stack program covering enterprise-level development from Core Java fundamentals to Advanced Frameworks.',
        'Phase 1: Mastered OOPS, Collection Framework, Exception Handling, Multithreading, and RDBMS/SQL alongside Web Technologies (Servlets, JSP).',
        'Phase 2: Specialized in Spring Boot, Spring Core, Hibernate, and Angular for building scalable, responsive RESTful web services.',
        'Successfully cleared 4 Milestone Assessments, ranging from Java/SQL fundamentals to a complete Full Stack Capstone Project.',
        'Utilized JUnit for automated unit testing and Eclipse IDE for efficient code debugging and managing complex enterprise-level development cycles.'
      ]
    }
  ];

  return (
    <section id="internship" className="py-16 md:py-20 bg-dark/60 relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="text-secondary font-medium tracking-widest uppercase text-xs mb-2 block">Professional Growth</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Internship & <span className="text-secondary">Training</span>
          </h2>
          <div className="w-20 h-1 bg-secondary/30 mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary/40 backdrop-blur-sm border border-white/5 rounded-3xl p-6 hover:border-secondary/30 transition-all duration-500 group shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-4 bg-secondary/10 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <CommandLineIcon className="w-8 h-8" />
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10">
                    {item.period}
                  </span>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">
                {item.title}
              </h3>
              <p className="text-secondary font-medium mb-3 text-sm md:text-base">{item.provider}</p>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-1.5 text-sm text-gray-400">
                  <ClockIcon className="w-4 h-4 text-secondary/70" />
                  {item.duration}
                </div>
              </div>

              <div className="space-y-1.5 mb-6">
                {item.description.map((desc, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckBadgeIcon className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {item.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-secondary/5 text-secondary text-xs font-semibold rounded-md border border-secondary/10">
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={item.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold bg-secondary/20 hover:bg-secondary px-6 py-3 rounded-xl transition-all duration-300 w-full justify-center group/link"
              >
                <LinkIcon className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipTraining;
