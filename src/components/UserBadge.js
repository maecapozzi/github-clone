import React from 'react'
import Card from 'material-ui/Card'
import PropTypes from 'prop-types'

const UserBadge = ({profileImage, name, numFollowers, numFollowing}) => (
  <div className='grid-item full'>
    <Card className='card'>
      <img className='image__profile' src={profileImage} />
      <h1>{name}</h1>
      <p>Followers: {numFollowers}</p>
      <p>Following: {numFollowing}</p>
    </Card>
  </div>
)

UserBadge.propTypes = {
  profileImage: PropTypes.string,
  name: PropTypes.string,
  numFollowers: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  numFollowing: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default UserBadge
