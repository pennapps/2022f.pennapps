import * as React from 'react'
import { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import FAQ from '../components/FAQ'
import Heading from '../components/Heading';
import Landing from '../components/Landing';
import About from '../components/About';
import {graphql} from "gatsby";
import Logistics from '../components/Logistics'

// markup
const IndexPage = ({data}) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  // TODO: cleanup logic
  const scrollDown = () => {
    if (!hasScrolled && window.pageYOffset < 2) {
      setTimeout(() => {
        if (window.pageYOffset < 2) {
          window.scrollBy(0, window.innerHeight);
        }
      }, 5000);
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  }

  const getSectionContent = (title) => {
    return data.allMdx.nodes.filter(node => node.frontmatter.title === title)[0]
  }

  const aboutContent = getSectionContent("About")
  const applyContent = getSectionContent("Apply")
  const logisticsContent = getSectionContent("Logistics")
  const faqContent = getSectionContent("FAQs")

  return (
    <main id="" onLoad={scrollDown}>
      <Landing/>
      <Navbar/>
      <Heading/>
      <About content={aboutContent.rawBody} />
      <Section content={applyContent.body} id="apply" />
      <Logistics content={logisticsContent.body}/>
      <FAQ content={faqContent.rawBody} />
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
