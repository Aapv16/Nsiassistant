import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cardcomponents = ({ href, id, image, kategori, judul, body, to }) => {
  return (
    <Card
      type="button"
      className="border border-warning  w-100 mx-auto h-auto col-lg  "
      style={{ width: "18rem", height: "15rem" }}
    >
      <Link to={to}>
        <Card.Body type="button">
          <Card.Title className="text-center opacity-75 ">
            {/* Card Title */}
          </Card.Title>
          <Card.Img
            variant="top"
            type="button"
            src={image}
            className="rounded w-50 custom-image "
          />

          {/* <div className="text-center">
          <Button variant="warning">Go somewhere</Button>
          </div> */}
          <Card.Text className="text-center ">
            {/* <h6 className="mt-1">{props.kategori}</h6> */}
            {/* start modal */}
            <div>
              <button
                type="button"
                className="btn w-auto opacity-75 "
                // data-bs-toggle="modal"
                // data-bs-target={`#${id}`}
              >
                {kategori}
              </button>

              <div
                className="modal fade "
                id={id}
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down ">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        {judul}
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <span className="text-start">{body}</span>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end modal */}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};
export default Cardcomponents;
