import React from 'react'
import Repo from './Repo'
import PropTypes from 'prop-types'

const RepoList = ({repos}) => (
  <div className='grid'>
    {repos.map(repo => <Repo key={repo.id} repo={repo} />)}
  </div>
)

RepoList.propTypes = {
  repos: PropTypes.array
}

export default RepoList
