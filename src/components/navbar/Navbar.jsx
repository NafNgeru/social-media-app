import React from 'react'
import classes from './navbar.module.css'
import profileUserImg from '../../assets/Man.jpeg'

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h3><span>Nafgram</span></h3>
        </div>
        <div className={classes.centre}>
          <input type='text' placeholder='Search User'></input>
        </div>
        <div className={classes.right}>
          <img src={profileUserImg} className={classes.profileUserImg} alt="See Yourself" />
          <p>Online</p>
          <div className={classes.onlineDot} />
        </div>
      </div>
    </div>
  )
}

export default Navbar