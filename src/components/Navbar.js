import React, { useState } from 'react'
import { FaBars } from "@react-icons/all-files/fa/FaBars";


const links = ['about', 'apply', 'logistics', 'faqs']

function Navbar() {
  return (
    <nav>
      <a className="nav-pennapps" href="#top">PENNAPPS</a>
      <Links links={links}/>
    </nav>
  )
}

function Links(props) {
  const [showMenu, setShowMenu] = useState(false)
  const toggleShowMenu = () => setShowMenu(prev => !prev)

  return (
    <div className="links">
      {/* shows if screen is not sm */}
      {props.links.map((link, i) => 
        <a key={i} className="hidden sm:inline" href={`#${link}`}>{link.toUpperCase()}</a>)
      }

      {/* shows if screen is sm */}
      <button className="sm:hidden"><FaBars size="1.5em" onClick={toggleShowMenu}/></button>
      <div className={`mobile-nav ${showMenu ? "max-h-screen" : "max-h-0"}`}>
        {props.links.map((link, i) => 
          <a key={i} onClick={toggleShowMenu} href={`#${link}`}>{link.toUpperCase()}</a> )
        }
      </div>
    </div>
  )
}

export default Navbar
