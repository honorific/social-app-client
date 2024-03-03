import {SpaTwoTone} from '@mui/icons-material'
import './chatOnline.css'

const ChatOnline = () => {
  return (
    <div className='chatOnline'>
      <div className='chatOnlineFriend'>
        <div className='chatOnlineImgContainer'>
          <img
            className='chatOnlineImg'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThKp9oggmdaZBx_YlDuNYOiiL5hirrl4iQEDx8MGecNA&s'
          />
          <div className='chatOnlineBadge'></div>
        </div>
        <span className='chatOnlineName'>John doe</span>
      </div>
    </div>
  )
}

export default ChatOnline
