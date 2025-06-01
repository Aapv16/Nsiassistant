import React, { useState } from "react";

function FormCheckBox({
  subJudul1,
  subJudul2,
  subJudul3,
  subJudul4,
  subJudul5,
  subJudul6,
  subJudul7,
  subJudul8,
  subJudul9,
  subJudul10,
}) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((v) => v !== value));
    }
  };

  return (
    <form className="container border border-warning card mx-auto ">
      <h6 className="border-bottom mb-4 mt-3 ">Antepartum/ Intrapartum</h6>
      <label className="fs-6 fw-light">
        <input type="checkbox" value="1" onChange={handleCheckboxChange} />
        {subJudul1}
      </label>
      <br />
      <label className="fs-6 fw-light">
        <input type="checkbox" value="2" onChange={handleCheckboxChange} />
        {subJudul2}
      </label>
      <br />
      <label className="fs-6 fw-light">
        <input type="checkbox" value="2" onChange={handleCheckboxChange} />
        {subJudul3}
      </label>
      <br />
      <label className="fs-6 fw-light">
        <input type="checkbox" value="2" onChange={handleCheckboxChange} />
        {subJudul4}
      </label>
      <br />
      <label className="fs-6 fw-light">
        <input type="checkbox" value="2" onChange={handleCheckboxChange} />
        {subJudul5}
      </label>
      <br />
      <label className="fs-6 fw-light">
        <input type="checkbox" value="2" onChange={handleCheckboxChange} />
        {subJudul6}
      </label>
      <br />
      <label className="fs-6 fw-light">
        <input type="checkbox" value="2" onChange={handleCheckboxChange} />
        {subJudul7}
      </label>
      <br />
      <label className="fs-6 fw-light">
        <input type="checkbox" value="2" onChange={handleCheckboxChange} />
        {subJudul8}
      </label>
      <br />
      <label className="fs-6 fw-light">
        <input type="checkbox" value="2" onChange={handleCheckboxChange} />
        {subJudul9}
      </label>
      <br />
      <label className="fs-6 fw-light mb-4">
        <input type="checkbox" value="2" onChange={handleCheckboxChange} />
        {subJudul10}
      </label>

      {/* <div>
        <strong>Yang dipilih:</strong> {selectedOptions.join(", ")}
      </div> */}
    </form>
  );
}

export default FormCheckBox;
