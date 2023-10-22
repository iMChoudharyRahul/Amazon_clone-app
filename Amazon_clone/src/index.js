import React from "react";
import ReactDOM from "react-dom/client";
import reducer, { initialState } from "./components/reducer";
import { StateProvider } from "./context/StateProvider";
import App from "./App";
import ProductProvider from "./context/ProductProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <ProductProvider>
        <App />
      </ProductProvider>
    </StateProvider>
  </React.StrictMode>
);
