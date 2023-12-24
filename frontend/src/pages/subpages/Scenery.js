import React from 'react'
import './scenery.scss'
import Draggable from "../../components/Draggable/Draggable";

const Scenery = ({currentTheme}) => {
  return (
    <div className='scenery' style={{display:'none'}}>
     <Draggable initialPos={{ x: 1150, y: 80 }} className='window'>
        <div className={'window-size '+currentTheme}>
        
          Scenery window to be implemented
        </div>
      </Draggable>   
    </div>
  )
}

export default Scenery