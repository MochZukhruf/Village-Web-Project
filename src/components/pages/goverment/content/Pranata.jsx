import React from "react";
import { Link } from "react-router-dom";
import "../../../../styles/goverment.css";
export const Pranata = () => {
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
              <Link to="/structure">
                <span>&#11208; </span> Struktur Organisasi
              </Link>
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <Link to="/kepaladesa">
                <span>&#11208; </span> Kepala Desa
              </Link>
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <Link to={"/sekretaris"}>
                <span>&#11208; </span> Sekretaris Desa
              </Link>
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <Link to={"/kaurpemer"}>
                <span>&#11208; </span> Kaur Pemerintahan
              </Link>
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <Link to={"/kaurpemb"}>
                <span>&#11208; </span> Kaur Pembangunan
              </Link>
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <Link to={"/kaurpm"}>
                <span>&#11208; </span> Kaur Pemberdayaan Masyarakat
              </Link>
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <Link to={"/kaurkr"}>
                <span>&#11208; </span> Kaur Kesejahteraan Rakyat
              </Link>
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <Link to={"/kaurumum"}>
                <span>&#11208; </span> Kaur Umum
              </Link>
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <Link to={"/kaurkeuang"}>
                <span>&#11208; </span> Kaur Keuangan
              </Link>
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <Link to={"/kkt"}>
                <span>&#11208; </span> Ketua Karang Taruna
              </Link>
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <Link to={"/pranata"}>
                <span>&#11208; </span> Pranata Komputer
              </Link>
            </div>
          </div>
          <div className="btn btn-left btn-ghost">
            <div className="btn-fill-left">
              <Link to={"/bmd"}>
                <span>&#11208; </span> Badan Musyawarah Desa
              </Link>
            </div>
          </div>
        </div>
        <div className="structure-content-right">
          <div className="">
            <div>Pranata Komputer</div>
          </div>
        </div>
      </div>
    </div>
  );
};
