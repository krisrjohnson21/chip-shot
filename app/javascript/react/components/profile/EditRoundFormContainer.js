import React, { useState, useEffect } from "react"
import { Link, Redirect } from "react-router-dom"

import TextField from '../review/TextField'
import ErrorList from '../review/ErrorList'

const EditRoundFormContainer = (props) => {
  const userId = props.match.params.id;
  const roundId = props.match.params.roundId;
  debugger

  const [rounds, setRounds] = useState([])
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [roundInfo, setRoundInfo] = useState({
    course: "",
    date: "mm/dd/yyyy",
    score: 75,
    birdies: 0,
    pars: 0
  })

  const [errors, setErrors] = useState({})

  const updateRound = (editedRound) => {
    fetch(`/api/v1/users/${userId}/rounds/${roundId}`, {
      credentials: 'same-origin',
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedRound)
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage)
          error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => {
      return response.json()
    })
    .then(response => {
      setRounds(response)
      setShouldRedirect(true)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  if (shouldRedirect) {
    return <Redirect to={`/users/${userId}/profile`} />
  }

  const handleEditFieldChange = (event) => {
    setRoundInfo({
      ...roundInfo,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["course", "date", "score", "birdies", "pars"]
    requiredFields.forEach((field) => {
      if (roundInfo[field].toString().trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "cannot be blank"
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleEditSubmit = (event) => {
    event.preventDefault()
    if (validForSubmission()) {
      updateRound(roundInfo)
    }
  }

  return (
    <div className="text-center">
      <h2>
        <strong>Edit Round</strong>
      </h2>
      <form className="form" onSubmit={handleEditSubmit}>
        <div>
          <h5>{props.signInError}</h5>
        </div>
        <ErrorList errors={errors} />
        <label>Overall Score</label>
        <TextField
          type="text"
          fieldName="score"
          id="score"
          content={roundInfo.score}
          handleChange={handleEditFieldChange}
          />

        <label>Course Name</label>
        <TextField
          type="text"
          fieldName="course"
          id="course"
          content={roundInfo.course}
          handleChange={handleEditFieldChange}
          />

        <label>Date You Played (mm/dd/yyyy)</label>
        <TextField
          type="text"
          fieldName="date"
          id="date"
          content={roundInfo.date}
          handleChange={handleEditFieldChange}
          />

        <label>Number of Birdies</label>
        <select
          className="select-field"
          name="birdies"
          id="birdies"
          onChange={handleFieldChange}
          value={newRound.birdies}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          <option value={16}>16</option>
          <option value={17}>17</option>
          <option value={18}>18</option>
        </select>

        <label>Number of Pars</label>
          <select
            className="select-field"
            name="pars"
            id="pars"
            onChange={handleFieldChange}
            value={newRound.pars}
          >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          <option value={16}>16</option>
          <option value={17}>17</option>
          <option value={18}>18</option>
        </select>

        <div className="review-button-group">
          <input className="button" type="submit" value="Update Round" />
          <Link to={`/users/${userId}/profile`} className="button">
            Discard Changes
          </Link>
        </div>
      </form>
    </div>
  )
}

export default EditRoundFormContainer;
