import React from "react";

import i from "../../assets/images/page-1_img05.jpg";

class Offering extends React.Component {
  render() {
    return (
      <section className="section-md bg-default wow fadeInRight">
        <div className="container">
          <h2 className="text-color1">
            Offering the best level
            <br />
            <span className="font-weight-light">
              of excellence in steel fabrication
            </span>
          </h2>
          <div className="row row-30">
            <div className="col-md-6">
              <img className="offs" src={i} alt />
            </div>
            <div className="col-md-6">
              <p>
                Steel and Fabrication Industry was incorporated in April of 1989
                with the objective of offering the market a higher level of
                excellence in steel fabrication. Its organizers, with a combined
                sixty years of experience in steel fabrication, machining,
                manufacturing, and design could see that many large
                manufacturers were scaling back their own company’s to reduce
                costs. To achieve their objectives Steel and Fabrication
                Industry assembled a team of experienced and certified
                craftsmen, engineers, and designers with a commitment to quality
                and efficiency.
              </p>
              <a className="btn offs1" href="#">
                read more
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Offering;
