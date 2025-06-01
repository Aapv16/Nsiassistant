import { useState } from "react";
import Form from "react-bootstrap/Form";

const FormIn = ({
  judul,
  subJudul,
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  //
  judul2,
  subJudul2,
  option2_1,
  option2_2,
  option2_3,
  option2_4,
  //
  judul3,
  subJudul3,
  option3_1,
  option3_2,
  option3_3,
  option3_4,
  //
  judul4,
  subJudul4,
  option4_1,
  option4_2,
  option4_3,
  option4_4,
  //
  judul5,
  subJudul5,
  option5_1,
  option5_2,
  option5_3,
  option5_4,
  //
  judul6,
  option6_1,
  option6_2,
  option6_3,
  //
  judul7,
  option7_1,
  option7_2,
  //
  judul8,
  option8_1,
  //
  judul9,
  option9_1,
  //
  judul10,
  option10_1,
  //
  buttonTarget,
  modalFallBody,
  modalFallJudul,
  //
  display,
  bundleForm,
  displayOp5,
  displayOp4,
  displayOp6,
  displayOpHmpty,
  // value
  value1,
  value2,
  value3,
}) => {
  // logic of braden
  const [sensori, setSensori] = useState("4");
  const [kelembaban, setKelembapan] = useState("4");
  const [aktivitas, setAktivitas] = useState("4");
  const [mobilitas, setMobilitas] = useState("4");
  const [nutrisi, setNutrisi] = useState("4");
  const [gesekan, setGesekan] = useState("3");
  const [modalBraden, setModalBraden] = useState(false);
  const [modalBradenJudul, setModalBradenJudul] = useState("Hasil");
  const [modalBradenBody, setModalBradenBody] = useState("");
  const [totalSkor, setTotalSkor] = useState("Hasil");

  const handleSubmitFall = (e) => {
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
  console.log(kelembaban);
  return (
    <>
      <form onSubmit={handleSubmitFall}>
        <div className="container mx-auto col-lg-4 pt-2 mt-2  ">
          <div className="border border-warning  mx-auto rounded-2 container">
            {/* QNA1 */}
            <div className="mx-1 mt-2 ">
              <h6 className="">
                {judul} <br />
                <p className="fs-6 fw-lighter w-auto">
                  {subJudul}
                  <Form.Select
                    className="form-select mt-2 mb-1  "
                    aria-label="Default select example"
                    value={sensori}
                    onChange={(e) => setSensori(e.target.value)}
                  >
                    <option className={`${displayOp4}`} value="5">
                      {option4}
                    </option>
                    <option className={`${displayOp6}`} value="4">
                      {option6}
                    </option>
                    <option value="3">{option3}</option>
                    <option value="2">{option2}</option>
                    <option value="1">{option1}</option>
                    <option className={`${displayOp5}`} value="0">
                      {option5}
                    </option>
                  </Form.Select>
                </p>
              </h6>
            </div>
            {/* end QNA1 */}
            {/* start QNA2 */}
            <div className="mx-1 pt-1">
              <h6 className="">
                {judul2} <br />
                <p className="fs-6 fw-lighter">
                  {subJudul2}
                  <Form.Select
                    className="form-select mb-1 mt-2  "
                    aria-label="Default select example"
                    value={kelembaban}
                    onChange={(e) => setKelembapan(e.target.value)}
                  >
                    <option value={value1}>{option2_1}</option>
                    <option value={value2}>{option2_2}</option>
                    <option value={value3}>{option2_3}</option>
                    <option className={`${display}`} value="1">
                      {option2_4}
                    </option>
                  </Form.Select>
                </p>
              </h6>
            </div>
            {/* end QNA2 */}

            {/* QNA3 */}
            <div className="mx-1 py-1">
              <h6 className="">
                {judul3} <br />
                <p className="fs-6 fw-lighter">
                  {subJudul3}
                  <Form.Select
                    value={aktivitas}
                    onChange={(e) => setAktivitas(e.target.value)}
                    className="form-select mb-1 mt-2  "
                    aria-label="Default select example"
                  >
                    <option value="1">{option3_1}</option>
                    <option value="2">{option3_2}</option>
                    <option value="3">{option3_3}</option>
                    <option value="4">{option3_4}</option>
                  </Form.Select>
                </p>
              </h6>
            </div>
            {/* end QNA3 */}
            {/* start QNA4 */}
            <div className="mx-1 pt-1">
              <h6 className="">
                {judul4} <br />
                <p className="fs-6 fw-lighter">
                  {subJudul4}
                  <Form.Select
                    value={mobilitas}
                    onChange={(e) => setMobilitas(e.target.value)}
                    className="form-select mb-1 mt-2  "
                    aria-label="Default select example"
                  >
                    <option value="0">{option4_4}</option>
                    <option value="1">{option4_1}</option>
                    <option value="2">{option4_2}</option>
                    <option value="3">{option4_3}</option>
                  </Form.Select>
                </p>
              </h6>
            </div>
            {/* end QNA4 */}
            {/* start QNA5 */}
            <div className="mx-1 pt-1">
              <h6 className="">
                {judul5}
                <br />
                <p className="fs-6 fw-lighter">{subJudul5}</p>
              </h6>
            </div>
            <Form.Select
              className="form-select mb-1"
              value={nutrisi}
              onChange={(e) => setNutrisi(e.target.value)}
              aria-label="Default select example"
            >
              <option value="0">{option5_4}</option>
              <option value="1">{option5_1}</option>
              <option value="2">{option5_2}</option>
              <option value="3">{option5_3}</option>
            </Form.Select>
            {/* end QNA5 */}
            {/* start QNA6 */}
            <div className="mx-1 pt-1">
              <h6 className="">
                {judul6}
                <br />
                <p className="fs-6 fw-lighter"></p>
              </h6>
            </div>
            <Form.Select
              value={gesekan}
              onChange={(e) => setGesekan(e.target.value)}
              className="form-select mb-3"
              aria-label="Default select example"
            >
              <option value="3">{option6_1}</option>
              <option value="2">{option6_2}</option>
              <option value="1">{option6_3}</option>
            </Form.Select>
            {/* end QNA6 */}
            {/* cut of*/}
            {/* start QNA7 */}
            <div className={`${bundleForm}`}>
              <div className="mx-1 pt-1">
                <h6 className="">
                  {judul7}
                  <br />
                  <p className="fs-6 fw-lighter"></p>
                </h6>
              </div>
              <Form.Select
                value={gesekan}
                onChange={(e) => setGesekan(e.target.value)}
                className="form-select mb-3"
                aria-label="Default select example"
              >
                <option value="1">{option7_1}</option>
              </Form.Select>
              {/* end QNA7 */}
              {/* start QNA8 */}
              <div className="mx-1 pt-1">
                <h6 className="">
                  {judul8}
                  <br />
                  <p className="fs-6 fw-lighter"></p>
                </h6>
              </div>
              <Form.Select
                value={gesekan}
                onChange={(e) => setGesekan(e.target.value)}
                className="form-select mb-3"
                aria-label="Default select example"
              >
                <option value="1">{option8_1}</option>
              </Form.Select>
              {/* end QNA8 */}
              {/* start QNA9 */}
              <div className="mx-1 pt-1">
                <h6 className="">
                  {judul9}
                  <br />
                  <p className="fs-6 fw-lighter"></p>
                </h6>
              </div>
              <Form.Select
                value={gesekan}
                onChange={(e) => setGesekan(e.target.value)}
                className="form-select mb-3"
                aria-label="Default select example"
              >
                <option value="1">{option9_1}</option>
              </Form.Select>
              {/* end QNA9 */}
              {/* start QNA10 */}
              <div className="mx-1 pt-1">
                <h6 className="">
                  {judul10}
                  <br />
                  <p className="fs-6 fw-lighter"></p>
                </h6>
              </div>
              <Form.Select
                value={gesekan}
                onChange={(e) => setGesekan(e.target.value)}
                className="form-select mb-3"
                aria-label="Default select example"
              >
                <option value="1">{option10_1}</option>
              </Form.Select>
              {/* end QNA10*/}
            </div>
            <button
              type="submit"
              // onClick={hitungBraden}
              data-bs-toggle="modal"
              data-bs-target={`#${buttonTarget}`}
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
        </div>
      </form>

      {/* start modalbox */}
      <div
        show={modalBraden} //penting
        onHide={() => setModalBraden(false)} //penting
        className="modal fade"
        id={buttonTarget}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {modalFallJudul}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center ">
              <strong>{modalFallBody}</strong>
            </div>
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
      {/* end modalbox */}
    </>
  );
};

export default FormIn;
