import React from 'react'
import classnames from 'classnames'

import connectorResults from './connector'
import Footer from '../Footer'
import Spinner from '../Spinner'
import NoHits from '../NoHits'
import Hits from '../Hits'

import './style.scss'

function renderResults (props, hasResults) {
  const {get} = props
  const theme = 'Results fl w-100 bg-white vh-100 overflow-x-hidden overflow-y-scroll'

  const style = classnames(theme, {
    'Results__expand': get('facetsOpen')
  })

  return (
    <article data-app='results' className={style}>
      {hasResults ? <Hits {...props} /> : <NoHits {...props} />}
      <Footer />
    </article>
  )
}

function renderLoader () {
  return (
    <article className='z-3 fixed vh-100 dt w-100 bg-blue'>
      <div className='dtc v-mid tc'>
        <Spinner />
      </div>
    </article>
  )
}

function Results (parentProps) {
  const {searching, hasResults, query, hasMore, toggle, get, refine, hits} = parentProps
  const props = { toggle, get, hasMore, refine, hits, query }
  const render = searching ? renderLoader : renderResults
  return render(props, hasResults)
}

export default connectorResults(Results)
