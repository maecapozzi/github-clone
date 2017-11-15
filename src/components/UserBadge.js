import React from 'react'

const UserBadge = ({profileImage, name, numFollowers, numFollowing}) => (
  <div>
    <img src={profileImage} />
    <p>Name: {name}</p>
    <p>Number of Followers: {numFollowers}</p>
    <p>Number of Following: {numFollowing}</p>
  </div>
)

export default UserBadge
