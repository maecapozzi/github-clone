import React, { Component } from 'react'
import axios from 'axios'
import UserBadge from './UserBadge'
import SearchBar from './SearchBar'
import RepoList from './RepoList'
import { getData } from '../lib/apiService'
import Message from './Message'
import InitialLayout from './InitialLayout'

class LayoutContainer extends Component {
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
      showData: false,
      errors: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getUserNames = this.getUserNames.bind(this)
    this.getRepos = this.getRepos.bind(this)
    this.setUserData = this.setUserData.bind(this)
    this.setErrors = this.setErrors.bind(this)
    this.getUserBadge = this.getUserBadge.bind(this)
    this.getRepoList = this.getRepoList.bind(this)
    this.showInitialLayout = this.showInitialLayout.bind(this)
    this.removeErrors = this.removeErrors.bind(this)
  }

  handleChange (event) {
    this.setState({ username: event.target.value})
  }

  handleSubmit (event) {
    this.removeErrors()
    if (event.key === 'Enter') {
      this.setState({ showData: true })
      this.getUserNames()
    }
  }

  setUserData ({followers, following, avatar_url, name}) {
    const userData = {
      numFollowers: followers,
      numFollowing: following,
      profileImage: avatar_url,
      name: name
    }
    this.setState({ userData })
  }

  setErrors () {
    this.setState({errors: true})
  }

  removeErrors () {
    this.setState({errors: false})
  }

  getSearchBar () {
    return (
      <SearchBar
        handleChange={this.handleChange.bind(this)}
        handleSubmit={this.handleSubmit.bind(this)}
      />
    )
  }

  showInitialLayout () {
    const string = 'Please search for a username in the Search Bar above.'
    return <InitialLayout string={string} />
  }

  showData () {
    return (
      <div className='modules__container'>
        <div className='grid'>
          {this.getUserBadge()}
          {this.getRepoList()}
        </div>
      </div>
    )
  }

  renderErrors () {
    const string = 'Uh oh! An error has occured. Make sure that you have inputted a real username.'
    return <Message string={string} />
  }

  getUserBadge () {
    return (
      <UserBadge
        numFollowers={this.state.userData.numFollowers}
        numFollowing={this.state.userData.numFollowing}
        name={this.state.userData.name}
        profileImage={this.state.userData.profileImage}
      />
    )
  }

  getRepoList () {
    return <RepoList repos={this.state.repos} />
  }

  getUserNames () {
    const url = this.url + this.state.username
    getData(url)
      .then(response => this.setUserData(response.data))
      .then(this.getRepos())
      .catch(error => this.setErrors())
  }

  getRepos () {
    const url = this.url + this.state.username + '/repos'
    getData(url)
      .then(response => this.setState({ repos: response.data }))
      .catch(error => this.setErrors())
  }

  render () {
    return (
      <div>
        <SearchBar
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
        />
        {!this.state.showData && this.showInitialLayout()}
        {this.state.errors && this.renderErrors()}
        {this.state.showData && this.showData()}
      </div>
    )
  }
}

export default LayoutContainer
