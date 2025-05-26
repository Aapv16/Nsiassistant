import NavigationBar from "../components/NavigationBar";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Advice from "../components/Advice";
import pivas1 from "../assets/lucu/pivas1.png";
import pivas2 from "../assets/lucu/pivas2.png";
import pivas3 from "../assets/lucu/pivas3.png";
import pivas4 from "../assets/lucu/pivas4.png";
import pivas5 from "../assets/lucu/pivas5.png";
import at from "../assets/lucu/at.png";

const Pivaspage = () => {
  const [active, setActive] = useState("form");
  return (
    <>
      <NavigationBar logo="Divas Asistent" />

      <nav className="custom-nav pt-4 mt-5 mx-auto ">
        <div
          className="container mx-auto nav nav-tabs border-bottom border-warning"
          id="nav-tab"
          role="tablist"
        >
          <button
            onClick={() => setActive("form")}
            className={
              active === "form" ? "nav-item active" : "nav-link link-secondary"
            }
            // className="nav-link active link-secondary"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Form
            <a href="https://aapv16.github.io/forminput/"> </a>
          </button>
          <button
            onClick={() => setActive("pivas")}
            className={
              active === "pivas" ? "nav-item active" : "nav-link link-secondary"
            }
            // className="nav-link link-secondary link-underline-opacity-25 link-underline-opacity-100-hover "
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Pivas
          </button>
        </div>
      </nav>

      <div className="tab-content" id="nav-tabContent">
        {/* start body 1 */}
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabindex="0"
        >
          <>
            <div className="card mt-1 container" style={{ width: "22rem" }}>
              <img src={at} className="card-img-top mt-3" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Divas Score</h5>
                <p
                  className="text-justify w-100 "
                  style={{ textAlign: "justify" }}
                >
                  Penggunaan Tool DIVA adalah untuk memastikan pengkajian akses
                  IV dilakukan sebelum kanulasi intravena dan melakukan
                  ekskalasi sesuai skor yang didapatkan.
                </p>
                <a
                  href="https://aapv16.github.io/forminput/"
                  className="btn btn-primary opacity-75 border border-warning"
                >
                  Hitung Divas <i class="bi bi-calculator"></i>
                </a>
              </div>
            </div>
          </>
        </div>
        {/* end body 1 */}

        {/* start body 2 */}
        <div
          className=" tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabindex="0"
        >
          <>
            <div className="container col-lg-8" id="accordionFlushExample">
              <div className="row">
                <div className="Col-lg-6">
                  <Advice
                    warna="success"
                    ikon="bi-bandaid"
                    id="1"
                    image1={pivas1}
                    body="Tidak ada nyeri atau tanda plebitis"
                    judul="Pivas 0 "
                    poin1="◉ Lakukan observasi dan dokumentasi pada atau tanda-tanda setiap shift
                    phlebitis."
                    // image1={nacl}
                    // image2={chlorixidine}

                    displayimg2="d-none"
                    displayimg3="d-none"
                  />
                  <Advice
                    warna="warning"
                    ikon="bi-bandaid"
                    id="2"
                    judul="Pivas 1"
                    body="Nyeri/kemerahan diarea insersi."
                    image1={pivas2}
                    poin1="◉ Lepas IV kanula dan pasang infus baru
                    ditempat lain.
                    "
                    poin2="◉ Observasi pada kedua lokasi penusukan
                    dan dokumentasikan.
                    "
                    // image1={batigras}
                    // image2={spon}
                    displayimg2="d-none"
                    displayimg3="d-none"
                  />
                  <Advice
                    warna="warning"
                    ikon="bi-bandaid"
                    id="3"
                    judul="Pivas 2"
                    image1={pivas3}
                    body="Nyeri, pembengkakan, kemerahan diarea insersi dan vena teraba"
                    poin1="◉ Lepas IV kanula dan pasang infus baru
                    ditempat lain.
                    "
                    poin2="◉ Observasi pada kedua lokasi penusukan
                    dan dokumentasikan.
                    "
                    poin3="◉ Kolaborasi dengan medis"
                    poin4="◉ Dokumentasikan dan buat laporan insiden medis"
                    // image1={kasa}
                    // image2={tullgras}
                    displayimg2="d-none"
                    displayimg3="d-none"
                  />

                  <Advice
                    warna="danger"
                    ikon="bi bi-exclamation-triangle"
                    id="4"
                    judul="Pivas 3"
                    image1={pivas4}
                    body="Nyeri, pembengkakan, indurasi, kemerahan sepanjang vena ≥ 3 cm dari lokasi insersi, ada pus"
                    poin1="◉ Lepas Iv Kanula, kirim ujung kanula untuk kultur dan uji sensitivitas"
                    poin2="◉ Koordinasi dengan ICN team, Lapor dokter, jika ada demam, periksa kultur darah."
                    poin3="◉ Dokumentasikan dan buat laporan insiden medis"
                    displayimg2="d-none"
                    displayimg3="d-none"
                  />

                  <Advice
                    warna="danger"
                    ikon="bi bi-exclamation-triangle"
                    id="5"
                    judul="Pivas 4"
                    image1={pivas5}
                    body="Semua tanda-tanda diatas dan ada kerusakan jaringan."
                    poin1="◉ Lepas Iv Kanula, kirim ujung kanula untuk kultur dan uji sensitivitas"
                    poin2="◉ Koordinasi dengan ICN team, Lapor dokter, jika ada demam, periksa kultur darah."
                    poin3="◉ Dokumentasikan dan buat laporan insiden medis"
                    displayimg2="d-none"
                    displayimg3="d-none"
                  />
                </div>
              </div>
            </div>
          </>
          {/* end body 2 */}
        </div>
        {/* end body 2*/}
      </div>
    </>
  );
};

export default Pivaspage;
