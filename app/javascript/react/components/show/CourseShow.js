import React from 'react';
import { Link } from 'react-router-dom'

const CourseShow = (props) => {
  return(
    <div>
      <img src={props.course.url} className="show-img"></img>
      <h2>{props.course.name}</h2>
      <h4>Holes: {props.course.holes} | Par: {props.course.par}</h4>
      <h4>Address: {props.course.address}, {props.course.city}, {props.course.state}</h4>
      <a href={props.course.website} target="blank" className="external-link">Course Website</a>
    </div>
  )
}

export default CourseShow;
