import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/Blog/Breadcrumbs";
import Overview from "../components/Blog/Overview";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <Overview />
      <Footer />
    </div>
  );
};

export default Blog;
