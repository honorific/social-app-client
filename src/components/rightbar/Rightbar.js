import './rightbar.css'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='/assets/gift.png' />
          <span className='birthdayText'>
            <b>Pola foster </b> and <b> 3 other friends </b> have a birthday
            today.
          </span>
        </div>
        <img className='rightbarAd' src='/assets/ad.png' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='assets/person/3.jpeg' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>John doe</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='assets/person/3.jpeg' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>John doe</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='assets/person/3.jpeg' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>John doe</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='assets/person/3.jpeg' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>John doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
