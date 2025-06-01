import NavigationBar from "../components/NavigationBar";
import { useState } from "react";
import FormInFall from "../components/FormInFall";
import FormInHmpty from "../components/FormInHmpty";
import FormCheckBox from "../components/FormCheckBox";

const VidioPage = () => {
  const [active, setActive] = useState("fallrisk");

  return (
    <>
      <NavigationBar />
      {/* <h3 className="text-center mr-lg-"></h3> */}
      <>
        <>
          <NavigationBar logo="Fallrisk" />

          <h1 className="pt-5 text-center"></h1>

          {/* start penampung */}
          <nav className="fixed-top mt-5 pt-3 bg-light d-flex justify-content-center ">
            <div
              className="nav-custom-fallrisk nav nav-tabs border-bottom border-warning"
              id="nav-tab"
              role="tablist"
            >
              <button
                // start even active"
                onClick={() => setActive("fallrisk")}
                className={
                  active === "fallrisk"
                    ? "nav-item active"
                    : "nav-link link-secondary"
                }
                // end even active
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Fallrisk
              </button>
              <button
                // start even active humptyDum
                onClick={() => setActive("humptyDum")}
                className={
                  active === "humptyDum"
                    ? "nav-item active"
                    : "nav-link link-secondary"
                }
                // end even active humptyDum
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Humpty-dumpty
              </button>
              <button
                // start even contact
                onClick={() => setActive("contact")}
                className={
                  active === "contact"
                    ? "nav-item active"
                    : "nav-link link-secondary"
                }
                // start even contact
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Kebidanan
              </button>
            </div>
          </nav>

          {/* on the body */}
          <div className="tab-content" id="nav-tabContent">
            {/* start param 1 */}
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabindex="0"
            >
              <h6 className="container mx-auto text-start">
                <FormInFall
                  // QNA1
                  judul="Usia"
                  subJudul=""
                  option1="60-69 tahun"
                  option2="70-79 tahun"
                  option3="≥ 80 tahun"
                  option4="Pernah jatuh dalam 6 bulan terakhir sebelum masuk RS"
                  option5="< 60 tahun"
                  displayOp6="d-none"
                  // QNA 2
                  judul2="ELIMINASI "
                  subJudul2="(Pilih salah satu)
                  Usus dan Urin"
                  value1="2"
                  value2="2"
                  value3="4"
                  option2_1="Inkontinensia"
                  option2_2="Urgency atau Frekuensi"
                  option2_3="Urgency/ Frekuensi dan Inkontinensia"
                  display="d-none"
                  // QNA 3
                  judul3="PENGOBATAN "
                  subJudul3="Termasuk PCA/ Opiat, Anticonvulsant, Anti Hypertensi, Diuretik, Hypnotik, Laksatif, Sedatif, dan Psikotropik"
                  option3_1="Pemberian 1 jenis obat resiko jatuh tinggi"
                  option3_2="Pemberian 2 jenis atau lebih obat beresiko tinggi jatuh"
                  option3_3="Prosedur/ tindakan dengan pemberian sedasi dalam 24 jam terakhir"
                  option3_4="Tidak ada"
                  // QNA 4
                  judul4="PERALATAN"
                  subJudul4="Perawatan pasien: semua peralatan yang digunakan pasien (mis: Infus IV, Chest tube, Kateter, Sequintial Compression Device (SCD), dll)"
                  option4_1="1 alat"
                  option4_2="2 alat"
                  option4_3="≥ 3 alat"
                  option4_4="Tidak ada peralatan yang digunakan"
                  // QNA 5
                  judul5="MOBILITAS"
                  subJudul5="(Pilih semua yang sesuai)"
                  option5_1="Membutuhkan bantuan atau pengawasan untuk mobilitas transfer, atau ambulasi"
                  option5_2="Gangguan berjalan/ langkah"
                  option5_3="Gangguan penglihatan atau pendengaran mempengaruhi mobilitas"
                  option5_4="Tidak ada gangguan mobilitas"
                  // QNA 6
                  judul6="KOGNISI "
                  subJudul6="(Pilih semua yang sesuai dan tambahakan poin)"
                  option6_1="Kesadaran yang berubah terhadap lingkungan fisik terdekat"
                  option6_2="Impulsive "
                  option6_3="Kurangnya pemahaman tentang keterbatasan fisik dan kognitif seseorang"
                  option6_4="Koperatif"
                  // btn
                  buttonTarget={"infobox"}
                  // textFallJudul="Hasil"
                  // textFallBody="tes"
                  // cut of
                  bundleForm="d-none"
                />
              </h6>
            </div>
            {/* end param 1 */}

            {/* start param 2 */}
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabindex="0"
            >
              <h6 className="container mx-auto text-start ">
                <FormInHmpty
                  judul="Usia"
                  subJudul=""
                  option1="≥ 13 tahun"
                  option2="7-12 tahun"
                  option3="3-6 tahun"
                  option4="< 3 tahun"
                  // QNA 2
                  judul2="PENGGUNAAN OBAT "
                  subJudul2="sedative, hypnosis, barbiturate, antidepresan, laksatif, diuretic, narkotik"
                  value1="1"
                  value2="2"
                  value3="3"
                  option2_1="Menggunakan obat jenis lain/ tidak menggunakan obat"
                  option2_2="Menggunakan salah satu obat diatas"
                  option2_3="Menggunakan lebih dari satu dari obat "
                  display="d-none"
                  // QNA 3
                  judul3="Diagnosis "
                  subJudul3=""
                  option3_1="Diagnosis lain"
                  option3_2="Gangguan mental/ perilaku"
                  option3_3="Gangguan oksigenasi (gangguan pernafasan, dehidrasi, anemia, anoreksia, sakit kepala, sinkop, dll)"
                  option3_4="Gangguan Neurologis"
                  // QNA 4
                  judul4="GANGGUAN KOGNITIF"
                  subJudul4=""
                  option4_1="Orientasi baik"
                  option4_2="Gangguan orientasi"
                  option4_3="Tidak peduli pada kondisi diri maupun lingkungan"
                  // QNA 5
                  judul5="Faktor Lingkungan"
                  subJudul5=""
                  option5_1="Pasien di area rawat jalan"
                  option5_2="Pasien diletakkan di tempat tidur"
                  option5_3="Penggunaan alat bantu jalan/ duduk di kursi/ pencahayaan kurang/ ruangan dengan banyak perabot"
                  option5_4="Memiliki riwayat jatuh atau ukuran tempat tidur yang tidak sesuai dengan ukuran anak"
                  // QNA 6
                  judul6="RESPON TERHADAP PEMBEDAHAN/ ANESTESI "
                  subJudul6="(Pilih semua yang sesuai dan tambahakan poin)"
                  option6_1="Lebih dari 48 jam pasca tindakan/ tidak menjalani tindakan"
                  option6_2="48 jam pasca operasi"
                  option6_3="24 jam pasca operasi"
                  // QNA 7
                  judul7="JENIS KELAMIN "
                  option7_1="Perempuan"
                  option7_2="Laki-laki"
                  option7_3="24 jam pasca operasi"
                  // btn
                  buttonTarget={"infoboxHmpty"}
                  // textFallJudul="Hasil"
                  // textFallBody="tes"
                  // cut of
                  bundleForm="d-none"
                />
              </h6>
            </div>
            {/* end param 2 */}

            {/* start param 3 */}
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
              tabindex="0"
            >
              <h6 className="container mx-auto text-start className= mt-5 pt-2 ">
                <FormCheckBox
                  subJudul1=" Riwayat jatuh dalam 3 bulan terakhir masa kehamilan"
                  subJudul2=" Gangguan penglihatan tanpa koreksi"
                  subJudul3=" Riwayat tirah baring dalam 2 bulan terakhire"
                  subJudul4=" Diagnosis Preeklamsia"
                  subJudul5=" Pemberian Magnesium"
                  subJudul6=" Partus Fase Aktif"
                  subJudul7=" Hematocrit < 30"
                  subJudul8=" Pemberian obat Narkotik"
                  subJudul9=" Pemberian obat antihipertensi (baru atau penambahan dosis)"
                  subJudul10=" Epidural terpasang"
                />
              </h6>
            </div>
            {/* start param 3 */}
          </div>
          {/* end the body */}

          {/* end penampung */}
        </>
      </>
    </>
  );
};

export default VidioPage;
