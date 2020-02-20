import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import RoundTile from "./RoundTile"
import RoundFormContainer from "./RoundFormContainer"
import UserReviewTile from "./UserReviewTile"

const ProfileContainer = (props) => {
  const [profile, setProfile] = useState({})
  const [coursesPlayed, setCoursesPlayed] = useState([])
  const [reviewsLeft, setReviewsLeft] = useState([])
  const [rounds, setRounds] = useState([])
  const userId = props.match.params.id;
  let lowScore = rounds.sort((a, b) => (a.score > b.score) ? 1 :
    (a.score === b.score) ? ((a.pars > b.pars) ? 1 : -1) : -1 )[0]
  let i = 0

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
    const handleRoundDelete = () => {
      deleteRound(round.id)
    }
    let trophy = "fas fa-3x fa-"
    if (round.score === lowScore.score) {
      trophy += "trophy"
    }

    return (
      <span key={round.id}>
        <RoundTile
          key={round.id}
          id={round.id}
          round={round}
          trophy={trophy}
          handleRoundDelete={handleRoundDelete}
        />
      </span>
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

  const deleteRound = (roundId) => {
    fetch(`/api/v1/users/${userId}/rounds/${roundId}`, {
      credentials: 'same-origin',
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => {
      return response.json()
    })
    .then(response => {
      setRounds(response)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  const deleteReview = (reviewId) => {
    fetch(`/api/v1/users/${userId}/reviews/${reviewId}`, {
      credentials: 'same-origin',
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => {
      return response.json()
    })
    .then(response => {
      setReviewsLeft(response.reviews)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  const userReviews = reviewsLeft.map(review => {
    let course = coursesPlayed[i]
    i++
    const handleReviewDelete = () => {
      deleteReview(review.id)
    }
    return (
      <div key={review.id} className="review-tile">
        <UserReviewTile
          key={review.id}
          id={review.id}
          course={course}
          fullName={review.userFullName}
          rating={review.rating}
          body={review.body}
          handleReviewDelete={handleReviewDelete}
          />
      </div>
    );
  });

  const coursesPlayedList = coursesPlayed.map(course => {
    return (
      <ul key={course.id}>
        <Link to={`/courses/${course.id}`}>
          <li>{course.name}</li>
        </Link>
      </ul>
    )
  })

  return (
    <div className="body-profile text-center">
      <div className="grid-x profile-details">
        <div className="cell small-12 medium-6 text-center">
          <div className="profile-tile">
            <h2 className="center">
              <strong>User Details</strong>
            </h2>
            <div className="center-pic">
              <img src={profile.profilePic} className="profile-photo"/>
            </div>
            <hr className="profile-hr"/>
            <h4><strong>Name: </strong>{profile.first} {profile.last}</h4>
            <h4><strong>Location: </strong>{profile.city}, {profile.state}</h4>
            <h4><strong>Handicap: </strong>{profile.handicap}</h4>
            <h4><strong>About Me: </strong>{profile.bio}</h4>
          </div>
        </div>
        <div className="cell small-12 medium-6">
          <div className="profile-tile">
            <h2 className="center">
              <strong>Courses You've Played</strong>
            </h2>
            <hr className="profile-hr"/>
            {coursesPlayedList}
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <h2>
          <strong>Rounds You've Saved</strong>
        </h2>
        {roundList}
        <hr />
        <div className="form-tile">
          <h2>
            <strong>Add New Round</strong>
          </h2>
          <RoundFormContainer
            addNewRound={addNewRound}
            rounds={profile.rounds}
            />
        </div>
      </div>
      <hr />
      <div className="text-center">
        <h2>
          <strong>Reviews You've Left</strong>
        </h2>
        {userReviews}
        <hr />
      </div>
    </div>
  )
}

export default ProfileContainer;
