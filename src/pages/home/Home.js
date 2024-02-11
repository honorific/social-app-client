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
  return (
    <>
      {!user && <Navigate to='/register' />}
      <Topbar />
      <div className='homeContainer'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}

export default Home
