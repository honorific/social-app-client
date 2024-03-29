import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {AuthContext} from '../../context/AuthContext'
import {Add, Remove} from '@mui/icons-material'

const Rightbar = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [friends, setFriends] = useState([])
  const {user: currentUser, dispatch} = useContext(AuthContext)
  const [followed, setFollowed] = useState(false)

  useEffect(() => {
    setFollowed(currentUser?.followings?.includes(user?._id))
  }, [currentUser, user?.id])

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(`/users/friends/${user?._id}`)
        setFriends(friendList.data)
      } catch (error) {
        console.log(error)
      }
    }
    getFriends()
  }, [user?._id])

  const followHandler = async () => {
    try {
      if (followed) {
        await axios.put(`users/${user?._id}/unfollow`, {
          userId: currentUser?._id,
        })
        dispatch({type: 'follow', payload: user._id})
      } else {
        await axios.put(`users/${user?._id}/follow`, {
          userId: currentUser?._id,
        })
        dispatch({type: 'follow', payload: user._id})
      }
    } catch (error) {
      console.log(error)
    }
    setFollowed(!followed)
  }

  const HomeRightbar = () => {
    return (
      <>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='/assets/gift.png' />
          <span className='birthdayText'>
            <b>Pola foster </b> and <b> 3 other friends </b> have a birthday
            today.
          </span>
        </div>
        <img className='rightbarAd' src='/assets/ad.png' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => {
            return <Online key={u.id} user={u} />
          })}
        </ul>
      </>
    )
  }
  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className='rightbarFollowButton' onClick={followHandler}>
            {followed ? 'unFollow ' : 'Follow '}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className='rightbarTitle'>User information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City: </span>
            <span className='rightbarInfoValue'>{user.city}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From: </span>
            <span className='rightbarInfoValue'>{user.from}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship: </span>
            <span className='rightbarInfoValue'>
              {user.relationship === 1
                ? 'single'
                : user.relationship == 2
                ? 'married'
                : "it's complicated"}
            </span>
          </div>
        </div>
        <h4>user friends</h4>
        <div className='rightbarFollowings'>
          {friends?.map((friend, i) => {
            return (
              <Link
                to={`/profile/${friend.username}`}
                style={{textDecoration: 'none'}}
                key={i}
              >
                <div className='rightbarFollowing'>
                  <img
                    src={
                      friend.profilePicture
                        ? `${PF}${friend.profilePicture}`
                        : `${PF}/person/noAvatar.png`
                    }
                    className='rightbarfollowingImg'
                  />
                  <span className='rightbarFollowingName'>
                    {friend.username}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar
