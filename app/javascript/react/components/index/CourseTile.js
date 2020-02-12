import React from 'react';

const CourseTile = (props) => {
  return (
    <span className="image-tile">
      <img src={props.course.url} className="index-img" />
      <div className="index-image-text">
        <div className="course-title-text" id="course-name">
          {props.course.name}
        </div>
      </div>
      <div className="ribbon-shadow">
      </div>
    </span>
  )
}

export default CourseTile;
