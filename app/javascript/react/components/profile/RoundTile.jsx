import React from "react";

const RoundTile = (props) => {
  return (
    <div id={props.id}>
      <h4>
        Round Score: {props.round.score}
      </h4>
      <h4>
        Birdies: {props.round.birdies}
      </h4>
      <h4>
        Pars: {props.round.pars}
      </h4>
    </div>
  )
}

export default RoundTile;
