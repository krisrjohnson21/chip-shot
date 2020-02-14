import React from "react";

const ForecastTile = (props) => {

  return (
    <span id={props.id} className="forecast-tile">
      <h4 id="summary">
        <strong>{props.day}</strong><br />
        <span className="weather">
          <i id="weather-icon" className={props.classy}></i>
        </span>
      </h4>
    </span>
  );
};

export default ForecastTile;
