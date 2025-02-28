import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <main className="pt-[60px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
