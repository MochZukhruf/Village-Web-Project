import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header">
      {!isMobile && ( // Header hanya ditampilkan jika bukan tampilan smartphone
        <div className="mx-96">
          <div className="navbar">
            <div className="flex-1">
              <a className="btn-ghost text-xl">Village</a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>Link2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
