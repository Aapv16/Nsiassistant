import NavigationBar from "../components/NavigationBar";
import Advice from "../components/Advice";

const VidioPage = () => {
  return (
    <>
      <NavigationBar />
      {/* <h3 className="text-center mr-lg-"></h3> */}
      <>
        <>
          <NavigationBar logo="Fallrisk" />
          <div className="container mt-5 " id="accordionFlushExample">
            <div className="row">
              <div className="Col-lg-6 pt-5 mt-1 ">
                <Advice
                  ikon="bi-droplet-half"
                  id="1"
                  judul="Cairan Pencuci Luka"
                  body="Belum diperlukan"
                  display="d-none"
                />
                <Advice
                  ikon="bi bi-distribute-vertical"
                  id="2"
                  judul="Balutan Primer"
                  body="Belum diperlukan"
                  display="d-none"
                />
                <Advice
                  ikon="bi bi-layers-fill"
                  id="3"
                  judul="Balutan Sekunder"
                  body="Belum diperlukan"
                  display="d-none"
                />
              </div>
            </div>
            <Advice
              ikon="bi bi-journal"
              id="4"
              judul="Keterangan"
              body="Belum diperlukan"
              display="d-none"
            />
            <Advice
              ikon="bi bi-exclamation-triangle"
              id="5"
              judul="Kaji Resiko Pressure Injury"
              body="Tools yang digunakan :"
              poin1="◉ Dewasa    : Bradenscore"
              poin2="◉ Bayi/Anak : Glanmorgan"
              poin3="◉ Perioperatif : Munro"
              display="d-none"
            />
          </div>
        </>
      </>
    </>
  );
};

export default VidioPage;
