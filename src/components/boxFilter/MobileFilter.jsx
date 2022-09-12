import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import Filters from "./Filters";

const MobileFilters = () => {
  const [showFilters, setShowFilters] = useState(false);

  function handleFilterToggle() {
    console.log("clicked");
    setShowFilters((prevToggle) => !prevToggle);
  }

  return (
    <div className="self-center sm:hidden block text-2xl cursor-pointer">
      <FaFilter onClick={handleFilterToggle} />

      {showFilters && (
        <div className="absolute right-[44px] top-[80px] z-20">
          <Filters />
        </div>
      )}
    </div>
  );
};

export default MobileFilters;
