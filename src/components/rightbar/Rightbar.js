import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'
const Rightbar = ({profile}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
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
    return (
      <>
        <h4 className='rightbarTitle'>User information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City: </span>
            <span className='rightbarInfoValue'>New York</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From: </span>
            <span className='rightbarInfoValue'>New York</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship: </span>
            <span className='rightbarInfoValue'>Single</span>
          </div>
        </div>
        <h4>user friends</h4>
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img src={`${PF}person/1.jpeg`} className='rightbarfollowingImg' />
            <span className='rightbarFollowingName'>john doe</span>
          </div>
          <div className='rightbarFollowing'>
            <img src={`${PF}person/2.jpeg`} className='rightbarfollowingImg' />
            <span className='rightbarFollowingName'>john doe</span>
          </div>
          <div className='rightbarFollowing'>
            <img src={`${PF}person/3.jpeg`} className='rightbarfollowingImg' />
            <span className='rightbarFollowingName'>john doe</span>
          </div>
          <div className='rightbarFollowing'>
            <img src={`${PF}person/4.jpeg`} className='rightbarfollowingImg' />
            <span className='rightbarFollowingName'>john doe</span>
          </div>
          <div className='rightbarFollowing'>
            <img src={`${PF}person/5.jpeg`} className='rightbarfollowingImg' />
            <span className='rightbarFollowingName'>john doe</span>
          </div>
          <div className='rightbarFollowing'>
            <img src={`${PF}person/6.jpeg`} className='rightbarfollowingImg' />
            <span className='rightbarFollowingName'>john doe</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar
