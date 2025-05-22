const Advice = ({
  id,
  judul,
  body,
  poin1,
  poin2,
  poin3,
  poin4,
  poin5,
  image1,
  image2,
  image3,
  display,
  ikon,
  displayimg2,
  displayimg3,
  warna,
}) => {
  return (
    <div className="container col-lg-6 ">
      <div className="accordion accordion-flush " idd="accordionFlushExample">
        {/* item 1 */}
        <div className="accordion-item border my-1 rounded-3 ">
          <h2 className="accordion-header  ">
            <button
              className={`rounded accordion-button  collapsed alert alert-${warna}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${id}`}
              aria-expanded="false"
              aria-controls={id}
            >
              <div className="d-flex">
                <i className={`fs-3 me-2  ${ikon}`}></i>
                <p className="fs-6 fw-bolder align-middle mt-1 mr-2 ">
                  {judul}
                </p>
              </div>
            </button>
          </h2>
          <div
            id={id}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <h6 className="mx-3 mb-2 ">{body}</h6>
              <div className={`${display}`}>
                <div className="container d-flex mx-auto mb-2 my-auto">
                  <div className="card" style={{ width: "8rem" }}>
                    <img
                      src={image1}
                      className="card-img-top mx-auto"
                      alt="..."
                    />
                  </div>
                  <div
                    className={`fs-3 me-2  mx-2  ${displayimg2}`}
                    style={{ width: "8rem" }}
                  >
                    <img src={image2} className="card-img-top card" alt="..." />
                  </div>
                  <div
                    className={`fs-3 me-2  card mx-auto  ${displayimg3}`}
                    style={{ width: "8rem" }}
                  >
                    <img src={image3} className="card-img-top" alt="..." />
                  </div>
                </div>
              </div>
              <ul className="container ">
                <p>{poin1}</p>
                <p>{poin2}</p>
                <p>{poin3}</p>
                <p>{poin4}</p>
                <p>{poin5}</p>
              </ul>
            </div>
          </div>
        </div>
        {/* end item 1 */}
      </div>
    </div>
  );
};

export default Advice;
