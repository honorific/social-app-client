import {useContext, useEffect, useState} from 'react'
import './messenger.css'
import {AuthContext} from '../../context/AuthContext'
import {Navigate} from 'react-router-dom'
import Topbar from '../../components/topbar/Topbar'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'

const Messenger = () => {
  const {user} = useContext(AuthContext)
  const [conversations, setConversations] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    console.log(user)
    const getConversations = async () => {
      try {
        const res = await axios.get(`/conversations/${user._id}`)
        setConversations(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getConversations()
  }, [user._id])

  console.log('currentChat is:', currentChat)

  return (
    <>
      {!user._id && <Navigate to='/' />}
      <Topbar />
      <div className='messenger'>
        <div className='chatMenu'>
          <div className='chatMenuWrapper'>
            <input placeholder='search for friends' className='chatMenuInput' />
            {conversations.map((c) => {
              return (
                <div onClick={() => setCurrentChat(c)}>
                  <Conversation
                    conversation={c}
                    currentUser={user}
                    key={uuidv4()}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className='chatBox'>
          <div className='chatBoxWrapper'>
            {currentChat ? (
              <>
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
              </>
            ) : (
              <span className='noConversationText'>
                select a conversation to start messaging
              </span>
            )}
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
