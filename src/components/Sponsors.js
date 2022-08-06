import React from 'react'

import janeStreet from '../../static/sponsors/2022-jane-street.png'
import locket from '../../static/sponsors/2022-locket.png'
import scm from '../../static/sponsors/2022-scm.png'
import sonr from '../../static/sponsors/2022-sonr.png'
import bloomberg from '../../static/sponsors/2022-bloomberg.png'

function Sponsors() {
  return (
    <div className="section">
      <a className="anchor" id="sponsors"/>
      <h1>Sponsors</h1>
      <div className="sponsor-logo-container">
        <div id="scm">
          <a href="https://www.scm-lp.com/">
            <img src={scm} alt="Stevens Capital Management"/>
          </a>
        </div>
        <div id="jane-street">
          <a href="https://www.janestreet.com/">
            <img src={janeStreet} alt="Jane Street"/>
          </a>
        </div>
        <div id="sonr">
          <a href="https://www.sonr.io/">
            <img src={sonr} alt="Sonr"/>
          </a>
        </div>
        <div id="locket">
          <a href="https://apps.apple.com/app/id1600525061">
            <img src={locket} alt="Locket"/>
          </a>
        </div>
        <div id="bloomberg">
          <a href="https://www.bloomberg.com/company/?utm_source=bloomberg-menu&utm_medium=bcom">
            <img src={bloomberg} alt="Bloomberg"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sponsors