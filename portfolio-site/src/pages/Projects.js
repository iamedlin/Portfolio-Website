import React from 'react';
import './Projects.css';

const Projects = () => (
  <main className="projects-container">
    <h2 className="section-title">Projects</h2>

    <div className="project-entry">
      <div className="project-text">
        <h3 className="project-title">AURUM JEWELRY PH</h3>
        <p className="project-description">
          A Jewelry E-commerce-Website that allows users to browse and purchase a variety of jewelry items online. The website features a user-friendly interface, secure payment options, and a wide selection of products including rings, necklaces, bracelets, and earrings. Customers can easily navigate through different categories, view product details, and make purchases with confidence.
          <br />Made with PHP, HTML, CSS, and Mysql Database. <br />
          <a href="https://aurumjewelryph.com/" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </p>
      </div>

      <div className="project-image">
        <img src="/p1.png" alt="Project Book" />
      </div>
    </div>
     <div className="project-entry">
      <div className="project-text">
        <h3 className="project-title">CRUISING CARTS </h3>
        <p className="project-description">
          A Kpop Merchandise E-commerce-Website that allows users to browse and purchase a variety of Kpop merchandise items online. The website features a user-friendly interface, secure payment options, and a wide selection of products including albums, lightsticks, apparel, and accessories. Customers can easily navigate through different categories, view product details, and make purchases with confidence.
          <br />Made with Adalo<br />
          <a href="https://cruisingcartss-team.adalo.com/try?target=818468a1bfad492599706dafa106d579&params=%7B%7D" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </p>
      </div>

      <div className="project-image">
        <img src="/p2.png" alt="Project Book" />
      </div>
    </div>
  </main>
);

export default Projects;
