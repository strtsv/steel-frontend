import React from "react";

class BgVide extends React.Component {
  render() {
    return (
      <section
        className="section bg-vide"
        data-vide-bg="mp4: video/video, poster: images/parallax1"
        data-vide-options="posterType: jpg, loop: false, muted: false"
      >
        <div className="container section-sm">
          <div className="row">
            <div className="col-lg-6">
              <div className="caption1">
                <h2>
                  We serve
                  <br />
                  to meet
                </h2>
                <span>your fabrication needs</span>
                <p>
                  Our team is committed to providing service suited to each
                  customer's ideal turnaround time. Our rush services can be
                  performed in a matter of hours.
                </p>
                <a className="fa fa-angle-right" href="#" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BgVide;
