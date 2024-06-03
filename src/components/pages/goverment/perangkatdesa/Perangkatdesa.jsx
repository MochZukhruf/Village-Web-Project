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
      <div>
        <div className="card-perangkatdesa">
          <div class="card w-96 glass card-prangkat">
            <td>
              <figure>
                <img src="img/structure/images1.jpg" alt="Profile Image" />
              </figure>
              <div class="card-body">
                <div className="card-title-structur">
                  <h2>Kepala Desa</h2>
                  <p>Kades Kotanagaya</p>
                </div>
                <div class="card-actions">
                  <button class="btn btn-primary">
                    <Link to={"/profilstaff"}>More</Link>
                  </button>
                </div>
              </div>
            </td>
            {/* </table> */}
          </div>
        </div>
      </div>
    </div>
  );
};
