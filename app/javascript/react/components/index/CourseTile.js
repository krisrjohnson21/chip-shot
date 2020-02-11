import React from 'react';

const CourseTile = (props) => {
  return (
    <div>
      <img src={props.course.url} className="index-img"></img>
      <h2 className="header" id="course-name">{props.course.name}</h2>
    </div>
  )
}

export default CourseTile;
