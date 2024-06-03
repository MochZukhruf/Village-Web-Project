import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/style.css";

export const News = () => {
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
            <Link to="/news"> Berita Desa&nbsp;</Link>
          </li>
        </ul>
      </div>
      <div className="title-structure-content">
        <div>Berita Desa</div>
      </div>
      <div className="content-news">
        <div className="news-content-card">
          <div className="news-card">
            <div className="card card-left lg:card-side bg-base-100 shadow-xl ">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                  alt="Album"
                />
              </figure>
              <div class="card-body text-left ">
                <h2 class="card-title">New album is released!</h2>
                <p>Click the button to listen on the Spotiwhy app.</p>
                <div class="card-action-news">
                  <button class="btn btn-primary ">Listen</button>
                </div>
              </div>
            </div>
          </div>
          <div className="news-card">
            <div className="card card-left lg:card-side bg-base-100 shadow-xl ">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                  alt="Album"
                />
              </figure>
              <div class="card-body text-left ">
                <h2 class="card-title">New album is released!</h2>
                <p>Click the button to listen on the Spotiwhy app.</p>
                <div class="card-action-news">
                  <button class="btn btn-primary ">Listen</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-news-right">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="search-right input input-bordered w-24 md:w-auto"
            />
          </div>
          <div>
            <div>
              <ul className="content-news-category  menu bg-base-200 w-56 rounded-box">
                <li>
                  <h2 className="menu-title">Kategori</h2>
                  <ul>
                    <li>
                      <a>Berita Desa (0) </a>
                    </li>
                    <li>
                      <a>Info Kementrian (0)</a>
                    </li>
                    <li>
                      <a>Info Pemerintah Kabupaten (0)</a>
                    </li>
                    <li>
                      <a>Info Pemerintah Provinsi (0) </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="join-pagination">
        <input
          className="join-item-pagination btn btn-square"
          type="radio"
          name="options"
          aria-label="1"
          checked
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="4"
        />
      </div>
    </div>
  );
};
