import React from 'react';
import "../styles/searchbar.css";

const Searchbar = ({setsearch, ButtonClick}) => {
  return (
    <div className="searchBar">
      <input
        type="text"
        className="inputBox"
        onChange={(e) => setsearch(e.target.value)}
      />
      <button onClick={ButtonClick}>Search</button>
    </div>
  );
}

export default Searchbar;
