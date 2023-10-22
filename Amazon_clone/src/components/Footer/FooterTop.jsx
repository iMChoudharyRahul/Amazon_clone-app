import React from "react";
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <section className="footer-top">
      {/* if user not login then redirect to login page */}
      <div className="signin-box">
        <p className="heading-1">See personalized recommendations </p>
        <button className="sign-in-btn">Sign in</button>
        <p className="heading-2">
          New customer? <span>Start here</span>
        </p>
      </div>
      <div className="btn-box">
        <a href="#" style={{ textDecoration: "none" }}>
          <button className="back-btn">Back to Top</button>
        </a>
      </div>
    </section>
  );
};

export default FooterTop;