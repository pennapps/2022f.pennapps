import * as React from 'react'
import '../styles/index.css'

const Section = ({title, content}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default Section