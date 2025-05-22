import intact from "../assets/lucu/intact skin.jpg";
import normal from "../assets/lucu/normal.jpg";
import { Link } from "react-router-dom";

const LukaDekubitusShow = ({ body, warna }) => {
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
              className={`accordion-button collapsed alert alert-success ${warna}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <h6>Normal Skin</h6>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show "
          >
            <div className="accordion-body">
              {/* <strong>This is the first item's accordion body.</strong> It is */}
              <div className="border-bottom border-2">
                {/* img */}
                <img
                  src={intact}
                  className="card-img-top w-50  rounded-2 mb-2"
                  alt="..."
                />
                <img
                  src={normal}
                  className="card-img-top w-50  rounded-2 mb-2"
                  alt="..."
                />
                {/* img */}
              </div>
              <p className="mb-3">{body}</p>
              <Link to="/advice">
                <button className="btn btn-primary" to="/advice">
                  Go to Advice
                  <i className="bi bi-arrow-right fs-4 mx-2 align-middle mt-1"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* img 1 */}
      </div>
    </>
  );
};

export default LukaDekubitusShow;
