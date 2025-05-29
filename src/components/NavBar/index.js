import "./navbar.css";
import Logo from "../../asset/logo.svg";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = e.target.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = 76; // Fixed navbar height
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".navbar")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div
        className="navbar__hamburger"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar__links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#about-calligraphy" onClick={handleDropdown}>
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
