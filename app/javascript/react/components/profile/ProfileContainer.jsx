import React, { useState, useEffect } from 'react'

const ProfileContainer = (props) => {
  const [profile, setProfile] = useState({})
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
      setProfile(response)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, [])

  return (
    <h1>Hey from profile container</h1>
  )
}

export default ProfileContainer;
