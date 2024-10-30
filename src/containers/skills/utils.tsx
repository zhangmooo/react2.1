interface Skill {
  skillName: string;
  percentage: string;
}

interface SkillCategory {
  label: string;
  data: Skill[];
}
{ /* @ts-ignore */}
export const skillsData: SkillCategory[] = [
    {
      label: 'FRONT END',
      data: [
        {
          skillName: 'HTML',
          percentage: '50',
        },
        {
          skillName: 'CSS',
          percentage: '50',
        },
        {
          skillName: 'JAVASCRIPT',
          percentage: '50',
        },
        {
          skillName: 'REACT JS',
          percentage: '50',
        },
        {
          skillName: 'ANGULAR',
          percentage: '0',
        },
      ],
    },
    {
      label: 'BACK END',
      data: [
        {
          skillName: 'JAVA',
          percentage: '0',
        },
        {
          skillName: 'PYTHON',
          percentage: '0',
        },
        {
          skillName: 'RUBY',
          percentage: '0',
        },
        {
          skillName: 'C#',
          percentage: '0',
        },
        {
          skillName: 'KOTLIN',
          percentage: '0',
        },
      ],
    },
    {
      label: 'DATABASE',
      data: [
        {
          skillName: 'MYSQL',
          percentage: '0',
        },
        {
          skillName: 'MONGODB',
          percentage: '0',
        },
        {
          skillName: 'REDIS',
          percentage: '0',
        },
        {
          skillName: 'ORACLE',
          percentage: '0',
        },
      ],
    },
  ];
