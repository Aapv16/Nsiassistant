import LukaDekubitusShow from "../components/LukaDekubitusShow";
import LukaDekubOff from "../components/LukaDekubOff";
import NavigationBar from "../components/NavigationBar";
import Stage1 from "../assets/lucu/Stage1.png.jpg";
import stageII from "../assets/lucu/stageII.jpg";
import StageIII from "../assets/lucu/stageIII.jpg";
import StageIV from "../assets/lucu/stageIV.jpg";
import unstable from "../assets/lucu/unstable.jpg";
import suspect from "../assets/lucu/suspect.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const History = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0); // scroll ke atas saat halaman dimuat
  // }, []);

  // logic of braden
  const [sensori, setSensori] = useState("4");
  const [kelembaban, setKelembapan] = useState("4");
  const [aktivitas, setAktivitas] = useState("4");
  const [mobilitas, setMobilitas] = useState("4");
  const [nutrisi, setNutrisi] = useState("4");
  const [gesekan, setGesekan] = useState("3");
  const [active, setActive] = useState("injury");
  const [modalBraden, setModalBraden] = useState(false);
  const [modalBradenJudul, setModalBradenJudul] = useState("Hasil");
  const [modalBradenBody, setModalBradenBody] = useState("");
  const [totalSkor, setTotalSkor] = useState("Hasil");

  const handleSubmitBraden = (e) => {
    e.preventDefault(e);

    const total =
      Number(sensori) +
      Number(kelembaban) +
      Number(aktivitas) +
      Number(mobilitas) +
      Number(nutrisi) +
      Number(gesekan);

    setTotalSkor(total);

    if (total >= 0 && total <= 11) {
      setModalBraden(true);
      setModalBradenBody(`🚨 Resiko tinggi ${total}`);
      setModalBradenJudul("Hasil");
      // alert(`Resiko tinggi, ${total}!`);
      // setBoxStyle("success");
    }
    if (total >= 12 && total <= 14) {
      setModalBraden(true);
      setModalBradenBody(`⚠️ Resiko Sedang ${total}`);
    }
    if (total >= 15 && total <= 23) {
      setModalBraden(true);
      setModalBradenBody(`✅ Resiko rendah ${total}`);
    }
    // if (total >=  && total <= 18) {
    //   alert("Resiko rendah");
    // }
    // console.log(sensori, kelembaban, aktivitas, mobilitas, nutrisi, gesekan);
    // alert("oke");
  };

  // start logic of glamoran
  const [glamorMobilitas, setGlamorMobilitas] = useState("0");
  const [glamorAlat, setGlamorAlat] = useState("0");
  const [anemia, setAnemia] = useState("0");
  const [suhu, setSuhu] = useState("0");
  const [perfusi, setPerfusi] = useState("0");
  const [nutrisiGlamor, setNutrisiGlamor] = useState("0");
  const [albumin, setAlbumin] = useState("0");
  const [urin, setUrin] = useState("0");
  const [modalGlamor, setModalGlamor] = useState(false);
  const [totalSkorGlamor, setTotalSkorGlamor] = useState("Hasil");
  const [modalJudul, setModalJudul] = useState("");
  const [modalBody, setModalBody] = useState("");
  // end logic of glamoran

  const handleSubmitGlamorgan = (e) => {
    e.preventDefault(e);

    const totalGlamor =
      Number(glamorAlat) +
      Number(glamorMobilitas) +
      Number(anemia) +
      Number(suhu) +
      Number(perfusi) +
      Number(nutrisiGlamor) +
      Number(albumin) +
      Number(urin);
    setTotalSkorGlamor(totalGlamor);

    // if (totalGlamor == "0") {
    //   setModalJudul("Hasil");
    //   setModalBody("Resiko Rendah");
    //   return;
    // }

    if (totalGlamor >= 0 && totalGlamor <= 10) {
      setModalJudul("Hasil");
      setModalGlamor(true);
      setModalBody(`✅ Resiko rendah ${totalGlamor}`);

      // alert("tidak beresiko");

      // setBoxStyle("success");
    }
    if (totalGlamor > 10 && totalGlamor <= 15) {
      setModalGlamor(true);
      setModalBody(`⚠️ Beresiko ${totalGlamor} `);
    }
    if (totalGlamor >= 15 && totalGlamor <= 20) {
      setModalGlamor(true);
      setModalBody(`🚨 Resiko tinggi ${totalGlamor}`);
    }
    if (totalGlamor >= 20) {
      setModalGlamor(true);
      setModalBody(`🚨Sangat tinggi ${totalGlamor}`);
    }
  };

  return (
    <div className="col-lg-12">
      <NavigationBar logo="Pressure Injury" />
      {/* <h3 className="text-center pt-5 mt-5 mr-lg border-bottom w-75 mx-auto">
        Derajat Luka
      </h3> */}
      <nav>
        <div
          className="custom-nav-injury fixed-top mt-5 nav nav-tabs  nav pt-4 border-bottom border-warning  "
          id="nav-tab"
          role="tablist"
        >
          <button
            onClick={() => setActive("injury")}
            className={
              active === "injury"
                ? "nav-item active"
                : "nav-link link-secondary "
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
            Injury
          </button>
          <button
            onClick={() => setActive("bradenscore")}
            className={
              active === "bradenscore"
                ? "nav-item active"
                : "nav-link link-secondary"
            }
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Bradenscore
          </button>
          <button
            onClick={() => setActive("glamorgan")}
            className={
              active === "glamorgan"
                ? "nav-item active"
                : "nav-link link-secondary"
            }
            id="nav-glamorgan-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-glamorgan"
            type="button"
            role="tab"
            aria-controls="nav-glamorgan"
            aria-selected="false"
          >
            Glamorgan
          </button>
          <button
            onClick={() => setActive("munro")}
            className={
              active === "munro" ? "nav-item active" : "nav-link link-secondary"
            }
            id="nav-munro-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-munro"
            type="button"
            role="tab"
            aria-controls="nav-munro"
            aria-selected="false"
          >
            Munro
          </button>
        </div>
      </nav>
      <div className="tab-content container mt-4" id="nav-tabContent">
        {/* start page injury */}
        <div
          className="tab-pane pt-2 fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabindex="0"
        >
          {/*start body 1 */}
          <div className="mx-auto col-lg-12 mt-5 pt-5 mb-2">
            <LukaDekubitusShow
              body="Kondisi kulit utuh/intact dengan tidak adanya kehilangan
                integritas kulit dan memili barrier kulit yang efektif."
            />
            <LukaDekubOff
              warna="alert alert-warning "
              kategori="STAGE I"
              id="StageI"
              link="/advice2"
              image={Stage1}
              body="Kulit utuh/ intact dengan kemerahan yang 
          tidak hilang meski ditekan, terlokalisasi, biasanya
          yang tampak di permukaan kulit tonjolan tulang.
          Pigmen kulit tampak lebih gelap dan berbeda 
          dari area sekitar. Kulit akan nyeri saat diraba, 
          dan teraba hangat"
            />
            <LukaDekubOff
              warna="alert alert-warning "
              kategori="STAGE II"
              link="/advice3"
              id="StageII"
              image={stageII}
              body="Adanya kerusakan dari sebagian dermis, tampak
          adanya luka atau kulit yang tampak rusak dengan
          warna luka merah muda. Tidak ad pus, lukanya
          dapat berisi serum atau berbentuk bulae."
            />
            <LukaDekubOff
              warna="alert alert-danger"
              kategori="STAGE III"
              link="/advice4"
              id="StageIII"
              body="Terdapatnya jaringan kulit yang hilang, lemak
          subkutan mungkin masih dapat terlihat namun
          tendon, tulang maupun otot tidak terpapar.
          Kemungkinan juga terdapat adanya kawah 
          kecil pada kulit.
          "
              image={StageIII}
            />
            <LukaDekubOff
              warna="alert alert-danger"
              kategori="STAGE IV"
              link="/advice5"
              id="StageIV"
              body="Adanya kehilangan jaringan total sehingga
          bagian tulang, tendon, dan otot dapat terlihat 
          dan terpapar. Pus atau cairan serta jaringan
          parut dapat ditemukan
          "
              image={StageIV}
            />

            <LukaDekubOff
              warna="alert alert-danger"
              kategori="UNSTAGEABLE"
              link="/unstageable"
              id="unstageable"
              body="Jika luka/ ulkus ditutupi oleh jaringan nekrotik
          stage dari luka/ ulkus tidak dapat dinilai sampai
          dasar luka bisa terlihat. 
          Tapi bila ada untuk sementara luka/ ulkus dapat
          di-klasifikasikan sebagai luka tekan stage IV
          "
              image={unstable}
            />

            <LukaDekubOff
              warna="alert alert-danger"
              kategori="SUSPECT DEEP TISSUE INJURY"
              id="suspect"
              link="/suspect"
              body="Perubahan warna pada kulit yang intact atau 
          blister yang disertai akumulasi serum/ darah
          akibat kerusakan jaringan kulit dari tekanan
          atau gesekan. Area ini mungkin disertai dengan
          nyeri, hangat atau dingin dibanding area sekitar
          "
              image={suspect}
            />
          </div>
          {/* and body 1 */}
        </div>
        {/* end page injury */}

        {/* start page bradenscore */}
        <div
          className="tab-pane fade pt-2"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabindex="0"
        >
          {/* start body 2 */}
          <form onSubmit={handleSubmitBraden}>
            <div className="container mx-auto col-lg-4 pt-5 mt-5  ">
              <div className="border border-warning  mx-auto rounded-2 container">
                {/* QNA1 */}
                <div className="mx-1 mt-2 ">
                  <h6 className="">
                    Persepsi Sensori: <br />
                    <p className="fs-6 fw-lighter w-auto">
                      Respon terhadap ketidaknyamanan
                      <Form.Select
                        className="form-select mt-2 mb-1  "
                        aria-label="Default select example"
                        value={sensori}
                        onChange={(e) => setSensori(e.target.value)}
                      >
                        <option value="4">
                          Tidak terganggu (Berespon penuh terhadap perintah
                          verbal)
                        </option>
                        <option value="3">
                          Sedikit terbatas (Berespon pada perintah verbal,
                          tetapi tidak selalu mengkomunikasikan
                          ketidaknyamanannya.)
                        </option>
                        <option value="2">
                          Sangat terbatas (Hanya berespon terhadap rangsang
                          nyeri)
                        </option>
                        <option value="1">
                          Sama sekali terbatas (Tidak berespon terhadap rangsang
                          nyeri)
                        </option>
                      </Form.Select>
                    </p>
                  </h6>
                </div>
                {/* end QNA1 */}

                {/* start QNA2 */}
                <div className="mx-1 pt-1">
                  <h6 className="">
                    Kelembaban: <br />
                    <p className="fs-6 fw-lighter">
                      Derajat kulit yang terpapar pada kelembaban
                      <Form.Select
                        className="form-select mb-1 mt-2  "
                        aria-label="Default select example"
                        value={kelembaban}
                        onChange={(e) => setKelembapan(e.target.value)}
                      >
                        <option value="4">
                          Jarang lembab (Kulit tampak kering, penggantian linen
                          cukup dilakukan sesuai jadwal)
                        </option>
                        <option value="3">
                          Kadang-kadang lembab (Membutuhkan penggantian linen
                          rata-rata 2-3 kali per hari)
                        </option>
                        <option value="2">
                          Sering lembab (Hampir membutuhkan penggantian linen
                          1-2 kali setiap shift)
                        </option>
                        <option value="1">
                          Lembab terus menerus (Terdeteksi linen basah setiap
                          kali dibantu rubah posisi, Kulit sering terpapar
                          dengan urine, keringat, dll. )
                        </option>
                      </Form.Select>
                    </p>
                  </h6>
                </div>
                {/* end QNA2 */}

                {/* QNA3 */}
                <div className="mx-1 py-1">
                  <h6 className="">
                    Aktivitas: <br />
                    <p className="fs-6 fw-lighter">
                      Derajat aktivitas fisik
                      <Form.Select
                        value={aktivitas}
                        onChange={(e) => setAktivitas(e.target.value)}
                        className="form-select mb-1 mt-2  "
                        aria-label="Default select example"
                      >
                        <option value="1">Baring Total</option>
                        <option value="2">
                          Duduk di kursi (Kemampuan sangat terbatas, tidak dapat
                          menumpu BB sendiri dan masih perlu dibantu saat
                          mobilisasi )
                        </option>
                        <option value="3">
                          Kadang-kadang Jalan (Mampu berjalan untuk jarak
                          pendek, aktifitas lebih banyak dilakukan di bed)
                        </option>
                        <option value="4">
                          Sering berjalan (Dapat berjalan keluar kamar)
                        </option>
                      </Form.Select>
                    </p>
                  </h6>
                </div>
                {/* end QNA3 */}

                {/* start QNA4 */}
                <div className="mx-1 pt-1">
                  <h6 className="">
                    Mobilitas : <br />
                    <p className="fs-6 fw-lighter">
                      Kemampuan untuk merubah posisi
                      <Form.Select
                        value={mobilitas}
                        onChange={(e) => setMobilitas(e.target.value)}
                        className="form-select mb-1 mt-2  "
                        aria-label="Default select example"
                      >
                        <option value="1">
                          Immobilitas (Sepenuhnya tidak dapat menggerakkan tubuh
                          dan ekstremitas tanpa bantuan.)
                        </option>
                        <option value="2">
                          Sangat terbatas (Mampu menggerakkan tubuh tapi tidak
                          mampu secara berkala dan mandiri)
                        </option>
                        <option value="3">
                          Sedikit terbatas (Mampu menggerakkan tubuh secara
                          berkala tapi tidak optimal/ bermakna )
                        </option>
                        <option value="4">
                          Tidak terbatas (Mampu merubah posisi secara berkala
                          tanpa bantuan )
                        </option>
                      </Form.Select>
                    </p>
                  </h6>
                </div>
                {/* end QNA4 */}

                {/* start QNA5 */}
                <div className="mx-1 pt-1">
                  <h6 className="">
                    Nutrisi: <br />
                    <p className="fs-6 fw-lighter">Pola intake makanan</p>
                  </h6>
                </div>
                <Form.Select
                  className="form-select mb-1"
                  value={nutrisi}
                  onChange={(e) => setNutrisi(e.target.value)}
                  aria-label="Default select example"
                >
                  <option value="1">
                    Sangat buruk (Pasien puasa atau pasien dengan asupan cairan
                    per hari sangat kurang, jarang makan lebih dari 1/3 porsi
                    makan yang disajikan)
                  </option>
                  <option value="2">
                    Tidak adekuat(Hanya menghabiskan 1/2 porsi makan yang
                    disajikan)
                  </option>
                  <option value="3">
                    Adekuat(Mampu menghabiskan 3/4 porsi makan , menggunakan
                    TPN/NGT yang komposisinya memenuhi 3/4 kebutuhan nutrisi)
                  </option>
                  <option value="4">
                    Sangat baik (Menghabiskan 1 porsi makan yang disajikan)
                  </option>
                </Form.Select>
                {/* end QNA5 */}

                {/* start QNA6 */}
                <div className="mx-1 pt-1">
                  <h6 className="">
                    Gesekan: <br />
                    <p className="fs-6 fw-lighter"></p>
                  </h6>
                </div>
                <Form.Select
                  value={gesekan}
                  onChange={(e) => setGesekan(e.target.value)}
                  className="form-select mb-3"
                  aria-label="Default select example"
                >
                  <option value="3">
                    Tidak bermasalah (Bergerak di bed/ kursi tanpa bantuan)
                  </option>
                  <option value="2">
                    Potensial bermasalah (Dapat bergerak bebas tapi tetap
                    membutuhkan bantuan minimal. )
                  </option>
                  <option value="1">
                    Bermasalah (Setiapkali mengangkat terjadi gesekan dengan
                    sheet, pasien sering merosot dan harus dibantu saat
                    memperbaiki posisi. )
                  </option>
                </Form.Select>
                {/* end QNA6 */}
              </div>
              <button
                type="submit"
                // onClick={hitungBraden}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="btn btn-primary w-100 mt-3 mb-2 "
              >
                Hitung
              </button>
              {/* start prin out */}
              {/* {totalSkor !== null && (
                <div className="alert text-center fs-4 ">
                  <strong>Skor:</strong>
                  {totalSkor}
                </div>
              )} */}
              {/*  end print out */}
            </div>
          </form>
          {/* end body 2 */}
        </div>
        {/* start modalbox */}
        <div
          show={modalBraden} //penting
          onHide={() => setModalBraden(false)} //penting
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  {modalBradenJudul}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center ">
                <strong> {modalBradenBody}</strong>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end modalbox */}
        {/* end page bradenscore */}

        {/* start page glamorgan */}
        <div
          className="tab-pane fade pt-2"
          id="nav-glamorgan"
          role="tabpanel"
          aria-labelledby="nav-glamorgan-tab"
          tabindex="0"
        >
          {/* start body glamorgan */}
          <form onSubmit={handleSubmitGlamorgan}>
            <div className="container mx-auto col-lg-4 mt-5 pt-5 ">
              {/* start body QNA */}
              <div className="border border-warning mx-auto rounded-2 container">
                {/* QNA1 */}
                <div className="mx-1 mt-2">
                  <h6 className="">
                    Mobilitas: <br />
                    <p className="fs-6 fw-lighter w-auto">
                      {/* Respon terhadap ketidaknyamanan */}
                      <select
                        value={glamorMobilitas}
                        onChange={(e) => setGlamorMobilitas(e.target.value)}
                        className="form-select mt-2 mb-1  "
                        aria-label="Default select example"
                      >
                        <option value="0">Mobilitas normal sesuai usia</option>
                        <option value="10">
                          Bisa bergerak tetapi tidak sesuai dengan usia
                        </option>
                        <option value="15">
                          Tidak mampu merubah posisi tanpa bantuan/ tidak mampu
                          mengontrol pergerakan tubuh
                        </option>
                        <option value="20" className="">
                          Pasien tidak bisa digerakkan tanpa menimbulkan banyak
                          kesulitan atau kerusakan kodisi. Dibawah general
                          anaestesia ≻ 2 jam
                        </option>
                      </select>
                    </p>
                  </h6>
                </div>
                {/* end QNA1 */}

                {/* start QNA2 */}
                <div className="mx-1 pt-1">
                  <h6 className="">
                    Alat: <br />
                    <p className="fs-6 fw-lighter">
                      {/* Derajat kulit yang terpapar pada kelembaban */}
                      <select
                        value={glamorAlat}
                        onChange={(e) => setGlamorAlat(e.target.value)}
                        className="form-select mb-1 mt-2  "
                        aria-label="Default select example"
                      >
                        <option value="0">Tidak ada alat medis</option>
                        <option value="15">
                          Terpasang mesin/ alat kesehatan/ suatu benda/
                          permukaan keras yang menekan atau menggesek kulit.
                          Contoh: pulse oximeter, ET tube, masker, slang/ wires,
                          baju ketat (stocking anti-emboli), plaster bidai/ gips
                        </option>
                        {/* <option value="3">
                          Kadang-kadang lembab (Membutuhkan penggantian linen
                          rata-rata 2-3 kali per hari)
                        </option> */}
                        {/* <option value="4">
                          Jarang lembab (Kulit tampak kering, penggantian linen
                          cukup dilakukan sesuai jadwal)
                        </option> */}
                      </select>
                    </p>
                  </h6>
                </div>
                {/* end QNA2 */}

                {/* QNA3 */}
                <div className="mx-1 py-1">
                  <h6 className="">
                    Lainnya: <br />
                    <select
                      value={anemia}
                      onChange={(e) => setAnemia(e.target.value)}
                      className="form-select mt-2  "
                      aria-label="Default select example"
                    >
                      <option value="0">tidak ada anemia</option>
                      <option value="1">Anemia (Hb ≺ 9 gr%) </option>
                    </select>
                  </h6>
                </div>
                {/* end QNA3 */}

                {/* start QNA3 for 2 */}
                <div className="mx-1">
                  <h6 className="">
                    <select
                      value={suhu}
                      onChange={(e) => setSuhu(e.target.value)}
                      className="form-select "
                      aria-label="Default select example"
                    >
                      <option value="0">Suhu tubuh normal</option>
                      <option value="1">
                        Pyreksia menetap (Suhu ≻ 38ºC lebih dari 4 jam)
                      </option>
                    </select>
                  </h6>
                </div>
                {/* end QNA3 for 2*/}

                {/* start QNA3 for 3 */}
                <div className="mx-1">
                  <h6 className="">
                    {/* Mobilitas : <br /> */}
                    <select
                      value={perfusi}
                      onChange={(e) => setPerfusi(e.target.value)}
                      className="form-select  "
                      aria-label="Default select example"
                    >
                      <option value="0">Perfusi perifer normal</option>
                      <option value="1">
                        Perfusi perifer buruk (ekstremitas dingin/ refil kapiler
                        ≻ 2 detik/ kulit berkeringat dingin)
                      </option>
                    </select>
                  </h6>
                </div>
                {/* end QNA3 for 3 */}

                {/* start QNA3 for 4 */}
                <div className="mx-1">
                  <h6 className="">
                    {/* Mobilitas : <br /> */}
                    <select
                      value={nutrisiGlamor}
                      onChange={(e) => setNutrisiGlamor(e.target.value)}
                      className="form-select  "
                      aria-label="Default select example"
                    >
                      <option value="0">Nutrisi adekuat</option>
                      <option value="1">
                        Nutrisi tidak adekuat (diskusi dengan ahli gizi bila
                        ragu)
                      </option>
                    </select>
                  </h6>
                </div>
                {/* end QNA3 for 4 */}

                {/* start QNA3 for 5 */}
                <div className="mx-1">
                  <h6 className="">
                    {/* Mobilitas : <br /> */}
                    <select
                      value={albumin}
                      onChange={(e) => setAlbumin(e.target.value)}
                      className="form-select  "
                      aria-label="Default select example"
                    >
                      <option value="0">Albumin normal</option>
                      <option value="1">
                        Kadar albumin rendah (≺ 3.5 g/L)
                      </option>
                    </select>
                  </h6>
                </div>
                {/* end QNA3 for 5 */}

                {/* start QNA3 for 6 */}
                <div className="mx-1">
                  <h6 className="">
                    {/* Mobilitas : <br /> */}
                    <select
                      value={urin}
                      onChange={(e) => setUrin(e.target.value)}
                      className="form-select  "
                      aria-label="Default select example"
                    >
                      <option value="0">
                        Inkontinensia (sesuai dengan usia)
                      </option>
                      <option value="1">
                        Inkontinensia (tidak sesuai dengan usia)
                      </option>
                    </select>
                  </h6>
                </div>
                {/* end QNA 3 for 6 */}
              </div>
              {/* start body QNA */}

              <Link
                onClick={handleSubmitGlamorgan}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
                className="btn btn-primary w-100 mt-3 mb-2"
              >
                Hitung
              </Link>
              {/* start print out */}
              {/* {totalSkorGlamor !== null && (
                <div className="text-center fs-6">
                  <strong> Skor :</strong>
                  {totalSkorGlamor}
                </div>
              )} */}

              {/* end pprint out */}
            </div>
          </form>
          {/* end body glamorgan */}
          {/* start modalbox glamorgan */}
          <div
            show={modalGlamor} //penting
            onHide={() => setModalGlamor(false)} //penting
            className="modal fade"
            id="exampleModal2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    {modalJudul}
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-center">{modalBody}</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end modalbox glamorgan */}
        </div>
        {/* end page glamorgan */}

        {/* start page munro */}
        <div
          className="tab-pane fade pt-2"
          id="nav-munro"
          role="tabpanel"
          aria-labelledby="nav-munro-tab"
          tabindex="0"
        >
          {/* start body munro */}
          <form>
            <div className="container mx-auto col-lg-4 pt-5 mt-5  ">
              <div className="border border-warning  rounded-2 container">
                {/* QNA1 */}
                <div className="mx-1 mt-2">
                  <h6 className="">
                    Persepsi Sensori: <br />
                    <p className="fs-6 fw-lighter w-auto">
                      Respon terhadap ketidaknyamanan
                      <select
                        className="form-select mt-2 mb-1  "
                        aria-label="Default select example"
                      >
                        <option value="1" className="">
                          Sama sekali terbatas (Tidak berespon terhadap rangsang
                          nyeri)
                        </option>
                        <option value="2">
                          Sangat terbatas (Hanya berespon terhadap rangsang
                          nyeri)
                        </option>
                        <option value="3">
                          Sedikit terbatas (Berespon pada perintah verbal,
                          tetapi tidak selalu mengkomunikasikan
                          ketidaknyamanannya.)
                        </option>
                        <option value="4">
                          Tidak terganggu (Berespon penuh terhadap perintah
                          verbal)
                        </option>
                      </select>
                    </p>
                  </h6>
                </div>
                {/* end QNA1 */}

                {/* start QNA2 */}
                <div className="mx-1 pt-1">
                  <h6 className="">
                    Kelembaban: <br />
                    <p className="fs-6 fw-lighter">
                      Derajat kulit yang terpapar pada kelembaban
                      <select
                        className="form-select mb-1 mt-2  "
                        aria-label="Default select example"
                      >
                        <option value="1">
                          Lembab terus menerus (Terdeteksi linen basah setiap
                          kali dibantu rubah posisi, Kulit sering terpapar
                          dengan urine, keringat, dll. )
                        </option>
                        <option value="2">
                          Sering lembab (Hampir membutuhkan penggantian linen
                          1-2 kali setiap shift)
                        </option>
                        <option value="3">
                          Kadang-kadang lembab (Membutuhkan penggantian linen
                          rata-rata 2-3 kali per hari)
                        </option>
                        <option value="4">
                          Jarang lembab (Kulit tampak kering, penggantian linen
                          cukup dilakukan sesuai jadwal)
                        </option>
                      </select>
                    </p>
                  </h6>
                </div>
                {/* end QNA2 */}

                {/* QNA3 */}
                <div className="mx-1 py-1">
                  <h6 className="">
                    Aktivitas: <br />
                    <p className="fs-6 fw-lighter">
                      Derajat aktivitas fisik
                      <select
                        className="form-select mb-1 mt-2  "
                        aria-label="Default select example"
                      >
                        <option value="1">Baring Total</option>
                        <option value="2">
                          Duduk di kursi (Kemampuan sangat terbatas, tidak dapat
                          menumpu BB sendiri dan masih perlu dibantu saat
                          mobilisasi )
                        </option>
                        <option value="3">
                          Kadang-kadang Jalan (Mampu berjalan untuk jarak
                          pendek, aktifitas lebih banyak dilakukan di bed)
                        </option>
                        <option value="4">
                          Sering berjalan (Dapat berjalan keluar kamar)
                        </option>
                      </select>
                    </p>
                  </h6>
                </div>
                {/* end QNA3 */}

                {/* start QNA4 */}
                <div className="mx-1 pt-1">
                  <h6 className="">
                    Mobilitas : <br />
                    <p className="fs-6 fw-lighter">
                      Kemampuan untuk merubah posisi
                      <select
                        className="form-select mb-1 mt-2  "
                        aria-label="Default select example"
                      >
                        <option value="1">
                          Immobilitas (Sepenuhnya tidak dapat menggerakkan tubuh
                          dan ekstremitas tanpa bantuan.)
                        </option>
                        <option value="2">
                          Sangat terbatas (Mampu menggerakkan tubuh tapi tidak
                          mampu secara berkala dan mandiri)
                        </option>
                        <option value="3">
                          Sedikit terbatas (Mampu menggerakkan tubuh secara
                          berkala tapi tidak optimal/ bermakna )
                        </option>
                        <option value="4">
                          Tidak terbatas (Mampu merubah posisi secara berkala
                          tanpa bantuan )
                        </option>
                      </select>
                    </p>
                  </h6>
                </div>
                {/* end QNA4 */}

                {/* start QNA5 */}
                <div className="mx-1 pt-1">
                  <h6 className="">
                    Nutrisi: <br />
                    <p className="fs-6 fw-lighter">Pola intake makanan</p>
                  </h6>
                </div>
                <select
                  className="form-select mb-1  "
                  aria-label="Default select example"
                >
                  <option value="1">
                    Sangat buruk (Pasien puasa atau pasien dengan asupan cairan
                    per hari sangat kurang, jarang makan lebih dari 1/3 porsi
                    makan yang disajikan)
                  </option>
                  <option value="2">
                    Tidak adekuat(Hanya menghabiskan 1/2 porsi makan yang
                    disajikan)
                  </option>
                  <option value="3">
                    Adekuat(Mampu menghabiskan 3/4 porsi makan , menggunakan
                    TPN/NGT yang komposisinya memenuhi 3/4 kebutuhan nutrisi)
                  </option>
                  <option value="4">
                    Sangat baik (Menghabiskan 1 porsi makan yang disajikan)
                  </option>
                </select>
                {/* end QNA5 */}

                {/* start QNA6 */}
                <div className="mx-1 pt-1">
                  <h6 className="">
                    Gesekan: <br />
                    <p className="fs-6 fw-lighter"></p>
                  </h6>
                </div>
                <select
                  className="form-select mb-3  "
                  aria-label="Default select example"
                >
                  <option value="1">
                    Bermasalah (Setiapkali mengangkat terjadi gesekan dengan
                    sheet, pasien sering merosot dan harus dibantu saat
                    memperbaiki posisi. )
                  </option>
                  <option value="2">
                    Potensial bermasalah (Dapat bergerak bebas tapi tetap
                    membutuhkan bantuan minimal. )
                  </option>
                  <option value="3">
                    Tidak bermasalah (Bergerak di bed/ kursi tanpa bantuan)
                  </option>
                </select>
                {/* end QNA6 */}
              </div>
              <Link
                // onClick={hitungBraden}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="btn btn-primary w-100 mt-3 mb-2"
              >
                Hitung
              </Link>
            </div>
          </form>
          {/* end body munro */}
          {/* start modalbox munro*/}
          <div
            // show={modal} //penting
            // onHide={() => setModal(false)} //penting
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end modalbox munro */}
        </div>
        {/* end page munro*/}
      </div>
    </div>
  );
};

export default History;
