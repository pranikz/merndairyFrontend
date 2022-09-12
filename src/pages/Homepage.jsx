import React from "react";
import Filters from "../components/boxFilter/Filters";
import MobileFilters from "../components/boxFilter/MobileFilter";
import ProductsList from "../components/products/ProductsList";
import SearchBar from "../components/search-bar/SearchBar";

const Homepage = () => {
  return (
    <div>
      <div className="flex gap-4 justify-center relative">
        <SearchBar />
        <MobileFilters />
      </div>
      <div className="flex items-start gap-8">
        <div className="sm:block hidden">
          <Filters />
        </div>
        <ProductsList />
      </div>
    </div>
  );
};

export default Homepage;
