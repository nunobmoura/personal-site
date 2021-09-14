import React from 'react'
import { Helmet } from "react-helmet";

import Intro from '../sections/intro';
import Carreer from '../sections/carreer';
import Goals from '../sections/goals';
import Footer from '../components/footer'

import '../styles/index.scss'

const IndexPage = () => (
  <div className="body-container">
    <Helmet title="Nuno">
      <html lang="en" />
    </Helmet>
    <Intro />
    <main>
      <Carreer />
      <Goals />
    </main>
    <Footer />
  </div>
)

export default IndexPage
