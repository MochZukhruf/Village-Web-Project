import React from "react";

export const Navbar = () => {
  return (
    <div className="mx-96">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Villagers Email</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Link</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
