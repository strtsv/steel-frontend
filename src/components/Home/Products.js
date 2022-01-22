import React from "react";

class Products extends React.Component {
  render() {
    return (
      <section className="section-md bg-default wow fadeInLeft">
        <div className="container">
          <h2 className="title1">
            Our<span className="font-weight-light"> products</span>
          </h2>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <ul className="marked-list">
                <li>
                  <a href="#">Structural Steel Buildings</a>
                </li>
                <li>
                  <a href="#">Platforms, Stairways</a>
                </li>
                <li>
                  <a href="#">Motor & Fan Bases</a>
                </li>
                <li>
                  <a href="#">Tanks</a>
                </li>
                <li>
                  <a href="#">Pressure Vessels</a>
                </li>
                <li>
                  <a href="#">Cyclones</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-4">
              <ul className="marked-list">
                <li>
                  <a href="#">Scrubbers</a>
                </li>
                <li>
                  <a href="#">Fan Housings</a>
                </li>
                <li>
                  <a href="#">Industrial Ductwork & Piping</a>
                </li>
                <li>
                  <a href="#">Hoppers</a>
                </li>
                <li>
                  <a href="#">Stacks</a>
                </li>
                <li>
                  <a href="#">Dampers</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-4">
              <ul className="marked-list">
                <li>
                  <a href="#">Slide Gates</a>
                </li>
                <li>
                  <a href="#">Filter Housings</a>
                </li>
                <li>
                  <a href="#">Conveyors</a>
                </li>
                <li>
                  <a href="#">Guards</a>
                </li>
                <li>
                  <a href="#">Dewatering Screen Cabinets</a>
                </li>
                <li>
                  <a href="#">Sump Tanks</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
