import {useEffect, useState} from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import axios from 'axios'

const Feed = ({username}) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get('/posts/timeline/64f836eb29e79267917b7214')
      setPosts(res.data)
    }
    fetchPosts()
  }, [username])

  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {posts.map((p) => {
          return <Post key={p._id} post={p} />
        })}
      </div>
    </div>
  )
}

export default Feed
