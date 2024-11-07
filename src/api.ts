import { Job } from "./types/Job";

const jobs: Job[] = [
  {
    id: 1,
    company: "PlatformX Solutions",
    position: "Frontend Developer",
    dates: ["nov. 2023", "actualidad"],
    features: [],
  },
  {
    id: 2,
    company: "mxHero",
    position: "Frontend Developer",
    dates: ["may. 2019", "jul. 2023"],
    features: [
      "Participated in the development of mxHERO's new client dashboard from scratch. First as a frontend developer and later on as a fullstack developer too. Including UX and UI's design (Material UI) and wireframing.",
      "Programming languages used: Javascript and Typescript. NodeJS for server environment. ReactJS for building the user interface and its components. Unit tests with Jest. Git for version control. i18next framework for localization.",
      "15 days scrum working framework.",
    ],
  },
  {
    id: 3,
    company: "Navent",
    position: "Frontend Developer",
    dates: ["nov. 2018", "abr. 2019"],
    features: [
      "Participated in the development of Navent's real state (Zonaprop) and job search (ZonaJobs) branches as a Frontend Developer.",
      "Programming languages used: Javascript. ReactJS for building the user interface and its components. Git for version control.",
      "15 days scrum working framework.",
    ],
  },
  {
    id: 4,
    company: "mxHero",
    position: "Frontend Developer",
    dates: ["abr. 2012", "oct. 2018"],
    features: [
      "Lead conceptualization, design and development of mxHero Mail2Cloud administration panel, as a frontend developer and web designer. Designed UI for different mxHero applications (web, chrome extension and Outlook plugin).",
      "Programming languages used: JavaScript. NodeJS for server environment. Mithril (framework MVC) for building the user interface and its components. Git for version control. Extensive use of JavaScript (ES6), Mithril, HTML5, CSS3.",
      "15 days scrum working framework.",
    ],
  },
];

export default async function getJobs(): Promise<Job[]> {
  // Simulate a 2-second delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return jobs;
}
