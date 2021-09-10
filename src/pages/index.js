import React from 'react'

import Header from '../components/header'
import Image from '../components/image'
import Description from '../components/description'
import Button from '../components/button'
import Experience from '../components/experience'
import Education from '../components/education'
import Goal from '../components/goals'
import Footer from '../components/footer'
import ResumeBtn from '../components/resumeBtn'

const IndexPage = () => (
  <div>
    <Image />
    <Header />
    <main>
      <section>
        <Description />
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
      </section>
      <section>
        <Experience />
        <Education />
      </section>
      <section>
        <Goal />
        <ResumeBtn />
      </section>
    </main>
    <Footer />
  </div>
)

export default IndexPage
