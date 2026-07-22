import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="logo">Bedirhan Aktas</a>
      <ul className="links">
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
