import React from "react";

const ForecastTile = (props) => {
  return (
    <span id={props.id} className="forecast-tile">
      <h4 id="summary">
        <strong>{props.day}</strong>
      </h4>
    </span>
  );
};

export default ForecastTile;
