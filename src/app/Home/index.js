import React from 'react'

import './style.scss'

import HomeProducts from '../HomeProducts'
import Footer from '../Footer'
import HomeHero from '../HomeHero'

export default () => (
  <main>
    <HomeHero />

    <HomeProducts
      filters=''
      hitsPerPage={21}
    />

    <Footer />
  </main>
)
