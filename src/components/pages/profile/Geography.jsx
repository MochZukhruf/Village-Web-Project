import React from "react";
import { Link } from "react-router-dom";

export const Geography = () => {
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
            <Link to="/geography">Geografis Desa</Link>
          </li>
        </ul>
      </div>
      <div className="content-geography">
            <div className="header-content">
            <h1>Geografis Desa</h1>
            </div>
        <div className="br-geo">
          <br />
        </div>
        <div className="content-fill">
          <p>
            Menu Geografis Desa, Menu ini berisi informasi terkait kewilayahan
            desa dari kondisi geografisnya,
          </p>
        </div>
        <div className="content-fill">
          <p>
            Kondisi geografis adalah kondisi atau keadaan suatu wilayah dengan
            dilihat dari keadaannya yang berkaitan dengan aspek geografis.
            Aspek-aspek itu meliputi :
          </p>
        </div>
        <div>
          <ul className="custom-bullets">
            <li>
              Letak, terkait dengan lokasi geografis, luas, bentuk dan posisi
              koordinat dari peta
            </li>
            <li>
              Relief, terkait dengan bagaimana bentuk permukaan atau kontur dan
              juga ketinggiannya.
            </li>
            <li>
              Iklim dan Cuaca, terkait dengan bagaimana cuaca dalam waktu
              tertentu di sebuah wilayah. Iklim terkait dengan bagaimana
              rata-rata terjadi dalam waktu tertentu
            </li>
            <li>
              Jenis Tanah, terkait dengan bagaimana kondisi tanah dan juga
              bagaimana sejarah proses terbentuknya tanah. Bagaimana jenis tanah
              yang ada di sebuah lokasi. Misalnya jenis tanah aluvial atau tanah
              vulkanik dan sebagainya
            </li>
            <li>
              Sumber daya, hal ini terkait dengan bagaimana sumber daya air yang
              ada di sekitar wilayah itu. Apakah air tanah bagus dan tersedia.
              Bagaimana sumber air berasal dan sebagainya. Selain itu juga
              dilihat sumber daya mineral, apakah terdapat sumber mineral
              seperti minyak bumi, batu bara, bahan tambang pasir dan
              sebagainya.
            </li>
            <li>
              Flora dan Fauna, terkait dengan bagaimana keadaan tumbuhan dan
              juga jenis hewan yang mendiami sebuah wilayah itu.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
