import * as React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Section from '../components/Section'

// markup
const IndexPage = () => {
  return (
    <main>
      <Navbar/>
      <title>PennApps XXIII</title>
      <h1>PennApps XXIII</h1>
      <Section title="Placeholder" content="Placeholder"/>
      <Section title="About" content="About"/>
      <Section title="Apply" content="Apply"/>
      <Section title="FAQ" content="FAQ"/>
      <Section title="Logistics" content="Logistics"/>
      <Section title="Sponsors" content="Sponsors"/>
      <Footer/>
    </main>
  )
}

export default IndexPage
