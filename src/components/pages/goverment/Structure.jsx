import React from "react";
import { Link, Route } from "react-router-dom";
import "../../../styles/goverment.css";

export const Structure = () => {
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
            <Link to="/structure">Struktur Organisasi</Link>
          </li>
        </ul>
      </div>
      <div className="structure-content">
        <div className="structure-content-left">
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <span>&#11208; </span> Struktur Organisasi
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <span>&#11208; </span> Kepala Desa
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <span>&#11208; </span> Sekretaris Desa
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <span>&#11208; </span> Kaur Pemerintahan
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <span>&#11208; </span> Kaur Pembangunan
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <span>&#11208; </span> Kaur Pemberdayaan Masyarakat
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <span>&#11208; </span> Kaur Kesejahteraan Rakyat
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <span>&#11208; </span> Kaur Umum
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <span>&#11208; </span> Kaur Keuangan
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <span>&#11208; </span> Ketua Karang Taruna
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <span>&#11208; </span> Pranata Komputer
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <span>&#11208; </span> Badan Musyawarah Desa
            </div>
          </div>
        </div>
        <div className="structure-content-right">
          <div className="">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
