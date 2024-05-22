import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/profile.css";

export const Aboutus = () => {
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
            <Link to="/about">Tentang Kami</Link>
          </li>
        </ul>
      </div>
      <div className="content-about">
        <div className="header-content">
          <h1>Selamat Datang di Website Sistem Informasi Desa Kotanagaya</h1>
        </div>
        <div className="content-title">Tentang Kami</div>
        <div className="content-fill">
          <p>
            Selamat datang di situs resmi Desa Kotanagaya, Kecamatan Bolano
            Lambunu, Kabupaten Parigi Moutong, Sulawesi Tengah. Website ini
            dibuat untuk memberikan informasi yang lengkap dan akurat mengenai
            Desa Kotanagaya kepada masyarakat, baik yang berada di dalam maupun
            di luar desa.
          </p>
        </div>
        <div className="content-title">Tujuan Kami</div>
        <div className="content-fill">
          <p>Website ini bertujuan untuk:</p>
        </div>
        <table>
          <tbody>
            <div className="fill-head">
              <tr>
                <td className="number-content align-top">1.</td>
                <td className="content-fill">
                  <strong>Transparansi Informasi:</strong> Menyediakan akses
                  mudah dan transparan terhadap informasi publik mengenai
                  administrasi desa, kegiatan masyarakat, serta perkembangan
                  pembangunan di Desa Kotanagaya.
                </td>
              </tr>
            </div>
            <div className="fill-head">
              <tr>
                <td className="number-content align-top">2.</td>
                <td className="content-fill">
                  <strong>Pelayanan Publik:</strong> Mempermudah proses
                  pelayanan administrasi bagi masyarakat desa seperti pembuatan
                  surat-surat penting, pengaduan, dan permintaan informasi.
                  Kotanagaya.
                </td>
              </tr>
            </div>
            <div className="fill-head">
              <tr>
                <td className="number-content align-top">3.</td>
                <td className="content-fill">
                  <strong>Komunikasi dan Interaksi: </strong> Meningkatkan
                  komunikasi antara pemerintah desa dengan masyarakat serta
                  menyediakan platform interaktif untuk berbagi informasi dan
                  aspirasi.
                </td>
              </tr>
            </div>
          </tbody>
        </table>
        <div className="content-title">Fitur-Fitur Website</div>

        <div className="content-sub-title">
          <table>
            <tbody>
              <tr>
                <td className="number-content align-top">1.</td>
                <td>
                  <strong>Profil Desa</strong>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <ul className="custom-bullets">
                    <li>Sejarah Desa</li>
                    <li>Visi dan Misi</li>
                    <li>Struktur Pemerintahan</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content-sub-title">
          <table>
            <tbody>
              <tr>
                <td className="number-content align-top">2.</td>
                <td>
                  <strong>Layanan Masyarankat</strong>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <ul className="custom-bullets">
                    <li>Formulir Online untuk Pelayanan Administrasi</li>
                    <li>
                      Informasi tentang Layanan Kesehatan, Pendidikan, dan
                      Sosial
                    </li>
                    <li>Pengaduan dan Saran</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content-sub-title">
          <table>
            <tbody>
              <tr>
                <td className="number-content align-top">3.</td>
                <td>
                  <strong>Berita dan Kegiatan</strong>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <ul className="custom-bullets">
                    <li>Berita Terbaru</li>
                    <li>Agenda Kegiatan Desa</li>
                    <li>Dokumentasi Acara</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content-sub-title">
          <table>
            <tbody>
              <tr>
                <td className="number-content align-top">4.</td>
                <td>
                  <strong>Data dan Statistik</strong>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <ul className="custom-bullets">
                    <li>Data Kependudukan</li>
                    <li>Data Pertanian dan Ekonomi</li>
                    <li>Statistik Kesejahteraan</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content-sub-title">
          <table>
            <tbody>
              <tr>
                <td className="number-content align-top">5.</td>
                <td>
                  <strong>Galeri</strong>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <ul className="custom-bullets">
                    <li>Foto dan Video Kegiatan Desa</li>
                    <li>Potensi Wisata dan Budaya</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content-title">Tentang Kami</div>
        <div className="content-fill">
          <p>
            Selamat datang di situs resmi Desa Kotanagaya, Kecamatan Bolano
            Lambunu, Kabupaten Parigi Moutong, Sulawesi Tengah. Website ini
            dibuat untuk memberikan informasi yang lengkap dan akurat mengenai
            Desa Kotanagaya kepada masyarakat, baik yang berada di dalam maupun
            di luar desa.
          </p>
        </div>
      </div>
      <div className="footer-about">
        <i>
          Terima kasih telah mengunjungi website Desa Kotanagaya. Bersama kita
          wujudkan desa yang maju dan sejahtera!
        </i>
      </div>
    </div>
  );
};
