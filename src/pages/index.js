import React from 'react'

import Layout from '../layouts/layout'
import Desc from '../components/description'
import Button from '../components/button'
import Experience from '../components/experience'
import Education from '../components/education'
import Goal from '../components/goals'

const IndexPage = () => (
  <Layout>
    <div>
      <p>Image will be here</p>
      <Desc />
      <div>
        <Button label="button 01" />
        <Button label="button 02" />
      </div>
    </div>
    <div>
      <Experience />
      <Education />
    </div>
    <div>
      <Goal />
    </div>
  </Layout>
)

export default IndexPage
