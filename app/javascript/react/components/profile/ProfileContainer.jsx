import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import RoundTile from "./RoundTile"
import RoundFormContainer from "./RoundFormContainer"

const ProfileContainer = (props) => {
  const [profile, setProfile] = useState({})
  const [coursesPlayed, setCoursesPlayed] = useState([])
  const [reviewsLeft, setReviewsLeft] = useState([])
  const [rounds, setRounds] = useState([])
  const userId = props.match.params.id;
  let lowScore = rounds.sort((a, b) => (a.score > b.score) ? 1 : (a.score === b.score) ? ((a.pars > b.pars) ? 1 : -1) : -1 )[0]

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
    let classic = "fas fa-3x fa-"
    if (round.score === lowScore.score) {
      classic += "trophy"
    }

    return (
      <span key={round.id}>
        <RoundTile
          key={round.id}
          id={round.id}
          round={round}
          classic={classic}
        />
      </span>
    )
  })

  const coursesPlayedList = coursesPlayed.map(course => {
    return (
      <ul key={course.id}>
        <Link to={`/courses/${course.id}`}>
          <li>{course.name}</li>
        </Link>
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
    <div className="body-profile">
      <div className="grid-x profile-details">
        <div className="cell small-6">
          <h2>
            <strong>User Details</strong>
          </h2>
          <h4><strong>Name: </strong>{profile.first} {profile.last}</h4>
          <h4><strong>Location: </strong>{profile.city}, {profile.state}</h4>
          <h4><strong>Handicap: </strong>{profile.handicap}</h4>
          <h4><strong>About Me: </strong>{profile.bio}</h4>
        </div>
        <div className="cell small-6">
          <h2>
            <strong>Courses You've Played</strong>
          </h2>
          {coursesPlayedList}
        </div>
      </div>
      <hr />
      <div className="text-center">
        <h2>
          <strong>Rounds You've Saved</strong>
        </h2>
        {roundList}
        <hr />
        <h2>
          <strong>Add New Round</strong>
        </h2>
        <RoundFormContainer
          addNewRound={addNewRound}
          rounds={profile.rounds}
          />
      </div>
    </div>
  )
}

export default ProfileContainer;
