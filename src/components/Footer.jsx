import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-all">
      <div className="mx-96">
        <footer className="footer p-10 text-neutral-content">
          <nav className="footer-content">
            <h6 className="footer-title">Profil</h6>
            <p>
              Website desa dibangun sebagai bagian dari SISTEM INFORMASI DESA
              yang berfungsi sebagai portal informasi, transparansi, dan
              sosialisasi pemerintah terkait tata kelola pembangunan kawasan
              perdesaan (pembangunan, pembinaan dan pemberdayaan) yang dirasakan
              langsung oleh masyarakat sebagai penerima manfaat. Website desa
              jug…
            </p>
            <Link to="/about">Selengkapnya &#10140;</Link>
          </nav>
          <nav className="footer-content">
            <h6 className="footer-title">Tentang</h6>
            <td>
              <ul className="custom-bullets">
                <li>
                  <a href="https://www.parigimoutongkab.go.id/">
                    Kabupaten Parigi Moutong
                  </a>
                </li>
                <li>
                  <a href="https://www.kemendagri.go.id/">KEMENDAGRI</a>
                </li>
                <li>
                  <a href="https://www.kemendesa.go.id/">KEMENDESA</a>
                </li>
                <li>
                  <a href="https://www.kominfo.go.id/">KOMINFO</a>
                </li>
              </ul>
            </td>
          </nav>
          <nav className="footer-content">
            <h6 className="footer-title">Kontak Kami</h6>
            <p>
              Kotanagaya, Kec. Bolano Lambunu, Kabupaten Parigi Moutong,
              Sulawesi Tengah 94479
            </p>
            <br />
            <p className="fa fa-phone"></p>
          </nav>
        </footer>
      </div>
    </div>
  );
};
