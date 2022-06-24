import React, { useEffect, useState } from 'react'
import bannerWithDate from '../images/PennAppsF22_BannerWithDate.png'
import banner from '../images/PennAppsF22_Banner.png'
// import square from '../images/PennAppsF22_SquareLogo.png'

const target = new Date("September 2 2022 17:00:00 EST") //1 hour difference bc of daylight savings so 17:00 => 18:00

function Landing() {
  const [mSecUntil, setMSecUntil] = useState(target - Date.now())
  useEffect(() => {
    const interval = setInterval(() => {
      setMSecUntil(target - Date.now())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const getTimeUntil = () => {
    let timeUntil = mSecUntil
    const d = Math.floor(timeUntil / (1000 * 60 * 60 * 24))
    timeUntil -= d * 1000 * 60 * 60 * 24
    const h = Math.floor(timeUntil / (1000 * 60 * 60))
    timeUntil -= h * 1000 * 60 * 60
    const m = Math.floor(timeUntil / (1000 * 60))
    timeUntil -= m * 1000 * 60
    const s = Math.floor(timeUntil / 1000)
    return {d, h, m, s}
  }

  const timeUntil = getTimeUntil()
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-2/3 min-w-[32rem]">
        <img src={bannerWithDate} className="hidden md:inline"/>
        <img src={banner} className="md:hidden"/>
      </div>
      <div className="flex flex-row space-x-3">
        <TimeSquare amt={timeUntil.d} unit={"DAYS"}/>
        <TimeSquare amt={timeUntil.h} unit={"HOURS"}/>
        <TimeSquare amt={timeUntil.m} unit={"MINUTES"}/>
        <TimeSquare amt={timeUntil.s} unit={"SECONDS"}/>
      </div>
    </div>
  )
}

function TimeSquare(props) {
  return (
    <div className="w-[10vw] h-[9.5vw] min-w-[5rem] min-h-[4.75rem] bg-white flex flex-col items-center justify-center">
      <h1 className="mb-0">{props.amt}</h1>
      <h4 className="text-emerald">{props.unit}</h4>
    </div>
  )
}




export default Landing
