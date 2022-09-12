import React from "react";
import { CartState } from "../../functionalities/context/Context";
import CardContainer from "./CardContainer/CardContainer";

const ProductsList = () => {
  const {
    state: { products },
    productState: {
      colorFilter,
      genderFilter,
      priceFilter,
      typeFilter,
      searchFilter,
    },
  } = CartState();

  const filterProducts = () => {
    let filteredproducts = products;

    if (colorFilter.length) {
      filteredproducts = filteredproducts.filter((product) =>
        colorFilter.includes(product.color)
      );
    }

    if (genderFilter.length) {
      filteredproducts = filteredproducts.filter((product) =>
        genderFilter.includes(product.gender)
      );
    }

    if (priceFilter.length) {
      filteredproducts = filteredproducts.filter((product) =>
        priceFilter.some((range) => {
          // [0,250] = range example
          if (product.price >= range[0] && product.price <= range[1]) {
            return true;
          } else {
            return false;
          }
        })
      );
    }

    if (typeFilter.length) {
      filteredproducts = filteredproducts.filter((product) =>
        typeFilter.includes(product.type)
      );
    }

    if (searchFilter) {
      filteredproducts = filteredproducts.filter((product) =>
        product.name.toLowerCase().includes(searchFilter.toLowerCase())
      );
    }

    return filteredproducts;
  };

  return (
    <div className="flex flex-wrap gap-16 justify-center">
      {filterProducts().length !== 0 ? (
        filterProducts().map((product) => (
          <CardContainer product={product} key={product.id} />
        ))
      ) : (
        <span className="text-2xl">No Match Found </span>
      )}
    </div>
  );
};

export default ProductsList;
