import React from 'react'
import './scenery.scss'
import Draggable from "../../components/Draggable/Draggable";

const Scenery = ({currentTheme,setCurrentScenery,sceneryInfo,currentScenery}) => {

    const formatName = (name) => {
      const changedName=name.replace(/\//g, '').replace(/-/g, ' ');
      const capitalized = changedName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      return capitalized;
    };
  return (
    <div className='scenery' style={{display:'none'}}>
     <Draggable initialPos={{ x: 1150, y: 80 }} className='window'>
        <div className={'window-size '+currentTheme}>
        <div style={{position:'absolute',right:'10px',top:'10px',opacity:0.8,cursor:'pointer'}} onClick={e=>{
            document.querySelector(".scenery").style.display = "none";
        }}>
          <img src="./close.png" alt='' height={15} width={15}/>
        </div>
          Scenes
          <div className='scenery-image'>
            {sceneryInfo.map((s, index) => (
              <div className='scenery-image-container' onClick={() => setCurrentScenery(index)}>
              <img
                src={`/previews${s}.jpg`}
                alt={s}
                key={index}
                onClick={() => setCurrentScenery(index)}
                className={currentScenery === index ? "active" : "inactive"}
              />
              <div className='scenery-image-text'>{formatName(s)}</div>
              </div>
            ))}
          </div>
          
          
        </div>
      </Draggable>   
    </div>
  )
}

export default Scenery

//<img src={`/previews${sceneryInfo[0]}.jpg`} alt='scenery'/>