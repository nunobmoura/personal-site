import React from 'react'

import Seo from '../components/seo'
import Intro from '../sections/intro'
import Carreer from '../sections/carreer'
import Goals from '../sections/goals'
import Footer from '../components/footer'

import '../styles/index.scss'

const IndexPage = () => (
  <div className="body-container">
    <Seo />
    <Intro />
    <main>
      <Carreer />
      <Goals />
    </main>
    <Footer />
  </div>
)

export default IndexPage
