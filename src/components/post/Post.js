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
        <div className='postCenter'>
          <span className='postText'>Hey its my first post</span>
          <img className='postImg' src='/assets/post/1.jpeg' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img className='likeIcon' src='assets/like.png' />
            <img className='likeIcon' src='assets/heart.png' />
            <span className='postLikeCounter'>32 people like it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>9 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
