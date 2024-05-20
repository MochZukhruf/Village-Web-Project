import React from "react";
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className=" mx-96">
        <div className="navbar">
          <div className="flex-1">
            <a className="btn-ghost text-xl">Village</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Profile</summary>
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
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
