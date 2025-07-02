import { Link } from 'react-router-dom';

const Header = () => (
  <header className="site-header">
    <h1>
      <span className="dot"></span> Edielyn G. Nase
    </h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
