import React from "react";
// import FooterCategoryItem from "../../constants/FooterCategoryItem";

const FooterBottom = () => {
  return (
    <section className="footer-bottom">
      {/* <div className=".category-box">
        {FooterCategoryItem.map((item) => (
          <div
            className="category-item"
            key={item.id}
            onClick={() => window.open(item.link, "_blank")}
          >
            <h3 className="title-heading">{item.title}</h3>
            <p className="content-item">{item.content}</p>
          </div>
        ))}
      </div> */}
      <div className="rights-box">
        <div className="terms-condition">
          <h3>Condition of Use & Sale</h3>
          <h3>Privacy Notice</h3>
          <h3>Interest-Based Ads</h3>
        </div>
        <div className="policy">
          <h3>© 1996-2023, Amazon.com, Inc. or its affiliates</h3>
        </div>
      </div>
    </section>
  );
};

export default FooterBottom;
