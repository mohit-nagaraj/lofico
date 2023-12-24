import React from 'react'
import './calendar.scss'
import Draggable from "../../components/Draggable/Draggable";

const Calendar = ({currentTheme}) => {
  return (
    <div className='calendar' style={{display:'none'}}>
       <Draggable initialPos={{ x: 800, y: 100 }} className='window'>
        <div className={'window-size '+currentTheme}>
        <div style={{position:'absolute',right:'10px',top:'10px',opacity:0.8,cursor:'pointer'}}onClick={e=>{
            document.querySelector(".calendar").style.display = "none";
        }}>
          <img src="./close.png" alt='' height={15} width={15}/>
        </div>
          Calendar window to be implemented
        </div>
      </Draggable> 
    </div>
  )
}

export default Calendar