import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

export const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isTransparent, setIsTransparent] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (currentScrollY > 0) {
        setIsTransparent(false); // Scroll down
      } else {
        setIsTransparent(true); // Scroll up or at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        document.querySelectorAll("details").forEach((details) => {
          details.removeAttribute("open");
        });
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.querySelectorAll("details").forEach((details) => {
      details.removeAttribute("open");
    });
    setOpenDropdown(null);
  }, [location]);

  const handleLinkClick = () => {
    document.querySelectorAll("details").forEach((details) => {
      details.removeAttribute("open");
    });
    setOpenDropdown(null);
  };

  const handleDropdownClick = (index) => {
    const detailsElements = document.querySelectorAll("details");

    detailsElements.forEach((details, idx) => {
      if (idx !== index) {
        details.removeAttribute("open");
      }
    });

    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleNavbarClick = () => {
    document.querySelectorAll("details").forEach((details) => {
      details.removeAttribute("open");
    });
    setOpenDropdown(null);
  };

  return (
    <div
      ref={navbarRef}
      className={`navbar-container ${isTransparent ? "transparent" : "solid"}`}
      onClick={handleNavbarClick}
    >
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
                <details onClick={() => handleDropdownClick(0)}>
                  <summary className="dropdown-title">Profil</summary>
                  <ul className="dropdown-header">
                    <li>
                      <Link to="/about" onClick={handleLinkClick}>
                        Tentang Kami
                      </Link>
                    </li>
                    <li>
                      <Link to="/history" onClick={handleLinkClick}>
                        Sejarah Desa
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
                <details onClick={() => handleDropdownClick(1)}>
                  <summary className="dropdown-title">Pemerintahan</summary>
                  <ul className="dropdown-header">
                    <li>
                      <Link to="/structure" onClick={handleLinkClick}>
                        Struktur Organisasi
                      </Link>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details onClick={() => handleDropdownClick(2)}>
                  <summary className="dropdown-title">
                    Public Information
                  </summary>
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
                <a className="dropdown-title">More</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
