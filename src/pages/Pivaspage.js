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

const Pivaspage = () => {
  const [nama, setNama] = useState("");
  const [noRM, setNoRM] = useState("");
  const [penampakan, setPenampakan] = useState("0");
  const [teraba, setTeraba] = useState("0");
  const [riwayat, setRiwayat] = useState("0");
  const [faktor, setFaktor] = useState("1");
  const [totalSkor, setTotalSkor] = useState(" Hasil");
  const [boxInfo, setBoxInfo] = useState(false);
  const [boxStyle, setBoxStyle] = useState("");
  const [modalInfo, setModalInfo] = useState(false);
  const [modalBody, setModalBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(e);
    const total =
      Number(penampakan) + Number(teraba) + Number(riwayat) + Number(faktor);
    setTotalSkor(total);

    if (total >= 0 && total <= 3) {
      setBoxStyle("success");
    }
    if (total >= 4 && total <= 5) {
      setBoxStyle("warning");
    }
    if (total >= 6 && total <= 10) {
      setBoxStyle("danger");
    }
  };

  const handleClick = () => {
    if (nama.trim() === "" || noRM.trim() === "") {
      return;
    }
    setBoxInfo(true);
  };

  const handleClickInfo = () => {
    if (totalSkor >= 0 && totalSkor <= 3) {
      // alert("Lakukan pemasangan IV kateter");
      setModalInfo(true);
      setModalBody(" ✅ Lakukan pemasangan IV kateter");
      // window.location.href = "/vidio";
    }
    if (totalSkor >= 4 && totalSkor <= 5) {
      setModalBody(
        "Pemasangan akses diberikan kepada petugas yang lebih kompeten. Konsul ke tim Infus atau Spesialis akses vaskular."
      );
    }
    if (totalSkor >= 6 && totalSkor <= 10) {
      setModalBody(
        "Resiko tinggi 🚨 : Pertimbangkan pemasangan akses emergency (CVC, IO). Konsul Spesialis akses vaskular."
      );

      // window.location.href = "/suspect";
    }
  };

  return (
    <>
      <NavigationBar logo="Divas Asistent" />
      {/* start modal box */}
      <>
        <div
          className="modal fade"
          show={modalInfo} //penting
          onHide={() => setModalInfo(false)} //penting
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog modal-dialog-centered ">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Advice
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body modal-sm">{modalBody} </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                {/* <button type="button" className="btn btn-primary">
                  Save changes
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </>
      {/* end modal box */}

      <nav className="custom-nav pt-4 mt-5 mx-auto ">
        <div
          className="container mx-auto nav nav-tabs border-bottom border-warning"
          id="nav-tab"
          role="tablist"
        >
          <button
            className="nav-link active link-secondary"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Form
          </button>
          <button
            className="nav-link link-secondary link-underline-opacity-25 link-underline-opacity-100-hover "
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
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabindex="0"
        >
          <>
            {/* <h3 className="text-center mx-auto pt-5 mt-5 mb-3 mr-lg border-bottom w-50">
              Divas Asistent
            </h3> */}
            <div className="Container mx-4 mb-3 ">
              <div className=" col-lg-4 mx-auto border border-warning p-2 rounded-2 mt-1">
                <form onSubmit={handleSubmit}>
                  {/* name */}
                  <div className="mb-1 ">
                    <h6>Nama Lengkap :</h6>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      required
                      placeholder="Nama Lengkap"
                    />
                  </div>
                  {/* name */}
                  {/* no MR */}
                  <div class="mb-1">
                    <h6>No RM :</h6>
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      value={noRM}
                      onChange={(e) => setNoRM(e.target.value)}
                      required
                      placeholder="no Rekam medis"
                    />
                  </div>
                  {/* no MR */}
                  {/* param 1 */}
                  <h6 className="opacity-100">Penampakan vena :</h6>
                  <Form.Select
                    size="sm"
                    className="mb-1"
                    value={penampakan}
                    onChange={(e) => setPenampakan(e.target.value)}
                    aria-label="Default select example"
                    placeholder="name@example.com"
                  >
                    <option value="0">Banyak vena yang tampak </option>
                    <option value="1">Sedikit vena yang tampak </option>
                    <option value="2">Tidak ada vena yang tampak </option>
                  </Form.Select>
                  {/* param 1 */}
                  {/* param 2 */}
                  <h6 className="opacity-100">Vena teraba :</h6>
                  <Form.Select
                    size="sm"
                    className="mb-1"
                    aria-label="Default select example"
                    value={teraba}
                    onChange={(e) => setTeraba(e.target.value)}
                  >
                    <option value="0">Banyak vena yang teraba </option>
                    <option value="1">Sedikit vena yang teraba </option>
                    <option value="2">Tidak ada vena yang teraba </option>
                  </Form.Select>
                  {/* param 2 */}
                  {/* param 3 */}
                  <h6 className="opacity-100">Riwayat infus sulit :</h6>
                  <Form.Select
                    size="sm"
                    className="mb-1"
                    aria-label="Default select example"
                    value={riwayat}
                    onChange={(e) => setRiwayat(e.target.value)}
                  >
                    <option value="0">Tidak ada</option>
                    <option value="1">Dilaporkan beberapa kali </option>
                    <option value="2">Infus sulit</option>
                  </Form.Select>
                  {/* param 3 */}
                  {/* param 4 */}
                  <h6 className="opacity-100">Faktor tambahan :</h6>
                  <Form.Select
                    size="sm"
                    className="mb-2"
                    aria-label="Default select example"
                    value={faktor}
                    onChange={(e) => setFaktor(e.target.value)}
                  >
                    <option value="0">Tidak ada</option>
                    <option value="1">
                      Pasien anak, adanya kesulitan dan kebutuhan akses mendesak
                      (urgent)
                    </option>
                    <option value="2">Penyakit dan kebutuhan emergency</option>
                  </Form.Select>
                  <button
                    type="submit"
                    onClick={handleClick}
                    className="btn btn-primary w-100"
                  >
                    Hitung
                  </button>
                  {/* hasil */}
                  {/* start body */}
                  {totalSkor !== null && (
                    <div
                      // className=" alert alert-success mt-2 d-flex "
                      className={` mt-2 d-flex alert alert-${boxStyle}`}
                    >
                      {/* {totalSkor >= 1 && totalSkor <= 3
                        ? "Box ini Hijau"
                        : totalSkor >= 4 && totalSkor <= 6
                        ? "Box ini Kuning"
                        : "Box ini Merah"} */}
                      <h1 className="align-items-center mx-auto mt-2 opacity-75 ">
                        {totalSkor}
                      </h1>
                      {boxInfo && (
                        <button type="submit" className="btn btn-primary w-50">
                          <Link
                            onClick={handleClickInfo}
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Advice
                          </Link>
                        </button>
                      )}
                    </div>
                  )}

                  <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                  ></meta>
                </form>
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
