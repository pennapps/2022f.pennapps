import * as React from 'react'
import { MDXRenderer } from "gatsby-plugin-mdx";

const Section = ({content, id}) => {
  console.log(content)
  return (
    <div key={id} className="section">
      <a className="anchor" id={id}/>
      <MDXRenderer>
        {content}
      </MDXRenderer>
    </div>
  )
}

export default Section