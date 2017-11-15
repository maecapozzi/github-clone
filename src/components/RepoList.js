import React from 'react'
import Repo from './Repo'

const RepoList = ({repos}) => (
  <div className='grid'>
    {repos.map(repo => <Repo key={repo.id} repo={repo} />)}
  </div>
)

export default RepoList
