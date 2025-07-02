import { Link } from 'react-router-dom';

const Home = () => (
  <main className="home">
    <section className="intro">
      <img src="/profile.jpg" alt="Profile" />

      <div>
        <h2>Hello</h2>
        <h3>A Bit About Me</h3>
        <p>
          Hello! My name is <strong>Edielyn G. Nase</strong>, a dedicated and passionate student currently pursuing a Bachelor of Science in Computer Engineering at <strong>Bulacan State University – Main Campus</strong>.
        </p>
        <p>
          I have a strong interest in technology, particularly in areas such as web development, embedded systems, and AI-driven applications.
        </p>
        <p>
          I am goal-oriented, eager to learn, and value both creative and technical challenges. Beyond academics, I enjoy simple moments — especially enjoying chicken with someone special or celebrating Christmas, my favorite holiday, as a symbol of hope and survival.
        </p>
      </div>
    </section>

    <section className="bubbles">
      <Link to="/resume" className="bubble orange">Resume</Link>
      <Link to="/projects" className="bubble red">Projects</Link>
      <Link to="/contact" className="bubble blue">Contact</Link>
    </section>
  </main>
);

export default Home;
