import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <NavLink to="/" className="text-lg md:text-2xl text-white">
        Teerex Shop 👕
      </NavLink>
    </div>
  );
};

export default Logo;
