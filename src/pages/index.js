import * as React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import FAQ from '../components/FAQ'
import Heading from '../components/Heading';
import '../styles/index.css'
import {graphql} from "gatsby";

// markup
const IndexPage = ({data}) => {
  return (
    <main>
      <Navbar/>
      <Heading/>
      <title>PennApps XXIII</title>
      {
        data.allMdx.nodes.map((node) => (
          node.frontmatter.order 
          ? node.frontmatter.title === "FAQ" ?
              <FAQ content={node.rawBody} id={node.frontmatter.title} /> :
              <Section content={node.body} id={node.frontmatter.title} />
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
