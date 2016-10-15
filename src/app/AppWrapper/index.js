import React from 'react'

import Facets from '../Facets'
import Results from '../Results'

import './style.scss'

function AppWrapper () {
  return (
    <div data-app='app-wrapper'>
      <Facets />
      <Results />
    </div>
  )
}

export default AppWrapper
