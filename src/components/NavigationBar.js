import { Nav, Navbar, Container, Form, Button } from "react-bootstrap";
import Example from "./Offcanvas";
import { Link } from "react-router-dom";

function NavScrollExample({ logo }) {
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="bg-light border-bottom border-warning"
    >
      <Container>
        <Navbar.Brand href="#" className="mx-3">
          <h6 className="fw-semibold fst-italic opacity-75">{logo}</h6>
        </Navbar.Brand>
        <div className="menu">
          <Example />
        </div>

        <Navbar.Collapse id="">
          <div className="link-auto mx-auto ">
            <Nav
              className="link-auto navbar-nav-cus my-2 my-lg-1"
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link>
                <Link
                  className="display-hide"
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Beranda
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  to="/pivas"
                  className="display-hide"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Pivas Assitent
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  className="link-auto display-hide "
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/pressure"
                >
                  Pressure Injury
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  className="link-auto display-hide "
                  to="/tentang"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About
                </Link>
              </Nav.Link>
            </Nav>
          </div>
          <div className="search">
            <Form className="  d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className="">
                Search
              </Button>
            </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
