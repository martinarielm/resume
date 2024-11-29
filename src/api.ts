import { Job } from "./types/Job";

export const mockedJobs: Job[] = [
  {
    id: 1,
    company: "PlatformX Solutions",
    position: "Frontend Developer",
    dates: ["nov. 2023", "actualidad", "1 year 1 month"],
    features: [
      "Led frontend development for a fines payment platform, designing high-fidelity wireframes in Figma and implementing scalable interfaces for both citizens and admin users using JavaScript/TypeScript.",
      "Established and enforced coding best practices (Husky commit rules, Prettier, ESLint) to ensure maintainable, high-quality code, mentoring junior developers to improve their skills.",
      "Built reusable components with Storybook, streamlining development and fostering collaboration among developers.",
      "Collaborated closely with backend teams to consume APIs and implement robust state management using Redux and React Query, optimizing the platform for high user traffic.",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "React Query",
      "Storybook",
      "Figma",
      "Material UI",
    ],
  },
  {
    id: 2,
    company: "mxHero",
    position: "Frontend Developer",
    dates: ["may. 2019", "jul. 2023", "4 years 3 months"],
    features: [
      "Co-designed and rebuilt mxHERO's client dashboard from scratch using ReactJS, contributing to critical decisions on technologies, methodologies, and UX/UI (Material UI, wireframing).",
      "Implemented key features and components in JavaScript/TypeScript, ensuring performance, scalability, and localization support with i18next.",
      "Expanded role to Fullstack Developer, creating server-side functionality with Node.js and maintaining code quality through unit testing with Jest and version control with Git.",
      "Collaborated within a Scrum framework (15-day sprints) to deliver consistent and high-quality updates aligned with business goals.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Jest",
      "Node.js",
      "Styled Components",
      "Material UI",
    ],
  },
  {
    // TODO: Desarrollar en detalle las features
    id: 3,
    company: "Navent",
    position: "Frontend Developer",
    dates: ["nov. 2018", "abr. 2019", "6 months"],
    features: [
      "Participated in the development of Navent's real state (Zonaprop) and job search (ZonaJobs) branches as a Frontend Developer.",
      "Programming languages used: JavaScript. ReactJS for building the user interface and its components. Git for version control.",
      "15 days scrum working framework.",
    ],
    skills: ["React", "JavaScript", "HTML5", "CSS3", "BEM Methodology"],
  },
  {
    // TODO: Desarrollar en detalle las features
    id: 4,
    company: "mxHero",
    position: "Frontend Developer",
    dates: ["abr. 2012", "oct. 2018", "6 years 7 months"],
    features: [
      "Lead conceptualization, design and development of mxHero Mail2Cloud administration panel, as a frontend developer and web designer. Designed UI for different mxHero applications (web, chrome extension and Outlook plugin).",
      "Programming languages used: JavaScript. NodeJS for server environment. Mithril (framework MVC) for building the user interface and its components. Git for version control. Extensive use of JavaScript (ES6), Mithril, HTML5, CSS3.",
      "15 days scrum working framework.",
    ],
    skills: ["React", "JavaScript", "Mithril.js", "HTML5", "CSS3"],
  },
];

export default async function getJobs(): Promise<Job[]> {
  // Simulate a 2-second delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockedJobs;
}
