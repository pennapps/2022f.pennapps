import React from 'react'
import Header from '../../content/heading.mdx'
import image from '../images/Leaf.png'


function Heading() {
  return (
    <div className="heading">
        <img src={image}/>
        <div>
          <Header/>
          <a href="#apply"><button>APPLY</button></a>
        </div>
    </div>
  )
}

export default Heading
