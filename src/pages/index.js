import React from 'react'

import Layout from '../layouts/layout'
import Desc from '../components/description'
import Button from '../components/button'
import Experience from '../components/experience'
import Education from '../components/education'
import Goal from '../components/goals'
import LinkBtn from '../components/linkbtn'

const IndexPage = () => (
  <Layout>
    <div>
      <Desc />
      <div>
        <Button
          label="Google"
          href='https://google.com'
        />
        <Button
          label="Google"
          href='https://google.com'
        />
      </div>
    </div>
    <div>
      <Experience />
      <Education />
    </div>
    <div>
      <Goal />
    </div>
    <LinkBtn />
  </Layout>
)

export default IndexPage
