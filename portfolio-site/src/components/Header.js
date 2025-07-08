import { NavLink } from 'react-router-dom';
import './Header.css'; 

const Header = () => (
  <header className="site-header">
    <h1>
      <span className="dot"></span> Edielyn G. Nase
    </h1>
    <nav>
      <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
      <NavLink to="/resume" className={({ isActive }) => isActive ? "active" : ""}>Resume</NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
    </nav>
  </header>
);

export default Header;
