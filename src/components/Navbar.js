import React, { useState } from 'react'
import { FaBars } from "@react-icons/all-files/fa/FaBars";


const links = ['About', 'Apply', 'FAQ', 'Logistics', 'Sponsors']

function Navbar() {
  return (
    <nav className="w-full h-12 flex flex-row justify-between items-center">
      <a href="#">PennApps</a>
      <div className="flex flex-row space-x-6">
        <Links links={links}/>
      </div>
    </nav>
  )
}

function Links(props) {
  const [showMenu, setShowMenu] = useState(false)
  const toggleShowMenu = () => setShowMenu(prev => !prev)

  return (
    <>
      {/* shows if screen is not sm */}
      {props.links.map((link, i) => 
        <a key={i} className="hidden sm:inline bg-white" href={`#${link}`}>{link}</a>)
      }

      {/* shows if screen is sm */}
      <button className="sm:hidden"><FaBars size="1.5em" onClick={toggleShowMenu}/></button>
      <div className={showMenu? "sm:hidden absolute mt-8 right-0 flex flex-col" : "hidden"}>
        {props.links.map((link, i) => 
          <a key={i} onClick={toggleShowMenu} href={`#${link}`}>{link}</a> )
        }
      </div>
    </>
  )
}

export default Navbar
