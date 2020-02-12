import React from 'react';
import { Link } from 'react-router-dom'

const CourseShow = (props) => {
  let range;
  let carts;
  let rentals;
  let lessons;

  if (props.course.range === "Yes") {
    range = `${props.course.name} has a driving range`
  }
  if (props.course.carts === "Yes") {
    carts = `${props.course.name} allows golf carts`
  }
  if (props.course.rentals === "Yes") {
    rentals = `${props.course.name} provides club rentals`
  }
  if (props.course.lessons === "Yes") {
    lessons = `${props.course.name} offers playing lessons`
  }

  return(
    <>
      <div className="flip">
        <div className="front">
          <img src={props.course.url} className="show-img"></img>
          <hr />
          <div className="text-center">
            <h2>{props.course.name}</h2>
            <br />
            <h4 id="address">{props.course.address}</h4>
            <h4 id="city-state">{props.course.city}, {props.course.state}</h4>
          </div>
        </div>
        <div className="back">
          <div className="text-center">
            <h2 id="course-name">{props.course.name}</h2>
            <hr />
            <h4 id="membership">Membership: {props.course.membership}</h4>
            <h4 id="holes">Holes: {props.course.holes} | Par: {props.course.par}</h4>
            <hr />
            <h4 id="range">{range}</h4>
            <h4 id="carts">{carts}</h4>
            <h4 id="rentals">{rentals}</h4>
            <h4 id="lessons">{lessons}</h4>
          </div>
        </div>
      </div>
      <div className="button-group">
        <a href={props.course.website} target="blank" className="button show-button" id="link">Click here for course website</a>
        <Link to="/courses" className="button show-button">Back to course list</Link>
      </div>
    </>
  )
}

export default CourseShow;
