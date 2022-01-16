import React from "react";

import i from "../assets/images/gmap_marker_active.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-classic">
        <div className="bg1 section-sm">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-6">
                <h2 className="text-white">contacts</h2>
                <ul className="contact-list">
                  <li>
                    <span className="title">Freephone:</span>
                    <a className="link-white" href="tel:#">
                      {" "}
                      800-2345-6789
                    </a>
                  </li>
                  <li>
                    <span className="title">Address:</span>
                    <span className="caption">
                      {" "}
                      4578 Marmora Road,Glasgow D04 89GR
                    </span>
                  </li>
                  <li>
                    <span className="title">Opening Hours:</span>
                    <span className="caption">
                      {" "}
                      6am-4pm PST M-Th; 6am-3pm PST Fri
                    </span>
                  </li>
                  <li>
                    <span className="title">E-mail:</span>
                    <a className="link-blue" href="mailto:#">
                      {" "}
                      info@demolink.org
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                {}
                <div
                  className="google-map-container"
                  data-center="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
                  data-zoom={5}
                  data-icon="images/gmap_marker.png"
                  data-icon-active={i}
                  data-styles="[]"
                >
                  <div className="google-map" />
                  <ul className="google-map-markers">
                    <li
                      data-location="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
                      data-description="9870 St Vincent Place, Glasgow"
                    />
                  </ul>
                </div>
                {}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-aside">
          <div className="container">
            <p className="rights">
              <span>©  </span>
              <span className="copyright-year" />
              <span> </span>
              <span>Steel and Fabrication Industry</span>
              <span>. </span>
              <a href="privacy-policy.html">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
