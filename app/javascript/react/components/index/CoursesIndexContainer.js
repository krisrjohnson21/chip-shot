import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CourseTile from './CourseTile'
import SearchBar from './SearchBar'

const CoursesIndexContainer = (props) => {
  const [courses, setCourses] = useState([])
  const [query, setQuery] = useState({
    golfCourses: [],
    searchString: ""
  })


  useEffect(() => {
    fetch('/api/v1/courses.json')
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
    .then(response => {
      setCourses(response.courses);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, [])

  const courseTiles = courses.map(course => {
    let id = course.id;
    return (
      <div className="row index-div">
        <div className="columns small-4">
          <Link to={`/courses/${id}`}>
            <CourseTile key={course.id} id={course.id} course={course} />
          </Link>
        </div>
      </div>
    )
  })

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
      setCourses(body.courses)
      setQuery({
        golfCourses: [],
        searchString: ""
      })
    })
  }

  return (
    <div>
      <div className="text-center search">
        <SearchBar
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          query={query}
        />
      </div>
      <div className="grid-container">
        <div>{courseTiles}</div>
      </div>
    </div>
  )
}

export default CoursesIndexContainer;
