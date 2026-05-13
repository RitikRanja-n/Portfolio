import React from 'react';
import { motion } from 'framer-motion';
import IconCloudComponent from './IconCloud';
import { skillCategories } from '../constants/skills';

const Skills: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.05
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  // Function to get a random color for skill tags
  const getTagColor = (skillName: string, index: number) => {
    const colors = [
      'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      'bg-sky-500/10 text-sky-400 border-sky-500/20',
      'bg-violet-500/10 text-violet-400 border-violet-500/20',
      'bg-amber-500/10 text-amber-400 border-amber-500/20',
      'bg-rose-500/10 text-rose-400 border-rose-500/20',
      'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20',
      'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
    ];
    
    const hashCode = skillName.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    return colors[(hashCode + index) % colors.length];
  };

  return (
    <section id="skills" className="py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-secondary">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Skills List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={categoryVariants}
                className="group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-secondary mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <div className="h-[1px] bg-gray-700/60 flex-grow ml-4"></div>
                </div>
                
                <motion.div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillVariants}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className={`py-1.5 px-4 rounded-full border ${getTagColor(skill, skillIndex)} text-xs font-medium transition-all duration-300`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Icon Cloud */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
            <IconCloudComponent />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

 