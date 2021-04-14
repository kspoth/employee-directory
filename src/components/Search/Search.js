import React from "react";
import "./style.css";

function Search(props) {
  return (
    <div className="form-group">
      <form className="search">
        <input
          name="search"
          type="text"
          placeholder="search"
          className="form-control"
          onChange={props.handleInputChange}
        ></input>
        <button onClick={props.handleSearch} className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
