import * as React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import FAQ from '../components/FAQ'
import '../styles/index.css'
import {graphql} from "gatsby";
import Heading from '../components/Heading';

// markup
const IndexPage = ({data}) => {
  return (
    <main>
      <Navbar/>
      <Heading/>
      <title>PennApps XXIII</title>
      {
        data.allMdx.nodes.map((node) => (
          node.frontmatter.title === "FAQ" ? <FAQ content={node.rawBody} key={node.frontmatter.order} /> :
          <Section content={node.body} key={node.frontmatter.order} />
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
