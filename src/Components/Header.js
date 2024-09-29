import React, { useState } from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link as ScrollLink } from 'react-scroll';

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isTogglerActive, setIsTogglerActive] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
    setIsTogglerActive(!isTogglerActive);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h3>
          Pavan Karthik's Portfolio
        </h3>

        <button
          className={`navbar-toggler ${isTogglerActive ? 'active' : ''}`}
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <ScrollLink
                to="Pavan"
                smooth={true}
                duration={1000}
                className="nav-link"
                onClick={handleToggle}
              >
                About Me
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="Skills-Heading"
                smooth={true}
                duration={1000}
                className="nav-link"
                onClick={handleToggle}
              >
                Skills
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="text-center mb-5"
                smooth={true}
                duration={1000}
                className="nav-link"
                onClick={handleToggle}
              >
                Projects
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="contact-header text-center"
                smooth={true}
                duration={1000}
                className="nav-link"
                onClick={handleToggle}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
