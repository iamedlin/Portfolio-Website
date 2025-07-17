import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((el) => el.classList.add('pop-in'));
  }, []);

  return (
    <main className="home fade-in">
      <section className="intro">
        <img src="/profile.jpg" alt="Profile" className="slide-in-left" />

        <div className="slide-in-right">
          <h2>Hello</h2>
          <h3>A Bit About Me</h3>
          <p>
  Hello! My name is <strong>Edielyn G. Nase</strong>, a dedicated web developer seeking to improve my knowledge, explore new technologies, and continuously grow in the field of web development.
</p>
<p>
  I studied at <strong>Bulacan State University</strong>, where I earned my degree in <strong>Computer Engineering</strong>. My journey has been enriched by my love for technology and my commitment to continuous learning.
</p>
<p>
  My goal is to fully develop my skills as a web developer and eventually create websites that are helpful, accessible, and meaningful to everyone. I am goal-oriented, eager to learn, and value both creative and technical challenges. 
</p>

        </div>
      </section>

      <section className="bubbles">
        <Link to="/resume" className="bubble orange delay-1">Resume</Link>
        <Link to="/projects" className="bubble red delay-2">Projects</Link>
        <Link to="/contact" className="bubble blue delay-3">Contact</Link>
      </section>
    </main>
  );
};

export default Home;
