import React, { useEffect, useState } from "react";

import CourseShow from "./CourseShow";
import ReviewTile from "../review/ReviewTile"
import ReviewFormContainer from "../review/ReviewFormContainer"
import ForecastTile from "./ForecastTile"

const CourseShowContainer = (props) => {
  const [course, setCourse] = useState({});
  const [reviews, setReviews] = useState([]);
  const [forecast, setForecast] = useState([]);
  const courseId = props.match.params.id;
  let today = new Date()
  let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let date = today.getDay()
  let dayName = dayList[date];
  let dayId = 0

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
      setCourse(response.course.course)
      setReviews(response.course.course.reviews)
      setForecast(response.forecast)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [reviews.length])

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

  const deleteReview = (reviewId) => {
    fetch(`/api/v1/${courseId}/reviews/${reviewId}`, {
      credentials: 'same-origin',
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => {
      return response.json()
    })
    .then(response => {
      setReviews(response)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  const reviewList = reviews.map(review => {
    return (
      <div key={review.id}>
        <ReviewTile
          key={review.id}
          id={review.id}
          fullName={review.userFullName}
          rating={review.rating}
          body={review.body}
          handleDelete={deleteReview}
        />
        <hr />
      </div>
    );
  });

  const forecastList = forecast.map(day => {
    dayId++
    let newDayName = dayList[date]
    date++

    let classy = "fas fa-3x fa-"
    if (day.includes("cloudy") || day.includes("cast")) {
      classy += "cloud"
    } else if (day.includes("snow")|| day.includes("cast")) {
      classy += "snowflake"
    } else if (day.includes("fog")|| day.includes("Fog")) {
      classy += "smog"
    } else if (day.includes("rain") || day.includes("shower") || day.includes("drizzle") || day.includes("Rain") || day.includes("Shower")) {
      classy += "cloud-showers-heavy"
    } else {
      classy += "sun"
    }

    return (
      <ForecastTile
        key={dayId}
        day={day}
        date={newDayName}
        classy={classy}
      />
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
                <br />
                <div>{reviewList}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="cell small-12 text-center">
        <h2>
          <strong>Five Day Forecast for {course.name}</strong>
        </h2>
        {forecastList}
      </div>
    </>
  )
}

export default CourseShowContainer;
