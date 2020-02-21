import React from "react";
import { Chart } from "react-google-charts";

const RoundDataChart = (props) => {
  let roundsArray = props.rounds
  let scoreArray = [
    ['Round Date', 'Score']
  ]
  let scoreData = roundsArray.map((round) => {
    scoreArray.push([round.date, round.score])
  })

  let parsArray = [
    ['Round Date', 'Birdies', 'Pars']
  ]
  let parsData = roundsArray.map((round) => {
    parsArray.push([round.date, round.birdies, round.pars])
  })

  return (
    <div>
      <div className="data-chart">
        <div>
          <Chart
            chartType="LineChart"
            data={scoreArray}
            graph_id="ScoreChart"
            options={{
              "legend": "bottom",
              backgroundColor: "#EDF5FC",
              series: {
                0: { color: '#23CE6B' }
              }
            }}
            />
        </div>
      </div>
      <div className="data-chart">
        <div>
          <Chart
            chartType="LineChart"
            data={parsArray}
            graph_id="ParsChart"
            options={{
              "legend" :"bottom",
              backgroundColor: "#EDF5FC",
              series: {
                0: { color: '#23CE6B' },
                1: { color: '#272D2D' },
              }
            }}
            />
        </div>
      </div>
    </div>
  );
}

export default RoundDataChart
