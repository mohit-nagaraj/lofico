import { useDispatch, useSelector } from "react-redux";
import Draggable from "../../components/Draggable/Draggable";
import './notes.scss'
import { setPagesOpen } from "../../store/user";

const Notes = () => {
  const dispatch = useDispatch();
  const userSettings = useSelector((state) => state.user);

  return (userSettings.pagesOpen.notes.display ?
    <div className='notes'>
      <Draggable initialPos={userSettings.pagesOpen.notes.position} className='window'>
        <div className={'window-size ' + userSettings.theme}>
          <div style={{ position: 'absolute', right: '10px', top: '10px', opacity: 0.8, cursor: 'pointer' }} onClick={() => {
            dispatch(
              setPagesOpen({
                page: 'notes',
                value: {
                  display: false,
                  position: userSettings.pagesOpen.notes.position
                }
              })
            )
          }}>
            <img src="./close.png" alt='' height={15} width={15} />
          </div>
          Notes window to be implemented

        </div>
      </Draggable>
    </div> : null
  )
}

export default Notes