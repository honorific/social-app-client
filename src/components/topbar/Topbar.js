import './topbar.css'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {AuthContext} from '../../context/AuthContext'
const Topbar = () => {
  const {user} = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <Link to='/'>
          <span className='logo'>Social App</span>
        </Link>
      </div>
      <div className='topbarCenter'>
        <div className='searchbar'>
          <SearchIcon className='searchIcon' />
          <input
            type='text'
            placeholder='search for friends or post or video'
            className='searchInput'
          />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLinks'>
          <span className='topbarLink'>Home page</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <PersonIcon />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <ChatIcon />
            <span className='topbarIconBadge'>2</span>
          </div>
          <div className='topbarIconItem'>
            <NotificationsIcon />
            <span className='topbarIconBadge'>1</span>
          </div>
        </div>
        <Link to={`/profile/${user?.username}`}>
          <img
            src={
              user?.profilePicture
                ? `${PF}/${user.profilePicture}`
                : `${PF}/person/noAvatar.png`
            }
            className='topbarImg'
          />
        </Link>
      </div>
    </div>
  )
}

export default Topbar
