import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function Projects() {
  const projectList = projects;

  return (
    <section>
      <h2>Featured Projects</h2>
      <p>Here are some of my recent projects that demonstrate my skills in full-stack development, AI/ML, and problem-solving.</p>
      
      <div className="projects-grid" style={{ marginTop: "20px" }}>
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              {project.image ? (
                <img src={project.image} alt={project.title} onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }} />
              ) : null}
              <div className="project-placeholder" style={{ display: project.image ? 'none' : 'flex' }}>
                <span style={{ fontSize: '48px' }}>{project.placeholder}</span>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-details">
                <span className="project-role">{project.role}</span>
                <span className="project-duration">{project.duration}</span>
              </div>
              <div className="project-tech">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <Link className="btn" to={`/projects/${project.id}`}>
                  View Details
                </Link>
                {project.repoUrl && (
                  <a className="btn ghost" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="more-projects" style={{ marginTop: "30px", textAlign: "center" }}>
        <h3>Want to see more?</h3>
        <p>Check out my GitHub profile for additional projects and contributions.</p>
        <a href="https://github.com/GOWTHAM6233" className="btn ghost" target="_blank" rel="noopener noreferrer">
          View GitHub Profile
        </a>
      </div>
    </section>
  );
}

export default Projects;
