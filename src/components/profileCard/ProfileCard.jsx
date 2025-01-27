import React from 'react'
import classes from './profileCard.module.css'
import profileUserImg from '../../assets/Man.jpeg'

const ProfileCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
      <h3 className={classes.myProfile}>My Profile</h3>
        <div className={classes.top}>
          <img src={profileUserImg} className={classes.profileUserImg} alt="See Yourself" />
          <div className={classes.usernameAndDateofCreation}>
            <p><b>Username:</b> Naf Ngeru</p>
            <p><b>Date of Creation:</b> January 2025</p>
          </div>
        </div>
        <div className={classes.bottom}>
          <p><b>Followers:</b> 4.1M</p>
          <p><b>Following:</b> 10</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard