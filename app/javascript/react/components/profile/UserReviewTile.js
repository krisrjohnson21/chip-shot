import React from "react";

const UserReviewTile = (props) => {
  return (
    <div id={props.id} className="">
      <h4 id="course-name">
        <strong>Course Name: </strong>
        {props.course.name}
      </h4>
      <h4 id="rating">
        <strong>Rating: </strong>{props.rating}<br />
      </h4>
      <h4 id="review">
        <strong>Review: </strong>{props.body}
      </h4>
      <input type="button" className="button" onClick={props.handleReviewDelete} value="Delete Review"/>
    </div>
  );
};

export default UserReviewTile;
