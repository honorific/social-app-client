import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import {useEffect, useState} from 'react'
import axios from 'axios'

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [user, setUser] = useState({})
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get('/users?username=john')
      console.log(res)
      setUser(res.data)
    }
    fetchUser()
  }, [])
  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                className='profileCoverImg'
                src={user.coverPicture || `${PF}person/noCover.png`}
              />
              <img
                className='profileUserImg'
                src={user.profilePicture || `${PF}person/noAvatar.png`}
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>{user.username}</h4>
              <span className='profileInfoDesc'>{user.desc}</span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed username='john' />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
