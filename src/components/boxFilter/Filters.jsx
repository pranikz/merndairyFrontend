import React from "react";
import { labelOptions } from "../../functionalities/constants/constants";
import { CartState } from "../../functionalities/context/Context";

const Filters = () => {
  const {
    productDispatch,
    productState: { colorFilter, genderFilter, priceFilter, typeFilter },
  } = CartState();

  return (
    <div className="flex flex-col bg-white border-2 border-gray-100 shadow-2xl px-4 w-52 p-4 mx-6">
      <div className="flex flex-col space-y-4">
        <span className="text-2xl font-bold">Filters</span>
        <div className="color">
          <label htmlFor="color" id="color" className="font-semibold text-xl">
            Color
          </label>
          {labelOptions.color.map((colorOption, index) => {
            return (
              <div key={index} className="flex gap-2">
                <input
                  type="checkbox"
                  key={index}
                  onChange={(e) => {
                    if (e.target.checked) {
                      productDispatch({
                        type: "COLOR_FILTER",
                        payload: { color: colorOption, checked: true },
                      });
                    } else {
                      productDispatch({
                        type: "COLOR_FILTER",
                        payload: { color: colorOption, checked: false },
                      });
                    }
                  }}
                  checked={colorFilter.includes(colorOption) ? true : false}
                />
                {colorOption}
              </div>
            );
          })}
        </div>
        {/* by gender */}
        <div className="gender">
          <label htmlFor="gender" id="gender" className="font-semibold text-xl">
            Gender
          </label>
          {labelOptions.gender.map((genderOption, index) => {
            return (
              <div key={index} className="flex gap-2">
                <input
                  type="checkbox"
                  key={index}
                  onChange={(e) => {
                    if (e.target.checked) {
                      productDispatch({
                        type: "GENDER_FILTER",
                        payload: { gender: genderOption, checked: true },
                      });
                    } else {
                      productDispatch({
                        type: "GENDER_FILTER",
                        payload: { gender: genderOption, checked: false },
                      });
                    }
                  }}
                  checked={genderFilter.includes(genderOption) ? true : false}
                />
                {genderOption}
              </div>
            );
          })}
        </div>

        {/* by price */}
        <div className="price">
          <label htmlFor="price" id="price" className="font-semibold text-xl">
            Price
          </label>
          {labelOptions.price.map((priceOption, index) => {
            return (
              <div key={index} className="flex gap-2">
                <input
                  type="checkbox"
                  key={index}
                  onChange={(e) => {
                    if (e.target.checked) {
                      productDispatch({
                        type: "PRICE_FILTER",
                        payload: { range: priceOption, checked: true },
                      });
                    } else {
                      productDispatch({
                        type: "PRICE_FILTER",
                        payload: { range: priceOption, checked: false },
                      });
                    }
                  }}
                  checked={priceFilter.some((range) => {
                    return (
                      priceOption[0] === range[0] && priceOption[1] === range[1]
                    );
                  })}
                />
                ₹ {priceOption.join("-")}
              </div>
            );
          })}
        </div>

        {/* by type */}
        <div className="type">
          <label htmlFor="type" id="type" className="font-semibold text-xl">
            Type
          </label>
          {labelOptions.type.map((typeChoice, index) => {
            return (
              <div key={index} className="flex gap-2">
                <input
                  type="checkbox"
                  key={index}
                  onChange={(e) => {
                    if (e.target.checked) {
                      productDispatch({
                        type: "TYPE_FILTER",
                        payload: { type: typeChoice, checked: true },
                      });
                    } else {
                      productDispatch({
                        type: "TYPE_FILTER",
                        payload: { type: typeChoice, checked: false },
                      });
                    }
                  }}
                  checked={typeFilter.includes(typeChoice) ? true : false}
                />
                {typeChoice}
              </div>
            );
          })}
        </div>

        <button
          onClick={() =>
            productDispatch({
              type: "CLEAR_FILTER",
            })
          }
          className="bg-[#f87171] text-[#1e293b] p-2 rounded"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
