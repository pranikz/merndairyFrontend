import React, { createContext, useContext, useEffect, useReducer } from "react";
import { base_url_endpoint } from "../constants/constants";
import { cartReducer } from "../reducers/cartReducer";
import { productReducer } from "../reducers/productReducer";

const ProductContext = createContext();

const Context = ({ children }) => {
  const fetchData = async () => {
    await fetch(`${base_url_endpoint}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "FETCH_API_DATA",
          payload: data,
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    colorFilter: [],
    genderFilter: [],
    priceFilter: [],
    typeFilter: [],
    searchFilter: "",
  });

  return (
    <ProductContext.Provider
      value={{ state, dispatch, productState, productDispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(ProductContext);
};
