import React, { useState, useEffect } from 'react'
import _ from 'lodash'

import TextField from '../review/TextField'
import ErrorList from '../review/ErrorList'

const RoundFormContainer = (props) => {
  const [newRound, setNewRound] = useState({
    score: 75,
    birdies: 0,
    pars: 0
  })

  const [errors, setErrors] = useState({})

  const clearForm = (event) => {
    setNewRound({
      score: 75,
      birdies: 0,
      pars: 0
    })
    setErrors({})
  }

  const handleFieldChange = (event) => {
    setNewRound({
      ...newRound,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["score", "birdies", "pars"]
    requiredFields.forEach((field) => {
      if (newRound[field].toString().trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "cannot be blank"
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validForSubmission()) {
      props.addNewRound(newRound)
      clearForm()
    }
  }

  return (
    <form className="round-form" onSubmit={handleSubmit}>
      <div>
        <h5>{props.signInError}</h5>
      </div>
      <ErrorList errors={errors} />
      <label>Overall Score</label>
      <TextField
        type="text"
        fieldName="score"
        id="score"
        content={newRound.score}
        handleChange={handleFieldChange}
      />

    <label>Course Name</label>
      <TextField
        type="text"
        fieldName="course"
        id="course"
        content={newRound.course}
        handleChange={handleFieldChange}
      />

      <label>Date You Played (dd/mm/yyyy)</label>
      <TextField
        type="text"
        fieldName="date"
        id="date"
        content={newRound.date}
        handleChange={handleFieldChange}
      />

    <label>Number of Birdies</label>
      <TextField
        type="text"
        fieldName="birdies"
        id="birdies"
        content={newRound.birdies}
        handleChange={handleFieldChange}
      />

    <label>Number of Pars</label>
      <TextField
        type="text"
        fieldName="pars"
        id="pars"
        content={newRound.pars}
        handleChange={handleFieldChange}
      />

      <div className="review-button-group">
        <input className="button" type="submit" value="Submit" />
        <input className="button" type="button" value="Clear Form" onClick={clearForm} />
      </div>
    </form>
  )
}

export default RoundFormContainer;
