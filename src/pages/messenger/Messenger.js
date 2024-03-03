import {useContext} from 'react'
import './messenger.css'
import {AuthContext} from '../../context/AuthContext'
import {Navigate} from 'react-router-dom'
import Topbar from '../../components/topbar/Topbar'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'

const Messenger = () => {
  const {user} = useContext(AuthContext)
  return (
    <>
      {user._id && <Navigate to='/' />}
      <Topbar />
      <div className='messenger'>
        <div className='chatMenu'>
          <div className='chatMenuWrapper'>
            <input placeholder='search for friends' className='chatMenuInput' />
            <Conversation />
          </div>
        </div>
        <div className='chatBox'>
          <div className='chatBoxWrapper'>
            <div className='chatBoxTop'>
              <Message />
              <Message own={true} />
              <Message />
            </div>
            <div className='chatBoxBottom'>
              <textarea
                placeholder='write something...'
                className='chatMessageInput'
              ></textarea>
              <button className='chatSubmitButton'>Send</button>
            </div>
          </div>
        </div>
        <div className='chatOnline'>
          <div className='chatOnlineWrapper'>
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  )
}

export default Messenger
