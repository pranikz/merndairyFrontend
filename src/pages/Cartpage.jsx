import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartState } from "../functionalities/context/Context";

const Cartpage = () => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const {
    state: { cart },
    dispatch,
  } = CartState();

  useEffect(() => {
    setTotal(
      cart.reduce(
        (total, currVal) => total + Number(currVal.price) * currVal.qty,
        0
      )
    );
  }, [cart]);

  return (
    <div className="p-10 h-screen">
      <h1 className="font-semibold text-2xl"> My Cartpage 🛒 </h1>
      <h4 className="text-right font-semibold text-lg">🛒 total: ₹ {total}</h4>
      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center py-20 gap-4">
          <h1 className="">You don't have any items in your cart yet</h1>
          <button
            className="bg-black hover:bg-gray-400 py-2 px-4 rounded text-white"
            onClick={() => navigate("/")}
          >
            Go back
          </button>
        </div>
      ) : (
        <div>
          <ul className="py-10 flex justify-center flex-col gap-4 bg-white rounded-lg">
            {cart.map((item, index) => (
              <li key={item.type + index}>
                <div className="shadow-xl p-4 sm:flex sm:justify-between sm:gap-0 gap-4">
                  <div className="sm:flex flex-col py-4 px-10 sm:px-0 sm:w-36 sm:py-0">
                    <img
                      src={item.imageURL}
                      alt={item.name}
                      className="w-full h-full"
                    />
                  </div>
                  <h1 className="font-semibold flex self-center text-xl">
                    {item.name}
                  </h1>
                  <h1 className="font-semibold flex self-center text-xl">
                    ₹{item.price}
                  </h1>
                  <div className="flex justify-between items-center sm:gap-80">
                    <select
                      className="py-2 px-4 ml-8 sm:ml-4 bg-[#0c4a6e] cursor-pointer text-white rounded-2xl sm:rounded-full"
                      id="qty"
                      name="qty"
                      form="qtyForm"
                      onChange={(e) =>
                        dispatch({
                          type: "UPDATE_QTY",
                          payload: {
                            id: item.id,
                            qty: e.target.value,
                          },
                        })
                      }
                    >
                      {[...Array(item.quantity).keys()].map((x) => {
                        return (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        );
                      })}
                    </select>

                    <button
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_QTY",
                          payload: item,
                        })
                      }
                      className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cartpage;
