import Componen from "./Componen";
import history from "../assets/lucu/history.png";
import asisten from "../assets/lucu/asisten.png";
import tentang from "../assets/lucu/tentang.png";
import Fallrisk from "../assets/lucu/fallrisk.png";
import FormBox from "../components/FormBox";
import prop from "../assets/lucu/prop.png";

const Intro = () => {
  // const navigate = useNavigate();
  return (
    <div className="head">
      <div className="container mx-auto col-lg-12   ">
        <div className="row" style={{ marginTop: "1rem" }}>
          {/* card comp */}
          <div className="text-center pt-5 mt-5 ">
            <div className="custom-intro mx-auto col-lg-6 gap-lg-1 d-lg-flex mt-5">
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

              <FormBox
                image={tentang}
                // href="https://www.youtube.com/watch?v=yykwIVI1LMU"
                kategori="Tentang"
                judul="Tentang"
                id="tentang"
                link="https://aapv16.github.io/forminput/"
              />
            </div>
          </div>
          <span className="text-center mt-5 text-body-tertiary opacity-50  ">
            Siloam Hospitals Purwakarta
          </span>
          {/* card comp */}
        </div>
      </div>
    </div>
  );
};

export default Intro;
