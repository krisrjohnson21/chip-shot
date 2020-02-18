import React from "react";

const RoundTile = (props) => {
  return (
    <span id={props.id} className="round-tile">
      <div className="round-text">
        <h4 id="score">
          <strong>Round Score: </strong>{props.round.score}
        </h4>
      </div>
      <div className="round-text">
        <h4 id="birdies">
          <strong>Birdies: </strong>{props.round.birdies}
        </h4>
      </div>
      <div className="round-text">
        <h4 id="pars">
          <strong>Pars: </strong>{props.round.pars}
        </h4>
        <span className="trophy">
          <i id="trophy-icon" className={props.classic}></i>
        </span>
      </div>
    </span>
  )
}

export default RoundTile;
