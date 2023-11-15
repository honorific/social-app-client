import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'
const Rightbar = ({profile}) => {
  const HomeRightbar = () => {
    return (
      <>
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
          {Users.map((u) => {
            return <Online key={u.id} user={u} />
          })}
        </ul>
      </>
    )
  }
  const ProfileRightbar = () => {
    return <h4>User information</h4>
  }
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <ProfileRightbar />
      </div>
    </div>
  )
}

export default Rightbar
