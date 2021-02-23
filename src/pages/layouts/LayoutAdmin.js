import React from "react";
import Sidebar from "../../components/Admin/Sidebar";

import Footer from "../../components/Admin/Footer";
import Header from "../../components/Admin/Header";
;

export default ({ children }) => {
  return (

    <div className="sb-nav-fixed">
      <Header />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content">
          {children}
          <Footer />
        </div>

      </div>
    </div>

  );
};
