import React from "react";
import { FaPhone, FaEarthAsia } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

export const Navup = () => {
  return (
    <div className="navup-color">
      <div className=" navup mx-96">
        <div className="container">
          <div className="navbar">
            <div className="text-left">
              <FaPhone /> <span>&nbsp;0812-3456-7890 |&nbsp;</span>
              <IoMailOutline /> <span>&nbsp;Kotanagaya@gmail.com</span>
            </div>
            <div className="text-right">
              <FaEarthAsia /> <span>&nbsp;Kabupaten Parigi Moutong</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
