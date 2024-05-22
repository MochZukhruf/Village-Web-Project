import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollY) {
        setIsTransparent(true); // Scroll ke bawah, navbar tidak transparan
      } else {
        setIsTransparent(true); // Scroll ke atas, navbar transparan
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

  return (
    <div className={`navbar-container ${isTransparent ? "transparent" : ""}`}>
      <div className=" mx-96">
        <div className="navbar">
          <div className="flex-1">
            <Link to="/" className="btn-ghost text-xl">
              <div className="div-img-logo">
                <img
                  src="/img/logo/logo-kabupaten.png" //logo desa
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
                      <Link to="/about">Tentang Kami</Link>
                    </li>
                    <li>
                      <Link to="/history">Sejarah</Link>
                    </li>
                    <li>
                      <Link to="/vision">Visi dan Misi</Link>
                    </li>
                    <li>
                      <Link to="/geography">Geografis Desa</Link>
                    </li>
                    <li>
                      <Link to="/demography ">Demografi Desa</Link>
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
