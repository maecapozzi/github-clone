import React from 'react'
import Card from 'material-ui/Card'
import PropTypes from 'prop-types'

const Repo = ({repo}) => (
  <div className='grid-item thirds'>
    <Card className='card' key={repo.id}>
      <div>
        <h1><a href={repo.url}>{repo.name}</a></h1>
        <h3>{repo.description}</h3>
        <a href={repo.git_url}>{repo.git_url}</a>
        <p>Stars: {repo.stargazers_count}</p>
        <p>Forks: {repo.forks}</p>
        <p>Size: {repo.size}</p>
      </div>
    </Card>
  </div>
)

Repo.propTypes = {
  repo: PropTypes.object
}

export default Repo
