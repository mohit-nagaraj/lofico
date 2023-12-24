import React from 'react'
import './chat.scss'
import Draggable from "../../components/Draggable/Draggable";
const Chat = ({currentTheme}) => {
  return (
    <div className='chat' style={{display:'none'}}>
        <Draggable initialPos={{ x: 400, y: 400 }} className='window'>
        <div className={'window-size '+currentTheme}>
        <div style={{position:'absolute',right:'10px',top:'10px',opacity:0.8,cursor:'pointer'}} onClick={e=>{
            document.querySelector(".chat").style.display = "none";
        }}>
          <img src="./close.png" alt='' height={15} width={15}/>
        </div>
          Chat window to be implemented
        </div>
      </Draggable>
    </div>
  )
}

export default Chat