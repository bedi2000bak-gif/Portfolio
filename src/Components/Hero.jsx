import '../css/Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <p className="hero-eyebrow">Full-Stack Web Developer</p>
      <h1>Hi, I'm <span className="hero-name">Bedirhan Aktas</span></h1>
      <p className="hero-lead">I build full-stack web apps — React interfaces backed by Node/Express APIs and PostgreSQL.
        <br/>
        Self-taught, and I learn best by shipping real, end-to-end projects instead of tutorials alone.</p>
      <div className="hero-actions">
        <a href="#projects" className="hero-link">View my work</a>
        <a
          className="hero-link hero-link--ghost"
          href="https://www.linkedin.com/in/bedirhan-aktas-7614ab423/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Hero;
