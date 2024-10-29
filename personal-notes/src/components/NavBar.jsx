import React from "react";
import DarkMode from "./DarkMode";

const NavBar = ({ search }) => {
  return (
    <div className="navbar">
      <div className="ttl-mode">
        <h1>Notes</h1>
        <DarkMode />
      </div>

      <div className="searchbar">
        <input
          onChange={search}
          type="text"
          id="search"
          placeholder="Search Here!!"
          name="search"
        />
        <label htmlFor="search">
          <img src="public/image/search.png" alt="" name="search" />
        </label>
      </div>
    </div>
  );
};

export default NavBar;
