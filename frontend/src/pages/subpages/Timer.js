import React from 'react'
import Draggable from "../../components/Draggable/Draggable";
import './timer.scss'

const Timer = ({currentTheme}) => {
  return (
    <div className='timer' style={{display:'none'}}>
        <Draggable initialPos={{ x: 100, y: 100 }} className='window'>
        <div className={'window-size '+currentTheme}>
        <div style={{position:'absolute',right:'10px',top:'10px',opacity:0.8,cursor:'pointer'}} onClick={e=>{
            document.querySelector(".timer").style.display = "none";
        }}>
          <img src="./close.png" alt='' height={15} width={15}/>
        </div>
          Timer window to be implemented
        </div>
      </Draggable>
    </div>
  )
}

export default Timer