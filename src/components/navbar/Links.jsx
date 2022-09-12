import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { CartState } from "../../functionalities/context/Context";

const Links = () => {
  const {
    state: { cart },
  } = CartState();

  return (
    <div>
      <ul className="flex sm:gap-8 gap-4 text-base sm:text-xl text-white items-center mr-4 sm:m-0">
        <li>
          <NavLink to="/"> Products 📦 </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <p className="flex text-sm justify-center items-center absolute right-[20px] top-[25px] sm:top-[30px] sm:right-[35px] w-4 h-4 bg-white text-black rounded-full">
              {cart.length || 0}
            </p>
            <AiOutlineShoppingCart />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Links;
