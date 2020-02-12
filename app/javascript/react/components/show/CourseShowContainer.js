import React, { useEffect, useState } from 'react';

import CourseShow from './CourseShow';
import ReviewTile from '../review/ReviewTile'
import ReviewFormContainer from '../review/ReviewFormContainer'

const CourseShowContainer = (props) => {
  const [course, setCourse] = useState({});
  const [reviews, setReviews] = useState([]);
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
      setReviews(response.course.reviews)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const addNewReview = formPayload => {
    fetch(`/api/v1/courses/${courseId}/reviews/`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
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
      .then(response => {
        return response.json();
      })
      .then(newReviewBody => {
        setReviews([...reviews, newReviewBody.review]);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  const reviewList = reviews.map(review => {
    return (
      <ReviewTile
        key={review.id}
        id={review.id}
        fullName={review.userFullName}
        rating={review.rating}
        body={review.body}
      />
    );
  });

  return(
    <>
      <div className="text-center">
        <CourseShow key={course.id} course={course} />
      <hr />
      </div>
      <div className="text-center">
        <h2>
          <strong>Reviews for {course.name}</strong>
        </h2>
        <div>{reviewList}</div>
      </div>

      <div>
        <hr />
        <h2 className='text-center'>
          <strong>Add a New Review for {course.name}</strong>
        </h2>
        <ReviewFormContainer
          addNewReview={addNewReview}
          reviews={course.reviews}
        />
      </div>
    </>
  )
}

export default CourseShowContainer;
