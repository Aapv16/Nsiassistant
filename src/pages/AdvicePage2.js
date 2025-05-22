import Advice from "../components/Advice";
import NavigationBar from "../components/NavigationBar";
import nacl from "../assets/lucu/nacl.jpg";
import batigras from "../assets/lucu/batigras.jpg";
import spon from "../assets/lucu/spon.jpg";
import kasa from "../assets/lucu/kasa.jpg";
import tullgras from "../assets/lucu/tullgrass.jpg";
import chlorixidine from "../assets/lucu/chlorhexidine.jpg";
import { useEffect } from "react";

const AdvicePage2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll ke atas saat halaman dimuat
  }, []);
  return (
    <>
      <NavigationBar logo="Stage I" />;
      <div className="container" id="accordionFlushExample">
        <div className="row">
          <div className="Col-lg-6 mt-5">
            <Advice
              warna="success"
              ikon="bi-droplet-half"
              id="1"
              judul="Cairan Pencuci Luka"
              poin1="◉ NACL 0.8%"
              poin2="◉ Chlorhexidine (bila perlu)"
              image1={nacl}
              image2={chlorixidine}
              displayimg3="d-none"
            />
            <Advice
              warna="success"
              ikon="bi bi-distribute-vertical"
              id="2"
              judul="Balutan Primer"
              poin1="◉ Tulle grass (post operasi)"
              poin2="◉ Hydrocoloid"
              image1={batigras}
              image2={spon}
              displayimg3="d-none"
            />
            <Advice
              warna="success"
              ikon="bi bi-layers-fill"
              id="3"
              judul="Balutan Sekunder"
              body="Belum diperlukan"
              poin1="◉ Transparant film"
              poin2="◉ Gauze"
              image1={kasa}
              image2={tullgras}
              displayimg3="d-none"
            />
            <Advice
              warna="success"
              ikon="bi bi-journal"
              id="4"
              judul="Keterangan"
              body="Skin protective barrier pada area sekitar luka bila perlu"
              // poin1="◉ Tulle grass (post operasi)"
              // poin2="◉ Hydrocoloid"
              display="d-none"
            />
            <Advice
              warna="success"
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
              warna="success"
              ikon="bi bi-journal-arrow-down"
              id="6"
              display="d-none"
              judul="Catat skor resiko luka tekan"
              poin1="◉ Dilakukan tiap shift"
              poin2="◉ Pencatatan skoring di CPPT 
                   maupun grafik vital sign"
            />
            <Advice
              warna="success"
              ikon="bi bi-geo"
              id="7"
              judul="Perubahan Posisi"
              body="Dilakukan tiap 2 jam"
              display="d-none"
            />
            <Advice
              warna="success"
              ikon="bi bi-clipboard"
              id="8"
              judul="Dokumentasi Form Turning Schedule"
              display="d-none"
              body="Dilakukan pengisian untuk skoring resiko pressure injury derajat sedang dan tinggi"
            />
            <Advice
              warna="success"
              ikon="bi bi-grid-3x3-gap"
              id="9"
              judul="Penggunaan Matras Dekubitus"
              body="Pemasangan matras dekubitus diberikan untuk pasien dengan skoring resiko pressure injury derajat sedang dan tinggi"
              display="d-none"
            />
            <Advice
              warna="success"
              ikon="bi bi-bandaid-fill"
              id="10"
              judul="Oles Pelembab Kulit"
              body="Dilakukan pengolesan petroleum jelly atau pelembab sesuai yang tersedia dengan frekuensi minimal 2x/hari(contoh : setelah dimandikan)"
              display="d-none"
            />
            <Advice
              warna="success"
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

export default AdvicePage2;
