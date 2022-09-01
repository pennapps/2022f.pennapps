import React from 'react'

import polygon from '../../static/sponsors/2022-polygon.png'
import meta from '../../static/sponsors/2022-meta.png'
import bloomberg from '../../static/sponsors/2022-bloomberg.png'
import sonr from '../../static/sponsors/2022-sonr.png'
import convex from '../../static/sponsors/2022-convex.png'
import twilio from '../../static/sponsors/2022-twilio.png'
import janeStreet from '../../static/sponsors/2022-jane-street.png'
import elastic from '../../static/sponsors/2022-elastic.png'
import locket from '../../static/sponsors/2022-locket.png'
import scm from '../../static/sponsors/2022-scm.jpg'
import hrt from '../../static/sponsors/2022-hrt.png'
import shippy from '../../static/sponsors/2022-shippy.png'

function Sponsors() {
  return (
    <div className="section">
      <a className="anchor" id="sponsors"/>
      <h1>Sponsors</h1>
      <div className="sponsor-logo-container">
        <div id="polygon">
          <a href="https://polygon.technology/">
            <img src={polygon} alt="Polygon"/>
          </a>
        </div>
        <div id="meta">
          <a href="https://www.metacareers.com/careerprograms/students/">
            <img src={meta} alt="Meta"/>
          </a>
        </div>
        <div id="bloomberg">
          <a href="https://www.bloomberg.com/company/?utm_source=bloomberg-menu&utm_medium=bcom">
            <img src={bloomberg} alt="Bloomberg"/>
          </a>
        </div>
        <div id="sonr">
          <a href="https://www.sonr.io/">
            <img src={sonr} alt="Sonr"/>
          </a>
        </div>
        <div id="convex">
          <a href="https://www.convex.dev/">
            <img src={convex} alt="Convex"/>
          </a>
        </div>
        <div id="twilio">
          <a href="https://www.twilio.com/">
            <img src={twilio} alt="Twilio"/>
          </a>
        </div>
        <div id="jane-street">
          <a href="https://www.janestreet.com/">
            <img src={janeStreet} alt="Jane Street"/>
          </a>
        </div>
        <div id="elastic">
          <a href="https://www.elastic.co/">
            <img src={elastic} alt="Elastic"/>
          </a>
        </div>
        <div id="locket">
          <a href="https://apps.apple.com/app/id1600525061">
            <img src={locket} alt="Locket"/>
          </a>
        </div>
        <div id="scm">
          <a href="https://www.scm-lp.com/">
            <img src={scm} alt="Stevens Capital Management"/>
          </a>
        </div>
        <div id="hrt">
          <a href="https://www.hudsonrivertrading.com/campus-recruiting/">
            <img src={hrt} alt="Hudson River Trading"/>
          </a>
        </div>
        <div id="shippy">
          <a href="https://getshippy.com/">
            <img src={shippy} alt="Shippy"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sponsors