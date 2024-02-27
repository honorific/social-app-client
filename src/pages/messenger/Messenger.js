import {useContext} from 'react'
import './messenger.css'
import {AuthContext} from '../../context/AuthContext'
import {Navigate} from 'react-router-dom'
import Topbar from '../../components/topbar/Topbar'

const Messenger = () => {
  const {user} = useContext(AuthContext)
  return (
    <>
      {user._id && <Navigate to='/' />}
      <Topbar />
      <div className='messenger'>hello</div>
    </>
  )
}

export default Messenger
