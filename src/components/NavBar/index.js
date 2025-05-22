import "./navbar.css";
import Logo from "../../asset/logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar__hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar__links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#calligraphy" onClick={handleDropdown}>
            About Calligraphy
          </a>
        </li>
        <li>
          <a href="#learning-resources" onClick={handleDropdown}>
            Learning Resources
          </a>
        </li>
        <li>
          <a href="#gallery" onClick={handleDropdown}>
            Gallery
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleDropdown}>
            Contact Us
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleDropdown}>
            About Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
