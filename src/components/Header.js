import React from "react";
import $ from "jquery";
import "../assets/js/jquery.easing.1.3.js";
import "../assets/js/tmstickup.js";
import "../assets/js/parallax.js";
import { WOW } from "../assets/js/wow.js";
import "../assets/js/tmstickup.js";
import "../assets/js/jquery.ui.totop.my.js";

import i1 from "../assets/images/logo-default.png";
import i2 from "../assets/images/logo-default.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    $(document).ready(function() {
      new WOW().init();
      $(".rd-navbar").TMStickUp({});
      $().UItoTop({
        easingType: "easeOutQuad",
        containerClass: "ui-to-top fa fa-angle-up",
      });
    });
  }
  render() {
    return (
      <header className="section page-header">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-classic rd-navbar-original rd-navbar-static"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-static"
            data-lg-device-layout="rd-navbar-static"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="270px"
            data-xl-stick-up-offset="46px"
            data-xxl-stick-up-offset="270px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div
              className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1"
              data-rd-navbar-toggle=".rd-navbar-collapse"
            >
              <span />
            </div>
            <div className="rd-navbar-aside-outer rd-navbar-collapse">
              <div className="rd-navbar-aside">
                <div className="rd-navbar-brand">
                  {}
                  <a className="brand" href="index.html">
                    <img className="brand-logo-dark" src={i1} alt />
                  </a>
                </div>
                <ul className="text-right contact-list">
                  <li>
                    <h5>Need help? Contact us</h5>
                  </li>
                  <li>
                    <div className="unit unit-spacing-xs align-items-center justify-content-end">
                      <div className="unit-left">
                        <span className="icon icon-lg text-middle fa-mobile-phone" />
                      </div>
                      <div className="unit-body">
                        <h3>
                          <a href="tel:#">800-2345-6789</a>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="unit unit-spacing-xs align-items-center justify-content-end font-weight-medium">
                      <div className="unit-left">
                        <p className="text-color2">
                          Mon-Thu:
                          <span className="text-gray-400">6am-4pm;</span>
                        </p>
                      </div>
                      <div className="unit-body">
                        <p className="text-color2">
                          Fri:<span className="text-gray-400">6am-3pm;</span>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {}
                  <div className="rd-navbar-brand d-lg-none">
                    {}
                    <a className="brand" href="index.html">
                      <img className="brand-logo-dark" src={i2} alt />
                    </a>
                  </div>
                </div>
                <div className="rd-navbar-main-element">
                  <div className="rd-navbar-nav-wrap">
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item active">
                        <a className="rd-nav-link" href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="about-us.html">
                          About Us
                        </a>
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              What We Do
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              What We Offer
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              Forum
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a
                          className="rd-nav-link"
                          href="products-and-service.html"
                        >
                          Products & Services
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="project-gallery.html">
                          Project Gallery
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="contacts.html">
                          Contacts
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
