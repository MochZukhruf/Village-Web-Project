import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/profile.css";

export const History = () => {
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
            <Link to="/history">History</Link>
          </li>
        </ul>
      </div>
      <div className="content-history">
        <div className="header-content">
          <h1>Sejarah Desa Kotanagaya</h1>
        </div>
        <div className="content-title">Awal Terbentuknya Desa Kotanagaya</div>
        <div className="content-fill">
          <p>
            Desa Kotanagaya, yang terletak di Kecamatan Bolano Lambunu,
            Kabupaten Parigi Moutong, Sulawesi Tengah, memiliki sejarah panjang
            yang bermula dari prakarsa masyarakat setempat. Desa ini terbentuk
            berdasarkan kebutuhan dan inisiatif warga untuk mengatur dan
            mengurus urusan pemerintahan serta kepentingan masyarakat sesuai
            dengan hak asal usul dan tradisi yang diakui dalam sistem
            pemerintahan Negara Kesatuan Republik Indonesia.
          </p>
        </div>
        <div className="content-title">Pembentukan Desa</div>
        <div className="content-fill">
          <p>
            Desa Kotanagaya didirikan dengan memperhatikan asal usul serta
            kondisi sosial dan budaya masyarakat setempat. Pembentukan desa ini
            bisa terjadi melalui beberapa cara:
          </p>
        </div>
        <table>
          <tbody>
            <div className="fill-head">
              <tr>
                <td className="number-content align-top">1.</td>
                <td className="content-fill">
                  Penggabungan beberapa desa atau bagian desa yang bersandingan.
                </td>
              </tr>
            </div>
            <div className="fill-head">
              <tr>
                <td className="number-content align-top">2.</td>
                <td className="content-fill">
                  Pemekaran dari satu desa menjadi dua desa atau lebih.
                </td>
              </tr>
            </div>
            <div className="fill-head">
              <tr>
                <td className="number-content align-top">3.</td>
                <td className="content-fill">
                  Pembentukan desa baru di luar desa yang telah ada.
                </td>
              </tr>
            </div>
          </tbody>
        </table>
        <div className="content-title">Perubahan Status Desa</div>
        <div className="content-fill">
          <p>
            Desa Kotanagaya dapat diubah statusnya menjadi kelurahan berdasarkan
            prakarsa Pemerintah Desa bersama Badan Permusyawaratan Desa (BPD)
            dengan memperhatikan saran dan pendapat masyarakat setempat. Jika
            berubah menjadi kelurahan, lurah dan perangkatnya akan diisi dari
            pegawai negeri sipil, dan kekayaan desa akan dikelola oleh kelurahan
            untuk kepentingan masyarakat setempat.
          </p>
        </div>
        <div className="content-title">Ciri Budaya dan Klasifikasi Desa</div>
        <div className="content-fill">
          <p>
            Desa Kotanagaya memiliki ciri budaya khas yang sangat penting serta
            adat istiadat lokal yang kuat. Berdasarkan aktivitas dan tingkat
            perkembangannya, desa ini dapat diklasifikasikan sebagai berikut:
          </p>
        </div>
        <div className="content-fill">
          <strong>Berdasarkan Aktivitas</strong>
        </div>
        <table>
          <tbody>
            <div className="fill-head">
              <tr>
                <td className="number-content align-top">1.</td>
                <td className="content-fill">
                  <strong>Desa Agraris:</strong> Penduduk desa sebagian besar
                  bekerja di bidang pertanian dan perkebunan.
                </td>
              </tr>
            </div>
            <div className="fill-head">
              <tr>
                <td className="number-content align-top">2.</td>
                <td className="content-fill">
                  <strong>Desa Industri:</strong> Ada kegiatan industri kecil
                  rumah tangga, namun skala masih terbatas.
                </td>
              </tr>
            </div>
            <div className="fill-head">
              <tr>
                <td className="number-content align-top">3.</td>
                <td className="content-fill">
                  <strong>Desa Nelayan: </strong> Beberapa penduduk mungkin juga
                  terlibat dalam kegiatan perikanan.
                </td>
              </tr>
            </div>
          </tbody>
        </table>
        <strong>Berdasarkan Tingkat Perkembangan</strong>
        <div className="content-sub-title">
          <table>
            <tbody>
              <tr>
                <td className="number-content align-top">1.</td>
                <td>
                  <strong>Desa Swadaya</strong>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <ul className="custom-bullets">
                    <li>Terisolasi dengan daerah lain.</li>
                    <li>Penduduknya jarang.</li>
                    <li>Mata pencaharian homogen dan bersifat agraris.</li>
                    <li>Memegang teguh adat.</li>
                    <li>Teknologi masih rendah.</li>
                    <li>Sarana dan prasarana sangat kurang.</li>
                    <li>Hubungan antarmanusia sangat erat.</li>
                    <li>Pengawasan sosial dilakukan oleh keluarga.</li>
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
                  <strong>Desa Swakarya</strong>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <ul className="custom-bullets">
                    <li>Adat istiadat sudah tidak mengikat penuh.</li>
                    <li>Mulai menggunakan alat dan teknologi modern.</li>
                    <li>
                      Tidak terisolasi walau letaknya jauh dari pusat
                      perekonomian.
                    </li>
                    <li>
                      Memiliki tingkat perekonomian, pendidikan, dan prasarana
                      yang lebih baik.
                    </li>
                    <li>Jalur lalu lintas sudah mulai lancar.</li>
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
                  <strong>Desa Swasembada</strong>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <ul className="custom-bullets">
                    <li>Berlokasi di ibu kota kecamatan.</li>
                    <li>Tingkat kepadatan penduduk tinggi.</li>
                    <li>Tidak terikat dengan adat istiadat.</li>
                    <li>
                      Memiliki fasilitas-fasilitas yang memadai dan lebih maju.
                    </li>
                    <li>Partisipasi masyarakat efektif.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content-title">Kesimpulan</div>
        <div className="content-fill">
          <p>
            Desa Kotanagaya adalah salah satu desa di Kabupaten Parigi Moutong
            yang berkembang dengan memperhatikan potensi lokal dan kebutuhan
            masyarakatnya. Dengan sejarah yang kaya dan ciri khas budaya yang
            kuat, desa ini terus berupaya untuk meningkatkan kesejahteraan
            warganya melalui berbagai kegiatan pembangunan yang berkelanjutan.
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
