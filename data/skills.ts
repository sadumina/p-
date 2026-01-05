import { SkillCategory } from '@/types';

export const skills: SkillCategory[] = [
  {
    category: 'Backend Engineering',
    skills: [
      { name: 'FastAPI / Python', proficiency: 85, yearsOfExperience: 1.5 },
      { name: 'Node.js / Express.js', proficiency: 90, yearsOfExperience: 2 },
      { name: 'RESTful API Design', proficiency: 88, yearsOfExperience: 2 },
      { name: 'WebSocket / Real-time', proficiency: 75, yearsOfExperience: 1 }
    ]
  },
  {
    category: 'Frontend Engineering',
    skills: [
      { name: 'React / Next.js', proficiency: 90, yearsOfExperience: 2 },
      { name: 'TypeScript', proficiency: 85, yearsOfExperience: 1.5 },
      { name: 'Tailwind CSS', proficiency: 88, yearsOfExperience: 1.5 },
      { name: 'State Management', proficiency: 82, yearsOfExperience: 1.5 }
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', proficiency: 85, yearsOfExperience: 2 },
      { name: 'Redis', proficiency: 70, yearsOfExperience: 1 },
      { name: 'Query Optimization', proficiency: 78, yearsOfExperience: 1.5 }
    ]
  },
  {
    category: 'DevOps & Tooling',
    skills: [
      { name: 'Docker', proficiency: 80, yearsOfExperience: 1.5 },
      { name: 'GitHub Actions', proficiency: 75, yearsOfExperience: 1 },
      { name: 'CI/CD Pipelines', proficiency: 78, yearsOfExperience: 1 },
      { name: 'Git / Version Control', proficiency: 90, yearsOfExperience: 2.5 }
    ]
  }
];
