import React from "react";
import './style/Projects.css'

const Projects = (_props) => {
  return (
    <section id="projects" className="section-projects">
      <h1>Projetos</h1>
      <ul>
        <li>
          <a href="https://github.com/SSpinelli/Tryunfo" target="_blank" rel="noreferrer">Tryunfo</a>
        </li> 
        <li>
          <a href="https://github.com/SSpinelli/Trybetunes" target="_blank" rel="noreferrer">Trybetunes</a>
        </li>
        <li>
          <a href="https://github.com/SSpinelli/noteplus" target="_blank" rel="noreferrer">NotePlus</a>
        </li>
        <li>
          <a href="https://github.com/SSpinelli/dollynho_wars" target="_blank" rel="noreferrer">Dollynho Wars</a>
        </li>
      </ul>
    </section>
  )
}

export default Projects;
