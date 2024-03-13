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

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`/messages/${currentChat?._id}`)
        setMessages(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getMessages()
  }, [currentChat])

  console.log('currentChat is:', currentChat)
  console.log('messsages are: ', messages)

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
                  {messages?.map((m) => {
                    return <Message message={m} own={m.sender === user._id} />
                  })}
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
