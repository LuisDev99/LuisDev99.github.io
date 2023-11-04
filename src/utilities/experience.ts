export interface Experience {
  title: string;
  imgUrl?: string;
  description: string;
  workedDate: string;
  skills: string[];
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

export const SKILLS: string[] = [
  "angular",
  "figma",
  "graphql",
  "javascript",
  "mysql",
  "nextjs",
  "nodejs",
  "postgresql",
  "react",
  "salesforce",
  "typescript",
  "csharp",
].map((skill) => `/skills/${skill}.svg`);
