import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

export const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isTransparent, setIsTransparent] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollY) {
        setIsTransparent(true); // Scroll down
      } else {
        setIsTransparent(true); // Scroll up
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    if (scrollY > 0 && isTransparent) {
      setIsTransparent(true);
    } else if (scrollY === 0 && !isTransparent) {
      setIsTransparent(true);
    }
  }, [scrollY, isTransparent]);

  // Close the dropdown when navigating to a different route
  useEffect(() => {
    document.querySelectorAll("details").forEach((details) => {
      details.removeAttribute("open");
    });
  }, [location]);

  const handleLinkClick = () => {
    document.querySelectorAll("details").forEach((details) => {
      details.removeAttribute("open");
    });
  };

  return (
    <div className={`navbar-container ${isTransparent ? "transparent" : ""}`}>
      <div className="mx-96">
        <div className="navbar">
          <div className="flex-1">
            <Link
              to="/"
              className="btn-ghost text-xl"
              onClick={handleLinkClick}
            >
              <div className="div-img-logo">
                <img
                  src="/img/logo/logo-kabupaten.png"
                  alt="logo.png"
                  className="logo-img"
                />
              </div>
              Desa Kotanagaya
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Profil</summary>
                  <ul className="dropdown-header">
                    <li>
                      <Link to="/about" onClick={handleLinkClick}>
                        Tentang Kami
                      </Link>
                    </li>
                    <li>
                      <Link to="/history" onClick={handleLinkClick}>
                        Sejarah
                      </Link>
                    </li>
                    <li>
                      <Link to="/vision" onClick={handleLinkClick}>
                        Visi dan Misi
                      </Link>
                    </li>
                    <li>
                      <Link to="/geography" onClick={handleLinkClick}>
                        Geografis Desa
                      </Link>
                    </li>
                    <li>
                      <Link to="/demography" onClick={handleLinkClick}>
                        Demografi Desa
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Goverment</summary>
                  <ul className="dropdown-header">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Public Information</summary>
                  <ul className="dropdown-header">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>More</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
