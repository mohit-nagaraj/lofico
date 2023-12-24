import React from 'react'
import Draggable from "../../components/Draggable/Draggable";
import './notes.scss'

const Notes = ({currentTheme}) => {
  return (
    <div className='notes' style={{display:'none'}}>
        <Draggable initialPos={{ x: 400, y: 100 }} className='window'>
        <div className={'window-size '+currentTheme}>
        <div style={{position:'absolute',right:'10px',top:'10px',opacity:0.8,cursor:'pointer'}} onClick={e=>{
            document.querySelector(".notes").style.display = "none";
        }}>
          <img src="./close.png" alt='' height={15} width={15}/>
        </div>
          Notes window to be implemented
        </div>
      </Draggable>
    </div>
  )
}

export default Notes