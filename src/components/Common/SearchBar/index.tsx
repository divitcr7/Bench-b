import React from "react";
import "./search.scss";

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." className="search-input" />
      <button className="search-button">
        <img src="/assets/icons/search.png" alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
