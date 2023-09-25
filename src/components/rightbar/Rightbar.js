import './rightbar.css'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='/assets/gift.png' />
          <span className='birthdayText'>
            <b>Pola foster </b> <b>and 3 friends </b> have a birthday today.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
