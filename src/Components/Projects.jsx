import '../css/Projects.css';
import projects from '../Data/Projects';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project-item" key={project.title}>
            <div className="project-cover" style={{ background: project.accent }}>
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              )}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.tech?.length > 0 && (
              <ul className="project-tech">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
            <div className="project-links">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
              {project.repoLink && (
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
