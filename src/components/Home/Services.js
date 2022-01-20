import React from "react";

import i1 from "../../assets/images/page-1_img01.jpg";
import i2 from "../../assets/images/page-1_img02.jpg";
import i3 from "../../assets/images/page-1_img03.jpg";
import i4 from "../../assets/images/page-1_img04.jpg";

class Services extends React.Component {
  render() {
    return (
      <section className="section section-md bg-default">
        <div className="container">
          <div className="row row-30">
            <div className="col-lg-6 wow fadeInLeft">
              <div className="img-box">
                <span />
                <img src={i1} alt />
                <div className="caption context-dark">
                  <h2>DUCTING</h2>
                  <p>
                    Our custom fabricated stainless steel ducting products are
                    highly reliable and distributed across the world.
                  </p>
                </div>
                <a className="fa fa-angle-right" href="#" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight">
              <div className="img-box">
                <span />
                <img src={i2} alt />
                <div className="caption context-dark">
                  <h2>STACKS</h2>
                  <p>
                    Our stacks are designed to maintain air quality emissions in
                    compliance with modern requirements for your facility.
                  </p>
                </div>
                <a className="fa fa-angle-right" href="#" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInLeft">
              <div className="img-box">
                <span />
                <img src={i3} alt />
                <div className="caption context-dark">
                  <h2>tanks</h2>
                  <p>
                    We specialize in the fabrication of custom industrial tanks
                    of all kinds, including stainless steel tanks.
                  </p>
                </div>
                <a className="fa fa-angle-right" href="#" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight">
              <div className="img-box">
                <span />
                <img src={i4} alt />
                <div className="caption context-dark">
                  <h2>STRUCTURAL</h2>
                  <p>
                    Our primary business is providing design, fabrication, and
                    erection of structural steel for commercial or industrial
                    buildings, and bridges.
                  </p>
                </div>
                <a className="fa fa-angle-right" href="#" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
