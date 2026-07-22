import '../css/Footer.css';
import { SiGithub } from "react-icons/si";
// LinkedIn wurde aus simple-icons entfernt, daher aus fa6
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-identity">
          <p className="footer-name">Bedirhan Aktas</p>
          <p className="footer-meta">
            Karlsruhe, Germany · German, English, Turkish
          </p>
        </div>

        <ul className="footer-links">
          <li>
            <a
              href="https://github.com/bedi2000bak-gif"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/bedirhan-aktas-7614ab423/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <p className="footer-colophon">
        Built with React and Vite. <a href="#hero">Back to top</a>
      </p>
    </footer>
  );
}

export default Footer;
