import React from "react";
import { Link } from "react-router-dom";
import "../../../../styles/style.css";

export const Profilstaff = () => {
  return (
    <div>
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
              <Link to="/profilstaff">/ Profil Staff&nbsp;</Link>
            </li>
          </ul>
        </div>
        <div className="profile-staff-content ">
          <div className="profile-staff-box-left">
            <div className="card-content-staff bg-white p-4 shadow-lg rounded-lg">
              <div>
                <div className="avatar flex items-center justify-center mb-4">
                  <div className="rounded-xl overflow-hidden border-4 border-gray-200">
                    <img
                      src="/img/structure/images1.jpg"
                      alt="Profile Picture"
                      className="w-32 h-32 object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <table className="w-full table table-profile-staff">
                    <tbody>
                      <div>
                        <tr>
                          <td>Nama &emsp; &emsp; &nbsp;</td>
                          <td> : &nbsp; Kades Kotanagaya</td>
                        </tr>
                      </div>
                      <div>
                        <tr>
                          <td>Jabatan&emsp; &emsp; </td>
                          <td> : &nbsp; Kepala Desa</td>
                        </tr>
                      </div>
                      <div>
                        <tr>
                          <td>NIP &emsp; &emsp;&emsp; &nbsp; </td>
                          <td> : &nbsp; -</td>
                        </tr>
                      </div>
                    </tbody>
                  </table>
                  <div></div>
                </div>
              </div>
              <div className="bio-profile">
                <div className="content-title">Biodata</div>
                <div className="content-fill">
                  <p>
                    Kepala desa (disingkat kades) atau petinggi desa adalah
                    pejabat pemerintah desa yang mempunyai wewenang, tugas dan
                    kewajiban untuk menyelenggarakan pembangunan desa,
                    pengembangan masyarakat desa, pemberdayaan masyarakat desa
                    dan melaksanakan tugas dari Pemerintah. Masa jabatan
                    kepala desa adalah 6 (enam) tahun, dan dapat diperpanjang
                    lagi untuk 3 (tiga) kali masa jabatan berikutnya
                    berturut-turut atau tidak berturut-turut. Kepala desa
                    tidak bertanggungjawab kepada camat, tetapi hanya
                    dikoordinasikan saja oleh camat. Kepala desa
                    bertanggungjawab atas penyelenggarakan pemerintahan desa,
                    pelaksanakan pembangunan desa, pembinaan kemasyarakatan
                    desa, dan pemberdayaan masyarakat desa.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-profile-staff-right">
            <div>
              <ul className="menu bg-base-200 w-56 rounded-box">
                <li>
                  <h2 className="menu-title">Pegawai Lainnya</h2>
                  <ul>
                    <li>
                      <a>Sekretaris</a>
                    </li>
                    <li>
                      <a>Kaur Pemerintahan</a>
                    </li>
                    <li>
                      <a>Kaur Pembangunan</a>
                    </li>
                    <li>
                      <a>Kesejahteraan Rakyat</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
