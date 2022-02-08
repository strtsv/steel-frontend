import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/About/Breadcrumbs";
import Team from "../components/About/Team";
import History from "../components/About/History";
import Testimonials from "../components/About/Testimonials";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <Team />
      <History />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default About;
