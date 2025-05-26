import Componen from "./Componen";
import history from "../assets/lucu/history.png";
import asisten from "../assets/lucu/asisten.png";
import tentang from "../assets/lucu/tentang.png";
import Fallrisk from "../assets/lucu/fallrisk.png";
import FormBox from "../components/FormBox";
import at from "../assets/lucu/at.png";

const Intro = () => {
  // const navigate = useNavigate();
  return (
    <div className="head">
      {/* start img dashboard */}
      <div style={{ marginTop: "2.5rem" }}>
        <div className="mx-auto" style={{ width: "24.5rem", height: "9rem" }}>
          <img
            src={at}
            className="card-img-top mt-3 rounded-2  mx-auto "
            alt="Divas"
          />
        </div>
      </div>
      {/* end img dashboard */}
      {/*start card content */}
      <div className="container mx-auto col-lg-12">
        <div className="row" style={{ marginTop: "2rem" }}>
          {/* card comp */}
          <div className="text-center  ">
            <div className="custom-intro mx-auto col-lg-6 gap-lg-1 d-lg-flex">
              <Componen
                image={asisten}
                kategori="Divas Asistent"
                // data-bs-toggle="modal"
                type="button"
                judul="Pivas Asistent"
                to="/pivas"
              />

              <Componen
                image={history}
                kategori="Injury"
                data-bs-toggle="modal"
                judul="Pressure Injury"
                id="history"
                body="Lorem ipsum dolor sit amet consectetur "
                to="/pressure"
              />
              <Componen
                image={Fallrisk}
                // href="https://www.tiktok.com/@vicky_petta/photo/7480515344243641605"
                kategori="Fallrisk"
                judul="Vidio"
                id="vidio"
                to="/vidio"
              />

              <Componen
                image={tentang}
                kategori="Tentang"
                judul="Tentang"
                id="tentang"
                to="/tentang"
              />
            </div>
          </div>
          <span className="text-center mt-5 text-body-tertiary opacity-50  ">
            Siloam Hospitals Purwakarta
          </span>
          {/* card comp */}
        </div>
      </div>
      {/* end card content */}
    </div>
  );
};

export default Intro;
