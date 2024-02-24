import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const Rightbar = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [friends, setFriends] = useState([])
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
          {friends?.map((friend) => {
            return (
              <Link
                to={`/profile/${friend.username}`}
                style={{textDecoration: 'none'}}
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
