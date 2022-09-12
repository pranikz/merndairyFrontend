import React from "react";
import Logo from "./Logo";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="flex relative items-center justify-between shadow-sm px-4 sm:px-12 py-8 bg-[#164e63]">
      <Logo />
      <Links />
    </div>
  );
};

export default Navbar;
