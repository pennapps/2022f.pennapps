import * as React from 'react'
import {MDXRenderer} from "gatsby-plugin-mdx";

const Section = ({content, key}) => {
  return (
    <div key={key}>
      <MDXRenderer>
        {content}
      </MDXRenderer>
    </div>
  )
}

export default Section