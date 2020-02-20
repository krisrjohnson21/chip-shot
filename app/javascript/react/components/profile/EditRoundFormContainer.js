import React, { useState, useEffect } from "react"
import { Link, Redirect } from "react-router-dom"

import TextField from '../review/TextField'
import ErrorList from '../review/ErrorList'

const EditRoundFormContainer = (props) => {
  const userId = props.match.params.id;
  const roundId = props.match.params.roundId;

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
    <form className="round-form" onSubmit={handleEditSubmit}>
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

    <label>Date You Played (dd/mm/yyyy)</label>
      <TextField
        type="text"
        fieldName="date"
        id="date"
        content={roundInfo.date}
        handleChange={handleEditFieldChange}
      />

    <label>Number of Birdies</label>
      <TextField
        type="text"
        fieldName="birdies"
        id="birdies"
        content={roundInfo.birdies}
        handleChange={handleEditFieldChange}
      />

    <label>Number of Pars</label>
      <TextField
        type="text"
        fieldName="pars"
        id="pars"
        content={roundInfo.pars}
        handleChange={handleEditFieldChange}
      />

      <div className="review-button-group">
        <input className="button" type="submit" value="Update Round" />
      </div>
    </form>
  )
}

export default EditRoundFormContainer;
