export interface Experience {
  title: string;
  imgUrl?: string;
  description: string;
  workedDate: string;
  skills: string[];
}

export interface Skill {
  title: string;
  expertise: number;
}

export const WORK_EXPERIENCE: Experience[] = [
  {
    title: "Fullstack Developer - Acklen Avenue",
    description:
      "Worked with several U.S clients by collaborating in an agile way, delivering successful projects and accomplishing client satisfaction",
    workedDate: "2022 - Present",
    skills: [
      "React",
      "Angular",
      "NodeJS",
      "C# NET CORE",
      "Tailwind",
      "PostgreSQL",
      "MySQL",
      "Salesforce",
    ],
  },
  {
    title: "Fullstack Developer - Hero Unit",
    description:
      "Worked on different projects and tools that helped the company scale with its employees",
    workedDate: "2021 - 2022",
    skills: ["React", "NodeJS", "Tailwind", "BulmaCSS", "PostgreSQL"],
  },
  {
    title: "Fullstack Developer - Transportec",
    description:
      "Worked in a Uber-alike transportation system designed for trucks",
    workedDate: "2019 - 2020",
    skills: ["React", "NodeJS", "Tailwind", "BulmaCSS", "PostgreSQL"],
  },
];

export const SKILLS: Skill[] = [
  { title: "Angular", expertise: 85 },
  { title: "Figma", expertise: 90 },
  { title: "GraphQL", expertise: 85 },
  { title: "MySQL", expertise: 85 },
  { title: "NextJS", expertise: 90 },
  { title: "NodeJS/NestJS", expertise: 93 },
  { title: "PostgreSQL", expertise: 89 },
  { title: "ReactJS", expertise: 95 },
  { title: "Salesforce", expertise: 80 },
  { title: "Javascript/Typescript", expertise: 95 },
  { title: "C#/.Net Core", expertise: 92 },
].sort((a, b) => b.expertise - a.expertise);
