import './message.css'

const Message = ({own}) => {
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className='messageTop'>
        <img
          className='messageImg'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThKp9oggmdaZBx_YlDuNYOiiL5hirrl4iQEDx8MGecNA&s'
        />
        <p className='messageText'>this is a message</p>
      </div>
      <div className='messageBottom'>1 hour ago</div>
    </div>
  )
}

export default Message
