import React, { useState } from "react";

const SearchBar = (props) => {
  const [query, setQuery] = useState({
    golfCourses: [],
    searchString: ""
  })

  const clearForm = (event) => {
    setQuery({
      golfCourses: [],
      searchString: ""
    })
  }

  const handleChange = (event) => {
    setQuery({
      ...query,
      searchString: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const body = JSON.stringify({
      search_string: query.searchString
    })

    fetch('/api/v1/courses/search.json', {
      credentials: 'same-origin',
      method: 'POST',
      body: body,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw error;
      }
    })
    .then(response => response.json())
    .then(body => {
      setQuery({
        searchString: "",
        golfCourses: body.courses
      })
    })
  }

  const courseResults = query.golfCourses.map(course => {
    return(
      <li>{course.name}</li>
    )
  })

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-bar">
        <h4>Search for a golf course</h4>
        <input
          type="text"
          name="searchString"
          value={query.searchString}
          onChange={handleChange}
          >
        </input>
        <div className="review-button-group">
          <input className="button" type="submit" value="Search" />
          <input className="button" type="button" value="Clear" onClick={clearForm} />
        </div>
      </form>
      <ul>{courseResults}</ul>
    </div>
  )
}

export default SearchBar
