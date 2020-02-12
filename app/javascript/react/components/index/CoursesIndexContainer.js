import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CourseTile from './CourseTile'

const CoursesIndexContainer = (props) => {
  const [courses, setCourses] = useState([])

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

  return (
    <div className="grid-container">
      <div>{courseTiles}</div>
    </div>
  )
}

export default CoursesIndexContainer;
