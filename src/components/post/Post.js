import './post.css'

const Post = () => {
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img className='postProfileImg' src='/assets/person/1.jpeg' />
          </div>
          <div className='postTopRight'></div>
        </div>
        <div className='postCenter'></div>
        <div className='postBottom'></div>
      </div>
    </div>
  )
}

export default Post
