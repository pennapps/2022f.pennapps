import React from 'react'
import LogisticsMDX from '../../content/logistics.mdx'
import background from '../images/LogisticsBackground.png'
import mobileBackground from '../images/logistics_bg_mobile.png'
import PrizesIcon from '../images/PrizesIcon.png'
import ScheduleIcon from '../images/ScheduleIcon.png'


function Logistics() {
  return (
    <div key="logistics" className="relative mt-16">
      <img src={background} className="logistics-background hidden md:inline"/>
      <img src={mobileBackground} className="logistics-background md:hidden"/>
      <div className="logistics-body">
        <a className="logistics-anchor" id="logistics"/>
        <LogisticsMDX/>
        <div className="logistics-icons">
          <IconSquare name={"SCHEDULE"} src={ScheduleIcon}/>
          <IconSquare name={"PRIZES"} src={PrizesIcon}/>
        </div>
      </div>
    </div>
  )
}


function IconSquare({name, src}) {
  return (
    <div className="logistics-icon-square">
      <div className="logistics-icon-square-container"><img src={src} className="max-h-[80%]"/></div>
      <div>{name}</div>
    </div>
  )
}


export default Logistics
