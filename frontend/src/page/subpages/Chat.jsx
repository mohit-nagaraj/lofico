import './chat.scss'
import Draggable from "../../components/Draggable/Draggable";
import { useDispatch, useSelector } from 'react-redux';
import { setPagesOpen } from '../../store/user';
const Chat = () => {
  const dispatch = useDispatch();
  const userSettings = useSelector((state) => state.user);
  return (userSettings.pagesOpen.chat.display ?
    <div className='chat'>
      <Draggable initialPos={userSettings.pagesOpen.chat.position} className='window'>
        <div className={'window-size ' + userSettings.theme}>
          <div style={{ position: 'absolute', right: '10px', top: '10px', opacity: 0.8, cursor: 'pointer' }} onClick={() => {
            dispatch(
              setPagesOpen({
                page: 'chat',
                value: {
                  display: false,
                  position: userSettings.pagesOpen.chat.position
                }
              })
            )
          }}>
            <img src="./close.png" alt='' height={15} width={15} />
          </div>
          Chat window to be implemented
        </div>
      </Draggable>
    </div> : null
  )
}

export default Chat