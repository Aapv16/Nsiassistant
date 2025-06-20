import { useEffect } from "react";
import Advice from "../components/Advice";
import NavigationBar from "../components/NavigationBar";
const AdvicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll ke atas saat halaman dimuat

    // pulihkan bacggrund
    document.body.classList.remove("modal-open");
    // Pulihkan scroll
    document.body.style.overflow = "auto";
    const backdrops = document.querySelectorAll(".modal-backdrop");
    backdrops.forEach((el) => el.remove());
  }, []);

  return (
    <>
      <NavigationBar logo="Normal Skin" />
      <div className="container mt-5 " id="accordionFlushExample">
        <div className="row">
          <div className="Col-lg-6 pt-5 mt-1 ">
            <Advice
              warna="success"
              ikon="bi-droplet-half"
              id="1"
              judul="Cairan Pencuci Luka"
              body="Belum diperlukan"
              display="d-none"
            />
            <Advice
              warna="success"
              ikon="bi bi-distribute-vertical"
              id="2"
              judul="Balutan Primer"
              body="Belum diperlukan"
              display="d-none"
            />
            <Advice
              warna="success"
              ikon="bi bi-layers-fill"
              id="3"
              judul="Balutan Sekunder"
              body="Belum diperlukan"
              display="d-none"
            />
          </div>
        </div>
        <Advice
          warna="success"
          ikon="bi bi-journal"
          id="4"
          judul="Keterangan"
          body="Belum diperlukan"
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
          body="Belum diperlukan"
        />
        <Advice
          warna="success"
          ikon="bi bi-grid-3x3-gap"
          id="9"
          judul="Penggunaan Matras Dekubitus"
          body="Belum diperlukan"
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
    </>
  );
};

export default AdvicePage;
