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
    <div>
      <img src={props.course.url} className="show-img"></img>
      <h2>{props.course.name}</h2>
      <h4 id="membership">Membership: {props.course.membership}</h4>
      <h4 id="holes">Holes: {props.course.holes} | Par: {props.course.par}</h4>
      <h4 id="address">Address: {props.course.address}, {props.course.city}, {props.course.state}</h4>
      <h4 id="range"><li>{range}</li></h4>
      <h4 id="carts"><li>{carts}</li></h4>
      <h4 id="rentals"><li>{rentals}</li></h4>
      <h4 id="lessons"><li>{lessons}</li></h4>
      <a href={props.course.website} target="blank" className="external-link">Course Website</a>
    </div>
  )
}

export default CourseShow;
