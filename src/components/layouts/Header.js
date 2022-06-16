import React from "react";
import { Link } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import Logo from "../elements/Logo";

function Header({ light, logoSource, toggleMenu, headerToggler }) {
  const handleClasses = () => {
    let classes = "desktop-header-1 d-flex align-items-start flex-column";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };
  const handleMobileClasses = () => {
    let classes = "mobile-header-1";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };
  return (
    <>
      <header className={handleMobileClasses()}>
        <div className="container">
          <div className="menu-icon d-inline-flex mr-4">
            <button onClick={headerToggler}>
              <span></span>
            </button>
          </div>
          <Logo logoSource={logoSource} />
        </div>
      </header>
      <header className={handleClasses()}>
        <Logo logoSource={logoSource} />
        <nav>
          <ul className="vertical-menu scrollspy">
            <li>
              <LinkR
                activeClass="active"
                spy={true}
                to='/'
                smooth={true}
                duration={500}
              >
                <i className="icon-home"></i>Home
              </LinkR>
            </li>
            <li>
              <LinkR
                activeClass="active"
                spy={true}
                to='/'
                smooth={true}
                duration={500}
              >
                <i className="icon-user-following"></i>About
              </LinkR>
            </li>
            
            <li>
              <LinkR
                activeClass="active"
                spy={true}
                to='/'
                smooth={true}
                duration={500}
              >
                <i className="icon-graduation"></i>Experience
              </LinkR>
            </li>
            <li>
              <LinkR
                activeClass="active"
                spy={true}
                to='/'
                smooth={true}
                duration={500}
              >
                <i className="icon-layers"></i>Works
              </LinkR>
            </li>
            <li>
              <LinkR
                activeClass="active"
                spy={true}
                to='/'
                smooth={true}
                duration={500}
              >
                <i className="icon-briefcase"></i>Services
              </LinkR>
            </li>
            {/* <li>
              <LinkR
                activeClass="active"
                spy={true}
                to='/'
                smooth={true}
                duration={500}
              >
                <i className="icon-note"></i>Blog
              </LinkR>
            </li>
            <li>
              <LinkR
                activeClass="active"
                spy={true}
                to='/'
                smooth={true}
                duration={500}
              >
                <i className="icon-bubbles"></i>Contact
              </LinkR>
            </li> */}
          </ul>
        </nav>

        <div className="footer">
          <span className="copyright">
            &copy; {new Date().getFullYear()}  Masud Rana.
          </span>
        </div>
      </header>
    </>
  );
}

export default Header;
