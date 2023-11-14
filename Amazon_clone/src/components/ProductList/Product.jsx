import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import { useStateValue } from "../../context/StateProvider";
import ProductContext from "../../context/CreateContext";
import { Oval } from "react-loader-spinner";

function Product() {
  const [state, dispatch] = useStateValue();
  const { productList, loading, error } = useContext(ProductContext);
  const [productData, setProductData] = useState([]);

  const addToBasket = (e) => {
    e.stopPropagation();
    const id = Number(e.target.id);
    //find which product we need to add in the cart from the productData
    const selectedProduct = productData.find((product) => product.id === id);
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: selectedProduct.id,
        title: selectedProduct.title,
        image: selectedProduct.image,
        price: selectedProduct.price,
        rating: selectedProduct.rating.rate,
        category: selectedProduct.category,
      },
    });
  };

  useEffect(() => {
    setProductData(productList);
  }, [productList]);

  /**
   * loader during apis data fetching
   */
  if (loading) {
    return (
      <Oval
        height={80}
        width={80}
        color="green"
        visible={true}
        wrapperClass="oval-loading"
        ariaLabel="oval-loading"
        secondaryColor="#febd69"
        strokeWidth={6}
        strokeWidthSecondary={6}
      />
    );
  }

  if (error) {
    return console.log("Something went wrong please check api");
  }

  return (
    <>
      <div className="product__box">
        {productData.map((item) => (
          <div className="product__item" key={item.id}>
            <span className="item__catagory">{item.category}</span>
            <div className="product__img">
              <img src={item.image} alt="Laptop-beg" />
            </div>
            <div className="product__info">
              <div className="product__title">
                <h2 className="title">{item.title.substring(0, 18)}</h2>
                <p className="product__price">
                  <small>₹</small>
                  <strong>{Math.round(item.price * 83)}</strong>
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
