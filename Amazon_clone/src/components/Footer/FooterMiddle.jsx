import React from "react";
import FooterMiddleItem from "../../constants/FooterMiddleItem";
import { Link } from "react-router-dom";
import { amazonLogo, indiaFlag } from "../../assets/ExportImg";

const FooterMiddle = () => {
  return (
    <section className="middle-container">
      <div className="info-box">
        {FooterMiddleItem.map((element) => (
          <div className="info-heading" key={element.section}>
            <h3 className="nav-heading">{element.section}</h3>
            <ul className="nav-item">
              {element.items.map((item) => (
                <li className="footer-list" key={item.title}>
                  <Link to={item.link} target="_blank">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-lang">
        <div className="footerItemHover">
          <a href="#top">
            <img className="logo-png" src={amazonLogo} alt="logo" />
          </a>
        </div>
        <div className="">
          <p className="footerItemHover lang-text">English</p>
        </div>
        <div className="footerItemHover">
          <img src={indiaFlag} alt="indianFlagImage" className="flag-image" />
          <p className="india-text">India</p>
        </div>
      </div>
    </section>
  );
};

export default FooterMiddle;
