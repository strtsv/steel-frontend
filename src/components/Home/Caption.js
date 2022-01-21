import React from "react";
import $ from "jquery";

import i from "../../assets/images/parallax2.jpg";

class Caption extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <section className="section parallax-container" data-parallax-img={i} data-image-src={i}>
        <div className="parallax-content section-sm context-dark text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="caption1 caption2">
                  <h2>
                    We meet
                    <br />a wide<span>range of fabrication requirements</span>
                  </h2>
                  <p>
                    Our industrial coating services, suited to meet the needs of
                    numerous industries.
                  </p>
                  <a className="fa fa-angle-right" href="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Caption;
