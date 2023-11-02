import './online.css'

const Online = ({user}) => {
  return (
    <li className='rightbarFriend'>
      <div className='rightbarProfileImgContainer'>
        <img className='rightbarProfileImg' src='assets/person/3.jpeg' />
        <span className='rightbarOnline'></span>
      </div>
      <span className='rightbarUsername'>John doe</span>
    </li>
  )
}

export default Online
