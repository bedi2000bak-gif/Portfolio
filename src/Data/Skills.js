import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss,
  SiGit,
  SiExpress,
  SiPostgresql,
  SiJsonwebtokens,
} from "react-icons/si";

const skillGroups = [
  {
    label: "Use daily",
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
    ],
  },
  {
    label: "Comfortable with",
    items: [
      { name: "Express", icon: SiExpress },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Git", icon: SiGit },
    ],
  },
  {
    label: "Learning now",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "REST APIs" },
      { name: "Testing" },
      { name: "Deployment" },
    ],
  },
];

export default skillGroups;
