import React, { useEffect, useState } from 'react';

import CourseShow from './CourseShow';

const CourseShowContainer = (props) => {
  const [course, setCourse] = useState({});
  const courseId = props.match.params.id;

  useEffect(() => {
    fetch(`/api/v1/courses/${courseId}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error)
      }
    })
    .then(response => response.json())
    .then(response => {
      setCourse(response.course)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return(
    <div className="text-center">
      <CourseShow key={course.id} course={course} />
    </div>
  )
}

export default CourseShowContainer;
