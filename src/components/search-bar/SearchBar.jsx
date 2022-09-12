import React from "react";
import { useLocation } from "react-router-dom";
import { CartState } from "../../functionalities/context/Context";

const SearchBar = () => {
  const { productDispatch } = CartState();
  return (
    <div className="py-8 text-center border-gray-700 ">
      <div className="flex items-center gap-4 justify-center">
        {useLocation().pathname.split("/")[1] !== "cart" && (
          <input
            className="px-4 border-[1px] border-gray-500 p-2 sm:w-96 rounded-3xl"
            type="text"
            name="searchText"
            id="searchText"
            placeholder="Search for products 🔍..."
            onChange={(e) => {
              productDispatch({
                type: "FILTER_SEARCH",
                payload: e.target.value,
              });
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
