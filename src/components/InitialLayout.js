import React from 'react'
import Message from './Message'
import SearchBar from './SearchBar'
import PropTypes from 'prop-types'

const InitialLayout = ({string}) => (
  <Message string={string} />
)

InitialLayout.propTypes = {
  string: PropTypes.string
}

export default InitialLayout
