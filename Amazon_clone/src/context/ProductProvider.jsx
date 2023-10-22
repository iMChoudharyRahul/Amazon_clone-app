import React, { useEffect, useState } from "react";
import ProductContext from "./CreateContext";

const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products`);
        if (!response.ok) {
          throw new Error(`API failed status: ${response.status}`);
        }
        const apiData = await response.json();
        setProductList(apiData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ productList, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
