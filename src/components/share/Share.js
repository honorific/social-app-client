import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia'
import LabelIcon from '@mui/icons-material/Label'
import RoomIcon from '@mui/icons-material/Room'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import {useContext, useState} from 'react'
import {AuthContext} from '../../context/AuthContext'
import axios from 'axios'
import {Cancel} from '@mui/icons-material'

const Share = () => {
  const {user} = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [desc, setDesc] = useState('')
  const [file, setFile] = useState(null)
  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc,
    }
    if (file) {
      const data = new FormData()
      const fileName = Date.now() + file.name
      data.append('name', fileName)
      data.append('file', file)
      newPost.img = fileName
      try {
        await axios.post('/upload', data)
      } catch (err) {
        console.log(err)
      }
    }
    try {
      await axios.post('/posts', newPost)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img
            className='shareProfileImg'
            src={
              user.profilePicture
                ? `${PF}${user.profilePicture}`
                : `${PF}/person/noAvatar.png`
            }
            alt=''
          />
          <input
            type='text'
            className='shareInput'
            placeholder="what's in your mind"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <hr className='shareHr' />
        {file && (
          <div className='shareImgContainer'>
            <img className='shareImg' src={URL.createObjectURL(file)} />
            <Cancel className='shareCancelImg' onClick={() => setFile(null)} />
          </div>
        )}
        <form className='shareBottom' onSubmit={submitHandler}>
          <div className='shareOptions'>
            <label htmlFor='file' className='shareOption'>
              <PermMediaIcon htmlColor='tomato' className='shareIcon' />
              <span className='shareOptionText'>Photo or Video</span>
              <input
                type='file'
                id='file'
                accept='.png,.jpeg,.jpg'
                onChange={(e) => setFile(e.target.files[0])}
                style={{display: 'none'}}
                name='file'
              />
            </label>
            <div className='shareOption'>
              <LabelIcon htmlColor='blue' className='shareIcon' />
              <span className='shareOptionText'>Tag</span>
            </div>
            <div className='shareOption'>
              <RoomIcon htmlColor='green' className='shareIcon' />
              <span className='shareOptionText'>Location</span>
            </div>
            <div className='shareOption'>
              <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon' />
              <span className='shareOptionText'>Feelings</span>
            </div>
          </div>
          <button className='shareButton' type='submit'>
            Share
          </button>
        </form>
      </div>
    </div>
  )
}

export default Share
