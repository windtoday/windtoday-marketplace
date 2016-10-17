import React from 'react'
import classnames from 'classnames'

import './style.scss'

function price (item) {
  if (item.price) {
    return (
      <dl className='mt2 f5 f4-ns'>
        <dt className='clip'>Price</dt>
        <dd className='ml0 f4'>{item.price}€</dd>
      </dl>
    )
  }
}

function image (item) {
  const imageURL = `/assets/img/provider/${item.provider}.jpeg`
  return (
    <div className='dtc w3'>
      <img src={imageURL} className='db w-100 br2' />
    </div>
  )
}

function date (item) {
  const locale = navigator.language

  const opts = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }

  const timestamp = item.updatedAt || item.createdAt
  return (new Date(timestamp)).toLocaleString(locale, opts)
}

function Hit ({item, toggle, get}) {
  const theme = 'link dt w-100 bb b--black-10 pb2 pb3-l mt2 mt3-l blue'

  return (
    <article data-app='hit' className={get('isDesktop') && 'grow'}>
      <a className='link dt w-100 bb b--black-10 pb2 pb3-l mt2 mt3-l dim blue' href={item.shortenURL} target='_blank'>

        {image(item)}

        <div className='dtc v-top pa2'>
          <p className='f6 f5-ns fw6 lh-title black mv0' dangerouslySetInnerHTML={{
            __html: item._highlightResult.title.value
          }} />
          <p className='f6 fw4 mt2 mb0 black-60' >
            {date(item)}
          </p>
        </div>

        <div className='dtc v-top pl2 tr'>
          {price(item)}
        </div>
      </a>
    </article>
  )
}

export default Hit
