import React from "react";
import { CartState } from "../../../functionalities/context/Context";

const CardContainer = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="p-2 shadow-xl bg-white rounded-md">
      <div className="border-[3px] border-gray-200">
        <img
          src={product.imageURL}
          alt={product.name}
          width={300}
          height={250}
        />
      </div>
      <div className="font-bold text-2xl">
        <p> {product.name} </p>
      </div>
      <div className="flex justify-between products-center text-lg">
        <p> ₹ {product.price} </p>

        {cart.some((p) => p.id === product.id) ? (
          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_QTY",
                payload: product,
              })
            }
            className="px-3 py-2 transition ease-in duration-200 rounded-full hover:bg-pink-700 hover:text-white border-2 border-gray-900 focus:outline-none"
          >
            Remove from cart
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({
                type: "ADD_QTY",
                payload: product,
              })
            }
            disabled={!product.quantity}
            className="px-6 py-2 transition ease-in duration-200  rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default CardContainer;
