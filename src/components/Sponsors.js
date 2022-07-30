import React from 'react'

import janeStreet from '../../static/sponsors/2022-jane-street.png'
import locket from '../../static/sponsors/2022-locket.png'
import scm from '../../static/sponsors/2022-scm.png'
import sonr from '../../static/sponsors/2022-sonr.png'

function Sponsors() {
  return (
    <div className="section">
      <a className="anchor" id="sponsors"/>
      <h1>Sponsors</h1>
      <div className="sponsor-logo-container">
        <img src={scm} alt="Stevens Capital Management" width="20%"/>
        <img src={janeStreet} alt="Jane Street" width="75%"/>
        <img src={sonr} alt="Sonr" width="40%"/>
        <img src={locket} alt="Locket" width="55%"/>
      </div>
    </div>
  )
}

export default Sponsors