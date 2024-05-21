import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/profile.css";

export const Aboutus = () => {
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
            <a>About</a>
          </li>
        </ul>
      </div>
      <div className="content-about">
        <div className="header-content">
          <h1>About This Platform</h1>
        </div>
        <div className="content-fill">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            laborum accusamus odio placeat corrupti nulla amet nobis? Esse
            voluptas qui sint voluptates mollitia repellat, alias voluptate
            dolore eveniet, ipsam ab.
          </p>
        </div>
        <div className="header-content">
          <h1>About This Platform</h1>
        </div>
        <div className="content-fill">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            laborum accusamus odio placeat corrupti nulla amet nobis? Esse
            voluptas qui sint voluptates mollitia repellat, alias voluptate
            dolore eveniet, ipsam ab.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            laborum accusamus odio placeat corrupti nulla amet nobis? Esse
            voluptas qui sint voluptates mollitia repellat, alias voluptate
            dolore eveniet, ipsam ab.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            laborum accusamus odio placeat corrupti nulla amet nobis? Esse
            voluptas qui sint voluptates mollitia repellat, alias voluptate
            dolore eveniet, ipsam ab.
          </p>
        </div>
        <div className="header-content">
          <h1>About This Platform</h1>
        </div>
        <div className="content-fill">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            laborum accusamus odio placeat corrupti nulla amet nobis? Esse
            voluptas qui sint voluptates mollitia repellat, alias voluptate
            dolore eveniet, ipsam ab.
          </p>
        </div>
        <div className="content-fill">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            laborum accusamus odio placeat corrupti nulla amet nobis? Esse
            voluptas qui sint voluptates mollitia repellat, alias voluptate
            dolore eveniet, ipsam ab.
          </p>
        </div>
        <div className="content-fill">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            laborum accusamus odio placeat corrupti nulla amet nobis? Esse
            voluptas qui sint voluptates mollitia repellat, alias voluptate
            dolore eveniet, ipsam ab.
          </p>
        </div>
      </div>
    </div>
  );
};
