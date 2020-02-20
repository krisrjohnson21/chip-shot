import React from "react";
import { Link } from "react-router-dom"

const RoundTile = (props) => {
  const roundId = props.id
  const userId = props.user

  return (
    <span id={props.id} className="round-tile">
      <div className="round-text">
        <h4 id="date">
          <strong>Round Date: </strong>{props.round.date}
        </h4>
      </div>
      <div className="round-text">
        <h4 id="course">
          <strong>Course: </strong>{props.round.course}
        </h4>
      </div>
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
          <i id="trophy-icon" className={props.trophy}></i>
        </span>
      </div>
      <div className="round-button-group">
        <Link to={`/users/${userId}/rounds/${roundId}/update`} className="button">
          Edit Round
        </Link>
        <input type="button" className="button delete" onClick={props.handleRoundDelete} value="Delete Round"/>
      </div>
    </span>
  )
}

export default RoundTile;
