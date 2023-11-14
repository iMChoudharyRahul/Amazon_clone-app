import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SearchBar from "./SearchBar";
import { useStateValue } from "../../context/StateProvider";
import { amazonLogo } from "../../assets/ExportImg";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      {/* header logo */}
      <div className="header">
        {/* ===============<Navbar>======================= */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="header__logo">
            <img className="header__logo_img" src={amazonLogo} alt="logo" />
          </div>
        </Link>
        {/* ==============<search bar>========================= */}
        <div className="header__search">
          <SearchBar />
        </div>
        {/* =================<navigation part>================= */}
        <div className="header__nav">
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello, Sign in</span>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span className="nav__itemLineTwo">Account & list</span>
              {/* <span class="nav-icon nav-arrow" style="visibility: visible;"></span> */}
            </Link>
          </div>

          <div className="nav__item return-order">
            <span className="nav__itemLineOne">Return</span>
            <span className="nav__itemLineTwo">& Order</span>
          </div>

          <div className="nav__itemBasket">
            <Link to="/checkout" style={{ textDecoration: "none" }}>
              <span className="nav__iconBasket">
                <LocalGroceryStoreIcon />
                <sup className="nav__basketCount">{basket.length}</sup>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <ul>
          <li>All</li>
          <li>Mobile</li>
          <li>Category</li>
          <li>Computer</li>
          <li>Cloths</li>
          <li>Shoes</li>
          <li>Electronics</li>
          <li className="product-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4T3h5vATnikLb9_bh1Ghc4RNPBGmMw1xyg&usqp=CAU"
              alt="delivery-img"
            />
          </li>
          <li className="product-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0QNsW5U1o54ZDZqGmGBaKY32c5GGC7HZZb7itDKgBsPCx4OlEZt60tazudC-B-pMDRt8&usqp=CAU"
              alt=""
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
