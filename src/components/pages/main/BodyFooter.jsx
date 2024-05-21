import React from "react";
import "../../../styles/footer.css";

export const BodyFooter = () => {
  return (
    <div className="all-maps">
      <div className="body-footer">
        <div className="content-body-footer">
          <i>Maps</i>
        </div>
      </div>
      <div className="map-and-table">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127667.11302060922!2d120.86224570892428!3d0.6031106361861582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x327703b3a9d03daf%3A0x5a91139263500ab6!2sKotanagaya%2C%20Kec.%20Bolano%20Lambunu%2C%20Kabupaten%20Parigi%20Moutong%2C%20Sulawesi%20Tengah!5e0!3m2!1sid!2sid!4v1716267002406!5m2!1sid!2sid"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <table className="info-table">
          <tbody>
            {" "}
            <tr>
              {" "}
              <th width="40%" nowrap="">
                Kode PUM
              </th>
              <td width="1px">:</td> <td>3217082001</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th width="40%" nowrap="">
                Tahun Pembentukan
              </th>
              <td width="1px">:</td> <td>1966</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th width="40%" nowrap="">
                Dasar Hukum
              </th>
              <td width="1px">:</td> <td nowrap="">141.1/KEP.18-PEM/1966</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th width="40%" nowrap="">
                Tipologi
              </th>
              <td width="1px">:</td> <td>PERINDUSTRIAN/JASA</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th width="40%" nowrap="">
                Klasifikasi
              </th>
              <td width="1px">:</td> <td>SWAKARYA</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th width="40%" nowrap="">
                Kategori
              </th>
              <td width="1px">:</td> <td nowrap="">MULA</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th width="40%" nowrap="">
                Luas Wilayah
              </th>
              <td width="1px">:</td> <td nowrap="">305.28 ha</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th width="40%" nowrap="">
                Batas Sebelah Utara
              </th>
              <td width="1px">:</td> <td nowrap="">Desa Utara</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th width="40%" nowrap="">
                Batas Sebelah Selatan
              </th>
              <td width="1px">:</td> <td nowrap="">Desa Selatan</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th width="40%" nowrap="">
                Batas Sebelah Timur
              </th>
              <td width="1px">:</td> <td nowrap="">Desa Timur</td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <th width="40%" nowrap="">
                Batas Sebelah Barat
              </th>
              <td width="1px">:</td> <td nowrap="">Desa Barat</td>{" "}
            </tr>{" "}
          </tbody>
        </table>
      </div>
    </div>
  );
};
