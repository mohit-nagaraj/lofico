import './scenery.scss'
import Draggable from "../../components/Draggable/Draggable";
import { useDispatch, useSelector } from 'react-redux';
import { setPagesOpen, setScenery } from '../../store/user';
import { sceneryInfo } from '../../utils/sceneryInfo';

const Scenery = () => {

  const dispatch = useDispatch();

  const userSettings = useSelector((state) => state.user);

  const formatName = (name) => {
    const changedName = name.replace(/\//g, '').replace(/-/g, ' ');
    const capitalized = changedName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return capitalized;
  };
  return (userSettings.pagesOpen.scenery.display ?
    <div className='scenery'>
      <Draggable initialPos={userSettings.pagesOpen.scenery.position} className='window'>
        <div className={'window-size ' + userSettings.theme}>
          <div style={{ position: 'absolute', right: '5px', top: '10px', opacity: 0.8, cursor: 'pointer' }}
            onClick={() => {
              dispatch(
                setPagesOpen({
                  page: 'scenery', value: {
                    display: false,
                    position: userSettings.pagesOpen.scenery.position
                  }
                })
              )
            }}
          >
            <img src="./close.png" alt='' height={15} width={15} />
          </div>
          Scenes
          <div className='scenery-image'>
            {sceneryInfo.map((s, index) => (
              <div key={index} className='scenery-image-container' onClick={() => dispatch(setScenery(index))}>
                <img
                  src={`/previews${s}.jpg`}
                  alt={s}
                  key={index}
                  style={{ userSelect: "none" }}
                  className={userSettings.currentScenery === index ? "active" : "inactive"}
                />
                <div className='scenery-image-text'>{formatName(s)}</div>
              </div>
            ))}
          </div>
        </div>
      </Draggable>
    </div> :
    null
  )
}

export default Scenery