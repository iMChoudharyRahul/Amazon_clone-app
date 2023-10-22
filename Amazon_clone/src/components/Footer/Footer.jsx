import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterTop from "./FooterTop";
import "./Footer.css";
import FooterMiddle from "./FooterMiddle";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <>
      <section className="footer-container">
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />
      </section>
    </>
  );
}

export default Footer;
