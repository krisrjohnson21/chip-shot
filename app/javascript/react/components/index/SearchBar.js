import React, { useState } from "react";

const SearchBar = (props) => {
//move handlesubmit up one level
//replace index results with search results

  return (
    <form onSubmit={props.handleSubmit} className="search-bar">
      <h3>Find a course</h3>
      <p>Search by course name, city, state, or membership type</p>
      <input
        type="text"
        name="searchString"
        value={props.query.searchString}
        onChange={props.handleChange}
        >
      </input>
      <div className="search-button-group">
        <input className="button" type="submit" value="Search" />
      </div>
    </form>
  )
}

export default SearchBar
