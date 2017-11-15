import React from 'react'

const SearchBar = ({handleChange, handleClick}) => (
  <div>
    <input onChange={(event) => handleChange(event)} />
    <button onClick={() => handleClick()}>Search</button>
  </div>
)

export default SearchBar
