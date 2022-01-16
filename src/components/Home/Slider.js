import React from "react";
import Swiper from "swiper";

import i1 from "../../assets/images/slide1.jpg";
import i2 from "../../assets/images/slide2.jpg";
import i3 from "../../assets/images/slide3.jpg";

class Slider extends React.Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      speed: 1000,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 5000,
      },
    });
  }
  render() {
    return (
      <section
        className="section swiper-container swiper-slider swiper-slider-1"
        data-swiper="{'autoplay':{'delay':4567},'effect':'fade'}"
      >
        <div className="swiper-wrapper text-center">
          <div
            className="swiper-slide context-dark"
            data-slide-bg={i1}
            style={{
              backgroundImage: "url(" + i1 + ")",
            }}
          >
            <div className="swiper-slide-caption section-sm">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div
                      className="swiper_caption"
                      data-caption-animate="fadeIn"
                      data-caption-delay={100}
                    >
                      <h2>A complete line of</h2>
                      <span>products is available</span>
                      <p>
                        Welcome to the number 1 company in the industry! Looking
                        for some helpful advice? Go no further; you've come to
                        the right place. We are professional, experienced and
                        dedicated to your satisfaction.
                      </p>
                      <a className="fa fa-angle-right" href="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide context-dark"
            data-slide-bg={i2}
            style={{
              backgroundImage: "url(" + i2 + ")",
            }}
          >
            <div className="swiper-slide-caption section-md">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div
                      className="swiper_caption caption-bg-2"
                      data-caption-animate="fadeIn"
                      data-caption-delay={100}
                    >
                      <h2>Providing premium</h2>
                      <span>products of exceptional value</span>
                      <p>
                        We are committed to the highest quality, reliability,
                        responsibility, continuous improvement.
                      </p>
                      <a className="fa fa-angle-right" href="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide context-dark"
            data-slide-bg={i3}
            style={{
              backgroundImage: "url(" + i3 + ")",
            }}
          >
            <div className="swiper-slide-caption section-md">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div
                      className="swiper_caption caption-bg-3"
                      data-caption-animate="fadeIn"
                      data-caption-delay={100}
                    >
                      <h2>A wide range of</h2>
                      <span>high quality structural steel projects</span>
                      <p>
                        Our company can boast the reputation of the trusted
                        partner known worldwide.
                      </p>
                      <a className="fa fa-angle-right" href="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="swiper-pagination" />
      </section>
    );
  }
}

export default Slider;
