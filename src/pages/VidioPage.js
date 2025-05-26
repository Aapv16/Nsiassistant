import NavigationBar from "../components/NavigationBar";
import { useState } from "react";

const VidioPage = () => {
  const [active, setActive] = useState("fallrisk");
  return (
    <>
      <NavigationBar />
      {/* <h3 className="text-center mr-lg-"></h3> */}
      <>
        <>
          <NavigationBar logo="Fallrisk" />
          {/* <div className="container mt-5 " id="accordionFlushExample">
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
          </div> */}
          <h1 className="pt-5 text-center"></h1>

          {/* start penampung */}
          <nav className="d-flex justify-content-center">
            <div
              className="nav-custom-fallrisk nav nav-tabs  border-bottom border-warning"
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
                Humpty-dumpaty
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
                Contact
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
              <h6 className="container mx-auto text-center mt-3"> On deploy</h6>
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
              <h6 className="container mx-auto text-center mt-3"> On deploy</h6>
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
              <h6 className="container mx-auto text-center mt-3"> On deploy</h6>
            </div>
            {/* start param 3 */}
            <div
              className="tab-pane fade"
              id="nav-disabled"
              role="tabpanel"
              aria-labelledby="nav-disabled-tab"
              tabindex="0"
            >
              ...
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
