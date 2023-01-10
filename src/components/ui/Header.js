import React from "react";

import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="home-header">
      <div className="logo">
        Drink<span>Finder</span>
      </div>
      <SearchBar />
    </div>
  );
}

export default Header;
