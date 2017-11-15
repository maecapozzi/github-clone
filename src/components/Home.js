import React, { Component } from 'react'
import axios from 'axios'
import UserBadge from './UserBadge'
import SearchBar from './SearchBar'
import RepoList from './RepoList'

class Home extends Component {
  constructor () {
    super()

    this.baseUrl = 'https://api.github.com'
    this.url = `${this.baseUrl}/users/`

    this.state = {
      url: 'https://api.github.com/users/',
      username: '',
      userData: {
        numFollowers: '',
        numFollowing: '',
        profileImage: '',
        name: ''
      },
      repos: [],
      showData: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getUserNames = this.getUserNames.bind(this)
    this.getRepos = this.getRepos.bind(this)
  }

  handleChange (event) {
    this.setState({ username: event.target.value})
  }

  handleSubmit (event) {
    if (event.key === 'Enter') {
      this.setState({ showData: true })
      this.getUserNames()
    }
  }

  getUserNames () {
    const url = this.url + this.state.username
    axios.get(url)
      .then(response => {
        const userData = {
          numFollowers: response.data.followers,
          numFollowing: response.data.following,
          profileImage: response.data.avatar_url,
          name: response.data.name
        }
        this.setState({ userData })
        this.getRepos()
      })
  }

  getRepos () {
    const url = this.url + this.state.username + '/repos'
    axios.get(url)
      .then(response => {
        const repos = response.data
        this.setState({ repos })
      })
  }

  render () {
    if (!this.state.showData) {
      return (
        <SearchBar
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
        />
      )
    } else {
      return (
        <div>
          <SearchBar
            handleChange={this.handleChange.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
          />
          <div className='modules__container'>
            <div className='grid'>
              <UserBadge
                numFollowers={this.state.userData.numFollowers}
                numFollowing={this.state.userData.numFollowing}
                name={this.state.userData.name}
                profileImage={this.state.userData.profileImage}
            />
              <RepoList repos={this.state.repos} />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Home
