import React, { useEffect, useState } from 'react';

import CourseShow from './CourseShow';
import ReviewTile from '../review/ReviewTile'
import ReviewFormContainer from '../review/ReviewFormContainer'
import ForecastTile from './ForecastTile'

const CourseShowContainer = (props) => {
  const [course, setCourse] = useState({});
  const [reviews, setReviews] = useState([]);
  const [forecast, setForecast] = useState([]);
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
      setReviews(response.reviews)
      setForecast(response.forecast)
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
      <div key={review.id}>
        <hr />
        <ReviewTile
          key={review.id}
          id={review.id}
          fullName={review.userFullName}
          rating={review.rating}
          body={review.body}
        />
      </div>
    );
  });


  const forecastList = forecast.map(day => {
    let classy = "fas fa-3x fa-"
    if (day.includes("cloudy") || day.includes("overcast")) {
      classy += "cloud"
    } else if (day.includes("snow")) {
      classy += "snowflake"
    } else if (day.includes("rain") || day.includes("shower")) {
      classy += "cloud-showers-heavy"
    } else {
      classy += "sun"
    }

    return (
      <span className="forecast-span" key={day.id}>
        <ForecastTile
          day={day}
          classy={classy}
        />
    </span>
    );
  });

  return(
    <>
      <div className="body">
        <div className="grid-x">
          <div className="cell small-6">
            <CourseShow key={course.id} course={course} />
          </div>

          <div className="review-box">
            <div className="cell small-6">
              <div className="text-center">
                <h2>
                  <strong>Add New Review</strong>
                </h2>
                <ReviewFormContainer
                  addNewReview={addNewReview}
                  reviews={course.reviews}
                  />
                <hr />
                <h2>
                  <strong>Reviews of {course.name}</strong>
                </h2>
                <div>{reviewList}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cell small-12 text-center">{forecastList}</div>
    </>
  )
}

export default CourseShowContainer;
