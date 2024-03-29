import React, { useState } from 'react'
import { FaBars } from "@react-icons/all-files/fa/FaBars";


const links = ['about', 'apply', 'logistics', 'faqs', 'sponsors']

function Navbar() {
  const mlhHref = "https://mlh.io/seasons/2022/events?utm_source=na-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign=2022-season&amp;utm_content=white";
  const mlhBadgeSrc = "https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg";

  return (
    <nav>
      <a className="nav-pennapps" href="#top">PENNAPPS</a>
      <div className="navlinks-banner">
        <Links links={links}/>
        <a id="mlh-trust-badge" className="hidden sm:inline" href={mlhHref} target="_blank">
            <img src={mlhBadgeSrc} alt="Major League Hacking 2022 Hackathon Season" />
        </a>
      </div>
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
