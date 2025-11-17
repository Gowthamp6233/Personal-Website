import { useParams, Link } from "react-router-dom";
import { projectDetails } from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  const project = projectDetails[id];

  if (!project) {
    return (
      <section>
        <h2>Project Not Found</h2>
        <p>The requested project could not be found.</p>
      </section>
    );
  }

  return (
    <section>
      <h2>{project.title}</h2>
      
      <div className="project-details-grid" style={{ marginTop: "20px" }}>
        <div className="card">
          <h3>Overview</h3>
          <p>{project.overview}</p>
        </div>
        
        <div className="card">
          <h3>Tech Stack</h3>
          <div className="tech-stack-list">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
        
        <div className="card">
          <h3>Key Features</h3>
          <ul className="features-list">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="card">
          <h3>Project Details</h3>
          <div className="project-meta">
            <p><strong>Duration:</strong> {project.duration}</p>
            <p><strong>Role:</strong> {project.role}</p>
          </div>
        </div>
        
        <div className="card">
          <h3>Challenges & Solutions</h3>
          <div className="challenges-section">
            <h4>Challenges:</h4>
            <p>{project.challenges}</p>
            <h4>Solutions:</h4>
            <p>{project.solutions}</p>
          </div>
        </div>
        
        <div className="card">
          <h3>Links</h3>
          <div className="project-links">
            {project.repoUrl ? (
              <a href={project.repoUrl} className="btn ghost" target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            ) : (
              <a href="https://github.com/GOWTHAM6233" className="btn ghost" target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            )}
            <Link to="/projects" className="btn ghost">
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
