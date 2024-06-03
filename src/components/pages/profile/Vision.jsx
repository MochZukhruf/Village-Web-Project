import React from "react";
import "../../../styles/style.css";
import { Link } from "react-router-dom";

export const Vision = () => {
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
            <Link to="/vision">Visi dan Misi Desa</Link>
          </li>
        </ul>
      </div>
      <div className="content-vision">
        <div className="header-content">
          <h1>Visi dan Misi Desa</h1>
        </div>
        <div className="content-fill">
          <p>
            Menu Visi Misi Desa, adalah menu yang berisi informasi terkait VISI
            MISI Desa yang tertuang dalam RPJMDES yang merupakan arah
            pembangunan desa selama kepala desa menjabat atau 6 tahun kedepan.
          </p>
        </div>
        <div className="content-fill">
          <p>
            Visi adalah suatu pandangan ke depan tentang arah, target,
            cita-cita, tujuan pada suatu lembaga, perusahaan, organisasi dan
            lain-lain, lebih sederhananya visi dapat di artikan sebagai suatu
            tujuan perusahaan, organisasi atau lembaga, mengenai apa yang harus
            dilakukan untuk mencapai tujuannya di masa yang akan datang atau
            masa depan.
          </p>
        </div>
        <div className="content-fill">
          <p>
            Misi adalah suatu pernyataan tentang apa yang harus dikerjakan oleh
            perusahaan, organisasi atau lembaga sebagai upaya untuk mewujudkan
            Visi. Misi dapat di artikan sebagai tujuan dan alasan mengapa
            perusahaan, organisasi atau lembaga itu dibuat. Misi akan memberikan
            arah sekaligus batasan-batasan dalam proses pencapaian tujuan.
          </p>
        </div>
        <div className="content-title">Apa itu Visi Calon Kepala Desa?</div>
        <div className="content-fill">
          <p>
            Kita telah mengetahui pengertian visi dan misi secara umum. Lantas
            apa itu visi calon kepala desa? Visi Calon Kepala Desa adalah suatu
            gambaran atas cita-cita atau impian dari Calon Kepala Desa yang akan
            dicapai selama menjabat atau menjadi Kepala Desa yaitu dalam jangka
            waktu 6 (enam) tahun periode masa jabatan.
          </p>
        </div>
        <div className="content-fill">
          <p>
            Sehingga ketika calon kepala desa ini nantinya terpilih menjadi
            Kepala Desa, sudah memiliki gambaran yang jelas mengenai cita-cita
            dan tujuan dalam masa menjabat, tanpa perlu bingung lagi, sehingga
            jalannya pemerintahan dapat berjalan lancar dan sesuai dengan
            harapan masyarakat.
          </p>
        </div>
        <div className="content-fill">
          <p>
            Pengertian Visi Calon Kepala Desa dalam Permendagri 112 Tahun 2014
            (Pasal 28 Ayat 2) adalah “Keinginan yang ingin diwujudkan dalam
            jangka waktu masa jabatan Kepala Desa”.
          </p>
        </div>
        <div className="content-title">Apa itu Misi Calon Kepala Desa?</div>
        <div className="content-fill">
          <p>
            Seperti telah disebutkan sebelumnya, secara umum misi ada karena
            telah adanya Visi. Misi sebagai strategi atau cara dan proses dalam
            mencapai visi. Misi Calon Kepala Desa adalah suatu cara atau
            strategi yang akan dilakukan untuk mendukung pencapaian Visi Calon
            Kepala Desa.
          </p>
        </div>
        <div className="content-fill">
          <p>
            Pengertian Misi Calon Kepala Desa menurut Permendagri Nomor 112
            Tahun 2014 (Pasal 28 Ayat 3) adalah “berisi program yang akan
            dilaksanakan dalam rangka mewujudkan visi”.
          </p>
        </div>
        <div className="content-fill">
          <p>
            Maka dapat diartikan, Misi Calon Kepala Desa adalah suatu konsep
            perencanaan, strategi dan disertai tindakan atau program yang akan
            dilaksanakan untuk menjabarkan atau mewujudkan visi Calon Kepala
            Desa.
          </p>
        </div>
      </div>
    </div>
  );
};
