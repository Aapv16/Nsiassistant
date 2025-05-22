import TableInfo from "./TableInfo";
import { Link } from "react-router-dom";

const BoxInfo = ({ modal }) => {
  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Submit
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered  ">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss={modal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <TableInfo />
              pppp
            </div>
            <div className="modal-footer">
              <Link
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                to="/scorepivas"
              >
                Close
              </Link>
              <a className="mx-auto btn btn-primary me-3" href="/scorepivas">
                Go to Advice
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxInfo;
