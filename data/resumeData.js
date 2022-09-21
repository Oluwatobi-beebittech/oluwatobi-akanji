import AzureAdminImg from "../src/images/azure.png";
import AzureFunImg from "../src/images/azure-fundamentals.png";
import GoogleImg from "../src/images/google.png";
import JenkinsImg from "../src/images/jenkins.png";
import GitImg from "../src/images/git.png";
import HtmlImg from "../src/images/html.jpg";
import CssImg from "../src/images/css3.png";
import SqlImg from "../src/images/sql.jpg";
import LaravelImg from "../src/images/laravel.png";
import ReactImg from "../src/images/react.png";
import JavascriptImg from "../src/images/javascript.png";
import BootImg from "../src/images/bootstrap.jpg";
import TailImg from "../src/images/tailwind.png";
import AntDesignImg from "../src/images/ant-design.png";
import HighchartsImg from "../src/images/highcharts.png";
import TypescriptImg from "../src/images/typescript.png";
import NextJSImg from "../src/images/nextjs.png";
import CV from "../src/docs/Oluwatobi-Akanji-Main-CV.pdf";

export const pdfCV = CV;

export const workExperiences = [
  {
    title: "Frontend Engineer",
    company: "Topnotch IT Solutions & A Digital Agency",
    location: "Remote",
    duration: "October 2021 - Present",
    descriptions: [
      "Created data visualisations for generating investment insights in precious metals market.",
      "Improved asset exports by crafting a custom PDF/PNG exporter.",
      "Developed comprehensive documentations on applications and processes.",
      "Managed internationalisation of several charts and applications.",
    ],
    techStacks: ["React", "Typescript", "Highcharts", "Redux Toolkit", "LESS", "Sass"],
    icon: "fa fa-swatchbook",
  },
  {
    title: "IT Infrastructure Engineer",
    company: "Steamledge Limited",
    location: "Minna, Nigeria",
    duration: "January 2020 - September 2021",
    descriptions: [
      "Worked on the cloud architecture for a fintech project while considering billing and risks.",
      "Slashed expected user onboarding time for Steamledge learning portal from 48 hours to 2 hours.",
    ],
    techStacks: ["Amazon Web Services", "Google Cloud Platform", "Azure"],
    icon: "fa fa-cloud",
  },
  {
    title: "Thrustlead (Volunteer)",
    company: "Steamledge Limited",
    location: "Minna, Nigeria",
    duration: "September 2019 - December 2019",
    descriptions: [
      "Developed 21st century skill curriculum for schools in Minna, Niger State.",
      "Increased the STEM knowledge of over 50 students by 70% using project-based STEM lessons.",
    ],
    techStacks: ["Laravel", "Arduino", "MIT App Inventor"],
    icon: "fa fa-chalkboard-teacher",
  },
  {
    title: "STEM Tutor",
    company: "Kyomnom Firm Foundation Academy",
    location: "Jos, Nigeria",
    duration: "October 2017 - February 2019",
    descriptions: [
      "Reduced learners' idle time by 50% through a schedule redesign.",
    ],
    techStacks: ["Excel"],
    icon: "fa fa-chalkboard-teacher",
  },
  {
    title: "Network Engineer Intern",
    company: "University of Jos",
    location: "Jos, Nigeria",
    duration: "June 2014 - December 2014",
    descriptions: [
      "Assisted in configuring departments’ internet connectivity in the University which resulted in a 10% increase in Internet access of the university’s community.",
      "Enhanced work efficiency through the troubleshooting of workstations for internet connectivity and resolving connectivity issues.",
    ],
    techStacks: ["Networking", "Support"],
    icon: "fa fa-wifi",
  },
];

export const technologyStacks = [
  {
    techGroup: "Frontend",
    icon: "ant-design:rocket-twotone",
    iconColour: "text-red-500",
    techTools: [
      { image: ReactImg, name: "React JS" },
      { image: TypescriptImg, name: "Typescript" },
      { image: NextJSImg, name: "Next JS" },
      { image: JavascriptImg, name: "Javascript" },
      { image: HtmlImg, name: "HTML5" },
      { image: CssImg, name: "CSS3" },
      { image: BootImg, name: "Bootstrap" },
      { image: AntDesignImg, name: "Ant" },
      { image: TailImg, name: "Tailwind CSS" },
      { image: HighchartsImg, name: "Highcharts" },
    ]
  },
  {
    techGroup: "Backend",
    icon: "ant-design:api-twotone",
    iconColour: "text-blue-500",
    techTools: [
      { image: LaravelImg, name: "Laravel" },
      { image: SqlImg, name: "MySQL" },
    ]
  }
];

export const certifications = [
  {
    title: "Azure Administrator Associate",
    duration: "June 2021 - June 2023",
    link: "https://www.credly.com/badges/0864ed09-5c49-4df7-a3af-5b20060b3164",
    image: AzureAdminImg,
  },
  {
    title: "Associate Cloud Engineer",
    duration: "February 2021 - February 2023",
    link: "https://www.credential.net/52eb18d3-950e-463a-bfc5-d239c664ca6f",
    image: GoogleImg,
  },
  {
    title: "Certified Jenkins Engineer",
    duration: "December 2020",
    link: "https://certificates.cloudbees.com/e1df18b9-a186-4dc2-8340-b736489f5d24",
    image: JenkinsImg,
  },
  {
    title: "Azure Fundamentals",
    duration: "July 2020",
    link: "https://www.youracclaim.com/badges/4dd59497-d3b3-40db-a366-e244115c8d07?source=linked_in_profile",
    image: AzureFunImg,
  },
];
