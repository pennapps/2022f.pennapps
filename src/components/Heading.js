import React from 'react'
import Header from '../../content/heading.mdx'
import image from '../images/Leaf.png'


function Heading() {
  return (
    <div className="heading bg-sand h-[75vh] flex flex-row items-center space-x-12 px-[15%] md:px-[20%] lg:px-[26%]">
        <img src={image} className="w-28 lg:w-36 h-auto hidden sm:inline"/>
        <div className="[&>h1]:text-green md:[&>h1]:text-5xl md:[&>p]:text-lg">
          <Header/>
          <button className="mt-4 bg-green text-sand px-6 py-2 rounded-full hover:bg-emerald">APPLY</button>
        </div>
    </div>
  )
}

export default Heading
