import React from "react";

const ReviewTile = (props) => {
  return (
    <div id={props.id} className="__list-item cell">
      <h4 id="reviewer">
        <strong>Reviewer Name: </strong>
        {props.fullName}
      </h4>
      <h4 id="review">
        <strong>Rating: </strong>{props.rating} |
          <strong> Review: </strong>{props.body}
      </h4>
      <input className="button" type="button" onClick={props.handleDelete} value="Delete Review"/>
    </div>
  );
};

export default ReviewTile;
