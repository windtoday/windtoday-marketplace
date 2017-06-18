import { Link } from 'react-router-dom'
import React from 'react'

const navLinkStyle = 'no-underline flex ttu b items-center justify-center flex-row h-100 ph3 f6 blue-300'

const categoryLink = category => `/search?refinementList%5Bcategory%5D%5B0%5D=${category}`

export default () => (
  <article className='w-100 bg-blue-500 white pt4'>
    <div className='pb4 ph3 ph7-ns tc lh-copy'>
      <p className='f2 avenir fw3 ma0 pv2'>
        windsurf marketplace 💨
      </p>
      <p className='f4 ph5-ns'>
        windtoday is a <strong>windsurfing marketplace</strong> to discover, compare & choose daily equipment offers.
      </p>
    </div>

    <nav className='flex justify-around bg-white card-shadow overflow-y-visible overflow-x-scroll'>
      <ul className='appbar__navbar list flex ma0 pa0'>
        <li>
          <Link
            className={navLinkStyle}
            to={categoryLink('sails')}>Sails</Link>
        </li>
        <li>
          <Link
            className={navLinkStyle}
            to={categoryLink('boards')}>Boards</Link>
        </li>
        <li>
          <Link
            className={navLinkStyle}
            to={categoryLink('masts')}>Masts</Link>
        </li>
        <li>
          <Link
            className={navLinkStyle}
            to={categoryLink('fins')}>Fins</Link>
        </li>
        <li>
          <Link
            className={navLinkStyle}
            to={categoryLink('booms')}>Booms</Link>
        </li>
      </ul>
    </nav>
  </article>
)
