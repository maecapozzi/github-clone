import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = ({handleChange, handleSubmit}) => (
  <div className='search-bar'>
    <input
      className='search-bar__input'
      placeholder='Search Github'
      onChange={(event) => handleChange(event)}
      onKeyPress={(event) => handleSubmit(event)}
    />
  </div>
)

SearchBar.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default SearchBar
