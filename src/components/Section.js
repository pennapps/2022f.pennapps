import * as React from 'react'

const Section = ({title, content}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default Section