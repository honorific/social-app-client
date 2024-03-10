import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

import './home.css'
import {Navigate} from 'react-router-dom'
import {useContext} from 'react'
import {AuthContext} from '../../context/AuthContext'

const Home = () => {
  const {user} = useContext(AuthContext)
  console.log(user)
  return (
    <>
      {!user._id ? (
        <Navigate to='/register' />
      ) : (
        <>
          <Topbar />
          <div className='homeContainer'>
            <Sidebar />
            <Feed username={user.username} />
            <Rightbar />
          </div>
        </>
      )}
    </>
  )
}

export default Home
