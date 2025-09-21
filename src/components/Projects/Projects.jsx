import "./Projects.css";
import { projects } from "../Carousel/ProjectsData";

export default function ProjectGrid() {
  return (
    <section id="projects" className="projects">
      <h2>Meus Projetos</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="card-content">
              <h3>{project.title}</h3>

              {/* Ícones das tecnologias */}
              <div className="techs">
                {project.techs.map((tech, i) => (
                  <i key={i} className={tech}></i>
                ))}
              </div>

              <div className="buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
