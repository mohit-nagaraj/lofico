import React, { useState } from 'react'
import './player.scss'
const Player = ({currentTheme}) => {
  const [isPlay,setIsPlay]=useState('play')
  return (
    <div className='player' style={(currentTheme==='dark')?{background:"rgba(0, 0, 0, 0.207)"}:{}}>
        <div className='time-control'>
            <p className={currentTheme} style={{userSelect:"none"}}>0</p>
            <div
         // style={{
         //   background: `linear-gradient(to right, #051937,#A8EB12 )`,
         // }}
          className="track"
        >
         <input
            min={0}
            max={90}
            type="range"
          />
          <div className="animate-track"></div>   
        </div>
        <p className={currentTheme} style={{userSelect:"none"}}>1:30</p>
        </div>
        <div className='play-control'>
        <svg className={currentTheme} xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>
        <div onClick={()=>{
          setIsPlay(!isPlay);
        }}>{isPlay?<svg className={currentTheme} xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>:<svg className={currentTheme} xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>}</div>
        <svg className={currentTheme} xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
        </div>
    </div>
  )
}

export default Player