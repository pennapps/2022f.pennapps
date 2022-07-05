import React from 'react'

import bloomberg from '../../static/sponsors/Bloomberg.png'
import acv from '../../static/sponsors/acv.png'
import citadel from '../../static/sponsors/citadel.png'

function Sponsors() {
  return (
    <div className="section">
      <a className="anchor" id="sponsors"/>
      <h1>Sponsors</h1>
      <div className="sponsor-logo-container">
        <img src={bloomberg} alt="Bloomberg" width="100%"/>
        <img src={acv} alt="ACV" width="30%"/>
        <img src={citadel} alt="Citadel" width="65%"/>
      </div>
    </div>
  )
}

export default Sponsors