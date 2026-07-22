import '../css/Skills.css';
import {
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiHtml5,
    SiCss,
    SiGit,
    SiExpress,
    SiPostgresql
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Express", icon: SiExpress },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "Git", icon: SiGit },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <p>Here are some of my skills:</p>

      <ul className="skills-list">
        {skills.map(({ name, icon: Icon }) => (
          <li key={name}><Icon /> {name}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
