import React, { useState, useEffect } from 'react'
import _ from 'lodash'

import TextField from '../review/TextField'
import ErrorList from '../review/ErrorList'

const RoundFormContainer = (props) => {
  const [newRound, setNewRound] = useState({
    course: "",
    date: "mm/dd/yyyy",
    score: 75,
    birdies: 0,
    pars: 0
  })

  const [errors, setErrors] = useState({})

  const clearForm = (event) => {
    setNewRound({
      course: "",
      date: "mm/dd/yyyy",
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

    <label>Date You Played (mm/dd/yyyy)</label>
      <TextField
        type="text"
        fieldName="date"
        id="date"
        content={newRound.date}
        handleChange={handleFieldChange}
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
        <input className="button" type="submit" value="Submit" />
        <input className="button" type="button" value="Clear Form" onClick={clearForm} />
      </div>
    </form>
  )
}

export default RoundFormContainer;
