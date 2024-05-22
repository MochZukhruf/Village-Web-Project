import React from "react";
import "../../../styles/profile.css";
import { Link } from "react-router-dom";

export const Vision = () => {
  return (
    <div className="mx-96">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <div className="img-icon">
              <Link to="/">
                <img
                  className="home-icon"
                  src="/img/icon/home.png"
                  alt="Home"
                />
              </Link>
            </div>
          </li>
          <li>
            <Link to="/vision">Visi dan Misi Desa</Link>
          </li>
        </ul>
      </div>
      <div className="content-vision">
        <div className="header-content">
          <h1>Visi dan Misi Desa</h1>
        </div>
      </div>
    </div>
  );
};
