import Advice from "../components/Advice";
import NavigationBar from "../components/NavigationBar";
import nacl from "../assets/lucu/nacl.jpg";
import batigras from "../assets/lucu/batigras.jpg";
import spon from "../assets/lucu/spon.jpg";
import kasa from "../assets/lucu/kasa.jpg";
import tullgras from "../assets/lucu/tullgrass.jpg";
import alginate from "../assets/lucu/alginate.jpg";
import low from "../assets/lucu/low.jpg";
import { useEffect } from "react";

const AdvicePage3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll ke atas saat halaman dimuat
  }, []);
  // pulihkan bacggrund
  document.body.classList.remove("modal-open");
  // Pulihkan scroll
  document.body.style.overflow = "auto";
  const backdrops = document.querySelectorAll(".modal-backdrop");
  backdrops.forEach((el) => el.remove());
  return (
    <>
      <NavigationBar logo="Stage II" />;
      <div className="mt-5 container" id="accordionFlushExample">
        <div className="row">
          <div className="Col-lg-6">
            <Advice
              warna="warning"
              ikon="bi-droplet-half"
              id="1"
              judul="Cairan Pencuci Luka"
              poin1="◉ NACL 0.8%"
              image1={nacl}
              image2={kasa}
              displayimg2="d-none"
              displayimg3="d-none"
              // image2={chlorhexidine}
            />
            <Advice
              warna="warning"
              ikon="bi bi-distribute-vertical"
              id="2"
              judul="Balutan Primer"
              poin1="◉ Tulle grass"
              poin2="◉ Hydrocoloid"
              poin3="◉ Alginate"
              image1={batigras}
              image2={spon}
              image3={alginate}
              // displayimg3="d-none"
            />
            <Advice
              warna="warning"
              ikon="bi bi-layers-fill"
              id="3"
              judul="Balutan Sekunder"
              body="Belum diperlukan"
              poin1="◉ Low Adherent Dressing"
              poin2="◉ Gauze"
              image1={low}
              image2={tullgras}
              displayimg3="d-none"
            />
            <Advice
              warna="warning"
              ikon="bi bi-journal"
              id="4"
              judul="Keterangan"
              body="Skin protective barrier pada area sekitar luka bila perlu"
              // poin1="◉ Tulle grass (post operasi)"
              // poin2="◉ Hydrocoloid"
              display="d-none"
            />
            <Advice
              warna="warning"
              ikon="bi bi-exclamation-triangle"
              id="5"
              judul="Kaji Resiko Pressure Injury"
              body="Tools yang digunakan :"
              poin1="◉ Dewasa    : Bradenscore"
              poin2="◉ Bayi/Anak : Glanmorgan"
              poin3="◉ Perioperatif : Munro"
              display="d-none"
            />
            <Advice
              warna="warning"
              ikon="bi bi-journal-arrow-down"
              id="6"
              display="d-none"
              judul="Catat skor resiko luka tekan"
              poin1="◉ Dilakukan tiap shift"
              poin2="◉ Pencatatan skoring di CPPT 
                   maupun grafik vital sign"
            />
            <Advice
              warna="warning"
              ikon="bi bi-geo"
              id="7"
              judul="Perubahan Posisi"
              body="Dilakukan tiap 2 jam"
              display="d-none"
            />
            <Advice
              warna="warning"
              ikon="bi bi-clipboard"
              id="8"
              judul="Dokumentasi Form Turning Schedule"
              display="d-none"
              body="Dilakukan pengisian untuk skoring resiko pressure injury derajat sedang dan tinggi"
            />
            <Advice
              warna="warning"
              ikon="bi bi-grid-3x3-gap"
              id="9"
              judul="Penggunaan Matras Dekubitus"
              body="Pemasangan matras dekubitus diberikan untuk pasien dengan skoring resiko pressure injury derajat sedang dan tinggi"
              display="d-none"
            />
            <Advice
              warna="warning"
              ikon="bi bi-bandaid-fill"
              id="10"
              judul="Oles Pelembab Kulit"
              body="Dilakukan pengolesan petroleum jelly atau pelembab sesuai yang tersedia dengan frekuensi minimal 2x/hari(contoh : setelah dimandikan)"
              display="d-none"
            />
            <Advice
              warna="warning"
              ikon="bi bi-megaphone"
              id="11"
              judul="Edukasi Pasien dan Keluarga "
              body="Media edukasi menggunakan poster edukasi"
              display="d-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvicePage3;
