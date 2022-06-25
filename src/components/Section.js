import * as React from 'react'
import { MDXRenderer } from "gatsby-plugin-mdx";

const Section = ({content, id}) => {
  return (
    <div key={id} id={id} className="section">
      <MDXRenderer>
        {content}
      </MDXRenderer>
    </div>
  )
}

export default Section