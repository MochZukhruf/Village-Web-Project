import React from "react";
import { Link } from "react-router-dom";
import "../../../../styles/goverment.css";

export const BMD = () => {
  return (
    <div className="mx-96 structure-content-all">
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
            <Link className="link-next" to="/structure">
              Struktur Organisasi &nbsp;
            </Link>
            <Link to="/bmd">/&nbsp; Badan Musyawarah Desa</Link>
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
          <div className="title-structure-content">
            <div>Badan Musyawarah Desa</div>
          </div>
          <div className="table-data-structure">
            <table className="table table-structure">
              <tbody>
                <tr>
                  <th>Jabatan</th>
                  <td>&emsp;&emsp;:&emsp;Badan Musyawarah Desa</td>
                  <td></td>
                </tr>
                <tr>
                  <th>Nama Pejabat</th>
                  <td>&emsp;&emsp;:&emsp;-</td>
                  <td></td>
                </tr>
                <tr>
                  <th>NIP</th>
                  <td>&emsp;&emsp;:&emsp;-</td>
                  <td></td>
                </tr>
              </tbody>
              <div className="btn-structure-staff">
                <button className="btn " type="button">
                  Detail Pegawai
                </button>
              </div>
            </table>
            <div className="content-structure-below-first">
              <strong>&nbsp;- No Description</strong>
            </div>
            {/* <div className="content-structure-below-second">
              <table>
                <tbody>
                  <div className="fill-head-structure">
                    <tr>
                      <td className="number-content align-top">1.</td>
                      <td className="content-fill-structure">
                        Menyelenggarakan pemerintahan desa
                      </td>
                    </tr>
                  </div>
                  <div className="fill-head-structure">
                    <tr>
                      <td className="number-content align-top">2.</td>
                      <td className="content-fill-structure">
                        Melaksanakan pembangunan desa
                      </td>
                    </tr>
                  </div>
                  <div className="fill-head-structure">
                    <tr>
                      <td className="number-content align-top">3.</td>
                      <td className="content-fill-structure">
                        Melaksanakan pembinaan masyarakat desa
                      </td>
                    </tr>
                  </div>
                  <div className="fill-head-structure">
                    <tr>
                      <td className="number-content align-top">4.</td>
                      <td className="content-fill-structure">
                        Memberdayakan masyarakat desa
                      </td>
                    </tr>
                  </div>
                </tbody>
              </table>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
