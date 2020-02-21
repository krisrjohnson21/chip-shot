import React from "react";

const ForecastTile = (props) => {

  return (
    <span id={props.id} className="forecast-tile">
      <div>
        <h4 id="day-name">
          <strong>{props.date}</strong><br />
        </h4>
        <h4 id="summary">
          {props.day}<br />
          <span className="weather">
            <i id="weather-icon" className={props.classy}></i>
          </span>
        </h4>
      </div>
    </span>
  );
};

export default ForecastTile;
