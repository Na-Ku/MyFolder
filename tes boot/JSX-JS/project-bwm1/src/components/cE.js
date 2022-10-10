import React from "react";
import "aos/dist/aos.css";
import chs1 from "./gambar1/re/chs1 .jpg";
import cs2 from "./gambar1/re/cs2.jpg";

function CE() {
  return (
    <div>
      <div className="card shadow-sm mb-3 bg-body rounded" style={{ width: "370px" }} data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
        <div className="row no-gutters">
          <div className="col-md-7">
            <img src={chs1} className="card-img" alt="..." />
          </div>
          <div className="col-md-5">
            <div className="card-body" style={{ widht: "15px" }}>
              <h5 className="card-title">Tutorial Card Bootstrap 4</h5>
              <p className="card-text">Tutorial cara membuat card vertikal.</p>
              <p className="card-text">
                <small className="text-muted">Diposting 19 menit lalu</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-2 shadow-sm mb-3 bg-body rounded" style={{ width: "370px" }} data-aos="fade-left" data-aos-delay="800" data-aos-duration="1000">
        <div className="row no-gutters">
          <div className="col-md-7">
            <img src={cs2} className="card-img" alt="..." />
          </div>
          <div className="col-md-5">
            <div className="card-body" style={{ widht: "15px" }}>
              <h5 className="card-title">Tutorial Card Bootstrap 4</h5>
              <p className="card-text">Tutorial cara membuat card vertikal.</p>
              <p className="card-text">
                <small className="text-muted">Diposting 19 menit lalu</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CE;
