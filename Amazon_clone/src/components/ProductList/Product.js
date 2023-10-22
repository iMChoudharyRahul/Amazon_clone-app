import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import { useStateValue } from "../../context/StateProvider";
import ProductContext from "../../context/CreateContext";
import { Oval } from "react-loader-spinner";
import { colors } from "@mui/material";

// function Product({id,title,image,price,rating}) {
function Product() {
  const [state, dispatch] = useStateValue();
  const { productList, loading, error } = useContext(ProductContext);
  const [productData, setProductData] = useState([]);

  const addToBasket = (e) => {
    e.stopPropagation();
    const id = Number(e.target.id);
    //find which product we need to add in the cart from the productData
    const selectedProduct = productData.find((product) => product.id === id);
    console.log("Check Select Product:", selectedProduct);
    //  dispatch(addProduct({ product: selectedProduct }));
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: selectedProduct.id,
        title: selectedProduct.title,
        image: selectedProduct.image,
        price: selectedProduct.price,
        rating: selectedProduct.rating.rate,
      },
    });
  };

  useEffect(() => {
    setProductData(productList);
    console.log("Product Data:=", productData);
  }, [productList]);

  if (loading) {
    console.log("Check Loading data", loading);
    return <h2 style={{ color: "black" }}>Loading...plaese Wait</h2>;
  }
  // if (loading){
  //   console.log("Check Loading data", loading);
  //   return (
  //     // <Oval
  //     //   height={60}
  //     //   width={60}
  //     //   color="#febd69"
  //     //   visible={true}
  //     //   wrapperClass="justify-center"
  //     //   ariaLabel="oval-loading"
  //     //   secondaryColor="#febd69"
  //     //   strokeWidth={6}
  //     //   strokeWidthSecondary={6}
  //     // />
  //     <h2 style={{color: "black"}}>Loading...plaese Wait</h2>
  //   )};

  if (error) {
    return console.log("Something went wrong please check api");
  }
  console.log("Check Loading data outside", loading);

  return (
    <>
      <div className="product__box">
        {/* start the map from here  */}
        {productData.map((item) => (
          <div className="product__item" key={item.id}>
            <span className="item__catagory">{item.category}</span>
            {/* ======product image====  */}
            <div className="product__img">
              <img src={item.image} alt="Laptop-beg" />
            </div>
            {/* ========= product info start from here ======= */}
            <div className="product__info">
              <div className="product__title">
                <h2 className="title">{item.title.substring(0, 18)}</h2>
                <p className="product__price">
                  <small>₹</small>
                  <strong>{Math.round(item.price * 72)}</strong>
                </p>
              </div>
              <div className="product__description">
                <p>{item.description.substring(0, 100)}</p>
              </div>
              <div className="product__rating">
                {Array(Math.round(item.rating.rate))
                  .fill()
                  .map((_, i) => (
                    <p>⭐</p>
                  ))}
                {item.rating.rate % 1 !== 0 && <p className="half-star">⭐</p>}
              </div>
              <button
                className="product__btn"
                onClick={addToBasket}
                id={item.id}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
