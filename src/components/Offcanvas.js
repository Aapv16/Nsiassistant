import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

// offcanvas
function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-lg-none">
      <Button
        variant="secondary"
        className="btn border border-3 rounded border-secondary-subtle"
        onClick={handleShow}
      >
        <div>
          <i className="bi bi-list"></i>
        </div>
      </Button>

      <Offcanvas className="w-75 d-lg-none  " show={show} onHide={handleClose}>
        <Offcanvas.Header
          closeButton
          className="border-bottom border-warning d-lg-none "
        >
          <Offcanvas.Title className="">NSIA Asistent</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanvas-link">
            <ul>
              <a href="/home">
                <div className="border-bottom">
                  <h4>
                    <Link to="/">
                      <i className="bi bi-house"></i>Beranda
                    </Link>
                  </h4>
                </div>
              </a>
              <a href="/pivas">
                <div className="border-bottom">
                  <h4>
                    <Link to="/pivas">
                      <i className="bi bi-person-square"></i>Divas Assitent
                    </Link>
                  </h4>
                </div>
              </a>
              <a href="/presure">
                <div className="border-bottom">
                  <h4>
                    <Link to="/pressure">
                      <i className="bi bi-backpack2"></i>Pressure Injury
                    </Link>
                  </h4>
                </div>
              </a>
              <a href="/tentang">
                <div className="border-bottom">
                  <h4>
                    <Link to="/tentang">
                      <i className="bi bi-telephone-plus"></i>About
                    </Link>
                  </h4>
                </div>
              </a>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
export default Example;
// end offcanvas
