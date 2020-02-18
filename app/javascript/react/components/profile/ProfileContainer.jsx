import React, { useState, useEffect } from "react"

import RoundTile from "./RoundTile"
import RoundFormContainer from "./RoundFormContainer"

const ProfileContainer = (props) => {
  const [profile, setProfile] = useState({})
  const [coursesPlayed, setCoursesPlayed] = useState([])
  const [reviewsLeft, setReviewsLeft] = useState([])
  const [rounds, setRounds] = useState([])
  const userId = props.match.params.id;

  useEffect(() => {
    fetch(`/api/v1/users/${userId}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw error;
      }
    })
    .then(response => response.json())
    .then(response => {
      setProfile(response.user)
      setRounds(response.user.rounds)
      setCoursesPlayed(response.user.courses)
      setReviewsLeft(response.user.reviews)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, [])

  const roundList = rounds.map(round => {
    return (
      <div key={round.id}>
        <RoundTile
          key={round.id}
          id={round.id}
          round={round}
        />
      </div>
    )
  })

  const coursesPlayedList = coursesPlayed.map(course => {
    return (
      <ul key={course.id}>
        <li>{course.name}</li>
      </ul>
    )
  })

  const addNewRound = formPayload => {
    fetch(`/api/v1/users/${userId}/rounds/`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => {
        return response.json();
      })
      .then(newRoundBody => {
        setRounds([...rounds, newRoundBody]);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  return (
    <>
      <div>
        <h2>
          <strong>User Details</strong>
          <h4>Name: {profile.first} {profile.last}</h4>
          <h4>Location: {profile.city}, {profile.state}</h4>
          <h4>Handicap: {profile.handicap}</h4>
          <h4>About Me: {profile.bio}</h4>
        </h2>
        <hr />
        <h2>
          <strong>Add New Round</strong>
        </h2>
        <RoundFormContainer
          addNewRound={addNewRound}
          rounds={profile.rounds}
        />
      </div>
      <hr />
      <div>
        <h2>
          <strong>Courses You've Played</strong>
        </h2>
        {coursesPlayedList}
      </div>
      <hr />
      <div>
        <h2>
          <strong>Rounds You've Saved</strong>
        </h2>
        {roundList}
      </div>
    </>
  )
}

export default ProfileContainer;
