import * as React from 'react'
import {graphql} from "gatsby";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import FAQ from '../components/FAQ'
import Heading from '../components/Heading';
import Landing from '../components/Landing';
import About from '../components/About';
import Sponsors from "../components/Sponsors";
import Logistics from '../components/Logistics'

// markup
const IndexPage = ({data}) => {
  const getSectionContent = (title) => {
    return data.allMdx.nodes.filter(node => node.frontmatter.title === title)[0]
  }

  const aboutContent = getSectionContent("About")
  const applyContent = getSectionContent("Apply")
  const logisticsContent = getSectionContent("Logistics")
  const faqContent = getSectionContent("FAQs")

  return (
    <main id="">
      <Landing/>
      <Navbar/>
      <Heading/>
      <About content={aboutContent.rawBody} />
      <Section content={applyContent.body} id="apply" />
      <Logistics content={logisticsContent.body}/>
      <FAQ content={faqContent.rawBody} />
      <Sponsors/>
      <Footer/>
    </main>
  )
}

export const query = graphql`query {
  allMdx {
    nodes {
      frontmatter {
        title
      }
      body
      rawBody
    }
  }
}`

export default IndexPage
