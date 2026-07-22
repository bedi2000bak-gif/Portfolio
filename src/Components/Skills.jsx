import '../css/Skills.css';
import { SiFreecodecamp } from "react-icons/si";
import skillGroups from '../Data/Skills';
import certifications from '../Data/Certifications';

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills &amp; Credentials</h2>

      <div className="skill-groups">
        {skillGroups.map(({ label, items }) => (
          <div className="skill-group" key={label}>
            <h3 className="skill-group-label">{label}</h3>
            <ul className="skill-chips">
              {items.map(({ name, icon: Icon }) => (
                <li key={name}>
                  {Icon && <Icon />}
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="certs-heading">
        {certifications.length === 1 ? 'Certification' : 'Certifications'}
      </h3>
      <ul className="cert-list">
        {certifications.map(({ title, issuer, date, dateTime, url }) => (
          <li className="cert-item" key={url}>
            <SiFreecodecamp className="cert-mark" />
            <div className="cert-body">
              <span className="cert-title">{title}</span>
              <span className="cert-meta">
                {issuer} · <time dateTime={dateTime}>{date}</time>
              </span>
            </div>
            <a
              className="cert-verify"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Verify <span aria-hidden="true">→</span>
              <span className="sr-only">{title} certification</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
