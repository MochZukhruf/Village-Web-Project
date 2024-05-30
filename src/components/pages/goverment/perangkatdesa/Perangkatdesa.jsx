import React from "react";
import "../../../../styles/goverment.css";
import { Link } from "react-router-dom";

export const Perangkatdesa = () => {
  return (
    <div className="mx-96 ">
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
            <Link className="link-next" to="/perangkatdesa">
              Perangkat Desa &nbsp;
            </Link>
          </li>
        </ul>
      </div>
      <div className="card-perangkatdesa">
        <div class="card w-96 glass card-prangkat ">
          <figure>
            <img src="img/structure/profile.jpg" alt="car!" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Kepala Desa</h2>
            <p>Kades Kotanagaya</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
