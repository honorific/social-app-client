import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const Post = () => {
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img className='postProfileImg' src='/assets/person/1.jpeg' />
            <span className='postUsername'>honorific</span>
            <span className='postDate'>5 minutes ago</span>
          </div>
          <div className='postTopRight'>
            <MoreVertIcon />
          </div>
        </div>
        <div className='postCenter'></div>
        <div className='postBottom'></div>
      </div>
    </div>
  )
}

export default Post
