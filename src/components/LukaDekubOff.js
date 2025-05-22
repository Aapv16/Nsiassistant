import { Link } from "react-router-dom";

const LukaDekubOff = ({ image, kategori, id, body, warna, link }) => {
  return (
    <>
      <div
        className="accordion mb-2 col-lg-4 mx-auto"
        id="accordionPanelsStayOpenExample"
      >
        {/* img 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${warna}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${id}`}
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              {kategori}
            </button>
          </h2>
          <div id={id} className="accordion-collapse collapse">
            <div className="accordion-body">
              <div className="border-bottom border-2">
                {/* img */}
                <img
                  src={image}
                  className="card-img-top w-100  rounded-2 mb-2"
                  alt="..."
                />
                {/* <img className="card-img-top w-50  rounded-2 mb-2" alt="..." /> */}
                {/* img */}
              </div>

              <p className="mb-3">{body}</p>
              <Link to={link}>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-primary w-25  opacity-75 border border-secondary"
                    to="/advice"
                  >
                    <i className="bi bi-search fs-4 mx-2 align-middle mt-1"></i>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* img 1 */}
      </div>
    </>
  );
};

export default LukaDekubOff;
