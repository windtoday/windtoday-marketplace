import React from 'react'
import Stats from '../Stats'
import Hit from '../Hit'

import './style.scss'

function renderHasMore (refine) {
  return (
    <footer className='tc pv3'>
      <a
        onClick={refine}
        className='pointer f5 f6-l link br2 ba ph3 pv2-l pv3 mb2 db dib-l blue hover-bg-blue hover-white'>
        Load more
      </a>
    </footer>
  )
}

function CustomHits (props) {
  const {toggle, get, hits, refine, hasMore} = props
  const _props = { toggle, get }

  return (
    <div data-app='hits' className='ph3 ph4-l'>
      <Stats />
      <div className='pv3'>
        {hits.map((item, key) => <Hit item={item} key={key} {..._props} />)}
      </div>
      {hasMore && renderHasMore(refine)}
    </div>
  )
}

export default CustomHits
