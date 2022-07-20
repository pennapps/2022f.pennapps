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
  return (
    <main id="" onLoad={scrollDown}>
      <Landing/>
      <Navbar/>
      <Heading/>
      {
        data.allMdx.nodes.map((node) => (
          node.frontmatter.order 
          ? node.frontmatter.title === "FAQS" ?
              <FAQ content={node.rawBody} id={node.frontmatter.title.toLowerCase()} /> :
            node.frontmatter.title === "About" ? 
                <About content={node.rawBody} id={node.frontmatter.title.toLowerCase()} /> :  
            node.frontmatter.title === 'Logistics' ? 
              <Logistics/> :
              <Section content={node.body} id={node.frontmatter.title.toLowerCase()} />
          : null
        ))
      }
      <Footer/>
    </main>
  )
}



export const query = graphql`query {
  allMdx(sort: {fields: frontmatter___order, order: ASC}) {
    nodes {
      frontmatter {
        order
        title
      }
      body
      rawBody
    }
  }
}`

export default IndexPage
