import './calendar.scss'
import Draggable from "../../components/Draggable/Draggable";
import { useDispatch, useSelector } from 'react-redux';
import { setPagesOpen } from '../../store/user';

const Calendar = () => {

  const dispatch = useDispatch();

  const userSettings = useSelector((state) => state.user);


  return (userSettings.pagesOpen.calendar.display ?
    <div className='calendar' >
      <Draggable initialPos={{ x: 800, y: 100 }} className='window'>
        <div className={'window-size ' + userSettings.theme}>
          <div style={{ position: 'absolute', right: '10px', top: '10px', opacity: 0.8, cursor: 'pointer' }}
            onClick={() => {
              dispatch(setPagesOpen({
                page: 'calendar',
                value: {
                  display: false,
                  position: userSettings.pagesOpen.calendar.position
                }
              }))
            }}
          >
            <img src="./close.png" alt='' height={15} width={15} />
          </div>
          Task manager window to be implemented
        </div>
      </Draggable>
    </div>
    : null
  )
}

export default Calendar