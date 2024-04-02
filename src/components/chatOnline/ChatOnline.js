import axios from 'axios'
import './chatOnline.css'
import {useEffect, useState} from 'react'

const ChatOnline = ({onlineUsers, currentId, setCurrentChat}) => {
  const [friends, setFriends] = useState([])
  const [onlineFriends, setOnlineFriends] = useState([])
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get(`users/friends/${currentId}`)
      setFriends(res.data)
    }
    getFriends()
  }, [currentId])

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)))
  }, [friends, onlineUsers])

  return (
    <div className='chatOnline'>
      {onlineFriends.map((o) => {
        return (
          <div className='chatOnlineFriend'>
            <div className='chatOnlineImgContainer'>
              <img
                className='chatOnlineImg'
                src={
                  o?.profilePicture
                    ? PF + o.profilePicture
                    : `${PF}preson/noAvatar.png`
                }
              />
              <div className='chatOnlineBadge'></div>
            </div>
            <span className='chatOnlineName'>{o?.username}</span>
          </div>
        )
      })}
    </div>
  )
}

export default ChatOnline
