import React from 'react'

const links = ['About', 'Apply', 'FAQ', 'Logistics', 'Sponsors']

function Navbar() {
  return (
    <nav className="w-full h-12 flex flex-row justify-between items-center">
      <a href="#">PennApps</a>
      <div className="flex flex-row space-x-6">
        {links.map(link => 
          <a href={`#${link.toLowerCase()}`}>{link}</a>
        )}
      </div>
    </nav>
  )
}

export default Navbar
