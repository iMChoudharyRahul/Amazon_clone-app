import React from "react";
import FooterCategoryItem from "../../constants/FooterCategoryItem";

const FooterBottom = () => {
  return (
    <section className="footer-bottom">
      <div className=".category-box">
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
      </div>
      <div className="rights-box"></div>
    </section>
  );
};

export default FooterBottom;
