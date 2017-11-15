import React from 'react'

const RepoList = ({repos}) => (
  <div>
    {repos.map(repo => {
      { console.log(repo) }
      return (
        <ul key={repo.id}>
          <div>
            <p>Repo Name: {repo.name}</p>
            <p>Description: {repo.description}</p>
            <p>Git Url: {repo.git_url}</p>
            <p>Stars: {repo.stargazers_count}</p>
            <p>Forks: {repo.forks}</p>
            <p>Size: {repo.size}</p>
          </div>
          --------------------------
        </ul>
      )
    })}
  </div>
)

export default RepoList
