import React from 'react'
import background from '../images/LogisticsBackground.png'
import mobileBackground from '../images/logistics_bg_mobile.png'
import PrizesIcon from '../images/PrizesIcon.png'
import ScheduleIcon from '../images/ScheduleIcon.png'
import {MDXRenderer} from "gatsby-plugin-mdx";
import Friday from '../../content/schedule/friday.mdx'
import Saturday from '../../content/schedule/saturday.mdx'
import Sunday from '../../content/schedule/sunday.mdx'

function Logistics({content}) {
  const [isShown, setIsShown] = React.useState(false);
  return (
    <div key="logistics" className="relative mt-16">
      {isShown ? <SchedulePopUp setIsShown={setIsShown} /> : null}
      <img src={background} className="logistics-background hidden md:inline"/>
      <img src={mobileBackground} className="logistics-background md:hidden"/>
      <div className="logistics-body">
        <a className="logistics-anchor" id="logistics"/>
        <MDXRenderer>
          {content}
        </MDXRenderer>
        <div className="logistics-icons">
          <IconSquare name={"SCHEDULE"} src={ScheduleIcon} onClick={() => setIsShown(true) }/>
          <IconSquare name={"PRIZES"} src={PrizesIcon}/>
        </div>  
      </div>
    </div>
  )
}

function IconSquare({name, src, onClick}) {
  return (
    <div className="logistics-icon-square" onClick={onClick}>
      <div className="logistics-icon-square-container"><img src={src} className="max-h-[80%]"/></div>
      <div>{name}</div>
    </div>
  )
}

function SchedulePopUp({setIsShown}) {
  console.log(Friday);
  return <div class="schedule-popup">
    <h2 onClick={() => setIsShown(false)}>Close</h2>
    <Friday />
    <Saturday />
    <Sunday />
  </div>;
}

export default Logistics
