export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Basic C#', 'SQL', 'Python'] 
  },
  {
    title: 'Frontend Development',
    skills: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Ant Design'] 
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', '.NET Web API', 'REST API Integration'] 
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'SQL', 'Mongoose'] 
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'JIRA', 'MediaPipe (Computer Vision)', 'Postman', 'VS Code'] 
  },
  {
    title: 'Core Fundamentals',
    skills: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'OOPs'] 
  }
];

export const skillToSlug: Record<string, string> = {
  'Java': 'java',
  'JavaScript': 'javascript',
  'TypeScript': 'typescript',
  'Basic C#': 'csharp',
  'SQL': 'mysql',
  'Python': 'python',
  'React.js': 'react',
  'HTML5': 'html5',
  'CSS3': 'css3',
  'Tailwind CSS': 'tailwindcss',
  'Ant Design': 'antdesign',
  'Node.js': 'nodedotjs',
  'Express.js': 'express',
  '.NET Web API': 'dotnet',
  'REST API Integration': 'postman',
  'Vercel': 'vercel',
  'MongoDB': 'mongodb',
  'Mongoose': 'mongoose',
  'Git': 'git',
  'GitHub': 'github',
  'JIRA': 'jira',
  'MediaPipe (Computer Vision)': 'mediapipe',
  'Postman': 'postman',
  'VS Code': 'visualstudiocode',
  'Data Structures & Algorithms': 'datastructuresandalgorithms',
  'DBMS': 'dbms',
  'Operating Systems': 'operatingsystems',
  'OOPs': 'oop' 
};
