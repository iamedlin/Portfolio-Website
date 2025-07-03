import React from 'react';
import './Projects.css';

const Projects = () => (
  <main className="projects-container">
    <h2 className="section-title">Projects</h2>

    <div className="project-entry">
      <div className="project-text">
        <h3 className="project-title">Project Name 01</h3>
        <p className="project-description">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy.
          Just click “Edit Text” or double click me to add your own content and
          make changes to the font. I’m a great place for you to tell a story and
          let your users know a little more about you.
        </p>
      </div>

      <div className="project-image">
        <img src="/meme.jpeg" alt="Project Book" />
      </div>
    </div>
     <div className="project-entry">
      <div className="project-text">
        <h3 className="project-title">Project Name 01</h3>
        <p className="project-description">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy.
          Just click “Edit Text” or double click me to add your own content and
          make changes to the font. I’m a great place for you to tell a story and
          let your users know a little more about you.
        </p>
      </div>

      <div className="project-image">
        <img src="/mimi.jpg" alt="Project Book" />
      </div>
    </div>
  </main>
);

export default Projects;
