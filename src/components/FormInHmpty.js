import { useState } from "react";
import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const FormInHmpty = ({
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
  option6_4,
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
  textFallBody,
  textFallJudul,
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
  // logic of Fall
  const [usia, setUsia] = useState("0");
  const [penggunaanObat, setPengobatanObat] = useState("0");
  const [diagnosis, setDiagnosis] = useState("0");
  const [gangguanKognitif, setGangguanKognitif] = useState("0");
  const [faktor, setFaktor] = useState("0");
  const [respon, setRespon] = useState("0");
  const [kelamin, setKelamin] = useState("0");
  const [modalHmpty, setModalHmpty] = useState(false);
  const [modalHmptyJudul, setModalHmptyJudul] = useState("Hasil");
  const [modalHmptyBody, setModalHmptyBody] = useState("");
  const [href, setHref] = useState("");
  const [totalSkor, setTotalSkor] = useState("Hasil");

  const handleSubmitHmpty = (e) => {
    e.preventDefault(e);

    const total =
      Number(usia) +
      Number(penggunaanObat) +
      Number(diagnosis) +
      Number(gangguanKognitif) +
      Number(faktor) +
      Number(respon) +
      Number(kelamin);

    setTotalSkor(total);
    console.log(
      usia,
      penggunaanObat,
      diagnosis,
      gangguanKognitif,
      faktor,
      respon,
      kelamin
    );

    if (total >= 12) {
      setModalHmpty(true);
      setModalHmptyBody(`🚨 Resiko tinggi ${total}`);
      setHref("/scorepivas");
      // alert(`Resiko tinggi, ${total}!`);
      // setBoxStyle("success");
    }
    if (total >= 0 && total <= 11) {
      setModalHmpty(true);
      setModalHmptyBody(`✅ Resiko rendah ${total}`);
      setHref("/pivas");
    }
    // if (total >=  && total <= 18) {
    //   alert("Resiko rendah");
    // }
    // console.log(sensori, kelembaban, aktivitas, mobilitas, nutrisi, gesekan);
    // alert("oke");
  };

  return (
    <>
      <form onSubmit={handleSubmitHmpty}>
        <div className="container mx-auto col-lg-4 pt-5   ">
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
                    value={usia}
                    onChange={(e) => setUsia(e.target.value)}
                  >
                    {/* <option value="0">{option5}</option> */}
                    <option value="1">{option1}</option>
                    <option value="2">{option2}</option>
                    <option value="3">{option3}</option>
                    <option value="4">{option4}</option>
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
                    value={penggunaanObat}
                    onChange={(e) => setPengobatanObat(e.target.value)}
                  >
                    <option value={value1}>{option2_1}</option>
                    <option value={value2}>{option2_2}</option>
                    <option value={value3}>{option2_3}</option>
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
                    value={diagnosis}
                    onChange={(e) => setDiagnosis(e.target.value)}
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
                    value={gangguanKognitif}
                    onChange={(e) => setGangguanKognitif(e.target.value)}
                    className="form-select mb-1 mt-2  "
                    aria-label="Default select example"
                  >
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
              value={faktor}
              onChange={(e) => setFaktor(e.target.value)}
              aria-label="Default select example"
            >
              <option value="1">{option5_1}</option>
              <option value="2">{option5_2}</option>
              <option value="3">{option5_3}</option>
              <option value="4">{option5_4}</option>
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
              value={respon}
              onChange={(e) => setRespon(e.target.value)}
              className="form-select mb-3"
              aria-label="Default select example"
            >
              <option value="1">{option6_1}</option>
              <option value="2">{option6_2}</option>
              <option value="3">{option6_3}</option>
            </Form.Select>
            {/* end QNA6 */}
            {/* start QNA7 */}
            <div className="mx-1 pt-1">
              <h6 className="">
                {judul7}
                <br />
                <p className="fs-6 fw-lighter"></p>
              </h6>
            </div>
            <Form.Select
              value={kelamin}
              onChange={(e) => setKelamin(e.target.value)}
              className="form-select mb-3"
              aria-label="Default select example"
            >
              <option value="1">{option7_1}</option>
              <option value="2">{option7_2}</option>
            </Form.Select>
            {/* end QNA7 */}

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
        show={modalHmpty} //penting
        onHide={() => setModalHmpty(false)} //penting
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
                {modalHmptyJudul}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center ">
              <strong>{modalHmptyBody}</strong>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <Link type="button" to={href} className="btn btn-primary">
                Advice
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end modalbox */}
    </>
  );
};

export default FormInHmpty;
