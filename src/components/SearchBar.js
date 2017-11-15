import React from 'react'

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

export default SearchBar
