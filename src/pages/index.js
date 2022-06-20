import * as React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
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
          <Section content={node.body} key={node.order} />
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
      }
      body
    }
  }
}`

export default IndexPage
