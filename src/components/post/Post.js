import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import axios from 'axios'
import {useEffect, useState} from 'react'

const Post = ({post}) => {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`)
      console.log(res)
      setUser(res.data)
    }
    fetchUser()
  }, [])

  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              className='postProfileImg'
              src={user.profilePicture || `${PF}person/noAvatar.png`}
            />
            <span className='postUsername'>{user.username}</span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVertIcon />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img className='postImg' src={`${PF}${post?.photo}`} />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img
              className='likeIcon'
              src={`${PF}like.png`}
              onClick={likeHandler}
            />
            <img
              className='likeIcon'
              src={`${PF}heart.png`}
              onClick={likeHandler}
            />
            <span className='postLikeCounter'>{like} people like it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
