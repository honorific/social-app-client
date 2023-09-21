import './share.css'

const Share = () => {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img className='shareProfileImg' src='/assets/person/1.jpeg' alt='' />
          <input
            type='text'
            className='shareInput'
            placeholder="what's in your mind"
          />
        </div>
        <hr className='shareHr' />
        <div className='shareBottom'></div>
      </div>
    </div>
  )
}

export default Share
