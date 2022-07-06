import React from 'react'
import LogisticsMDX from '../../content/logistics.mdx'
import LogisticsBackground from '../images/LogisticsBackground.png'
import PrizesIcon from '../images/PrizesIcon.png'
import ScheduleIcon from '../images/ScheduleIcon.png'


function Logistics() {
  return (
    <div key="logistics" className="relative">
      <img src={LogisticsBackground} className="w-screen" />
      <a className="anchor" id="logistics"/>
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-linen rounded-lg w-[80%] md:w-[44%] px-14 py-10">
        <LogisticsMDX/>
        <div className="flex flex-row space-x-4 pt-4">
          <IconSquare name={"SCHEDULE"} src={ScheduleIcon}/>
          <IconSquare name={"PRIZES"} src={PrizesIcon}/>
        </div>
      </div>
    </div>
  )
}


function IconSquare({name, src}) {
  return (
    <div className="flex flex-col items-center justify-center bg-emerald bg-opacity-10 w-[11.5vw] h-[11vw] rounded-lg">
      <div className="h-[45%] flex items-center"><img src={src}/></div>
      <div>{name}</div>
    </div>
  )
}


export default Logistics
