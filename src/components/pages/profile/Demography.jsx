import React from "react";
import { Link } from "react-router-dom";

export const Demography = () => {
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
            <Link to="/demography">Demografi Desa</Link>
          </li>
        </ul>
      </div>
      <div className="content-demography">
        <div className="header-content">
          <h1>Geografis Desa</h1>
        </div>
        <div className="br-demo">
          <br />
        </div>
        <div className="content-fill">
          <p>
            <strong>Menu Demografi </strong> adalah menu yang berisi informasi
            dinamika kependudukan di desa. Demografi meliputi ukuran, struktur,
            dan distribusi penduduk, serta bagaimana jumlah penduduk berubah
            setiap waktu akibat kelahiran, kematian, migrasi, serta penuaan.
            Analisis kependudukan dapat merujuk masyarakat secara keseluruhan
            atau kelompok tertentu yang didasarkan kriteria seperti rentang
            usia, pendidikan, pekerjaan/mata pencaharian, kewarganegaraan,
            agama, atau etnisitas tertentu,dll
          </p>
        </div>
      </div>
    </div>
  );
};
