import React from 'react'
import classes from './suggestedUsers.module.css'
import firstUserImg from '../../assets/Ray-Allen.jpg'
import secondUserImg from '../../assets/Mercy-Me.jpg'
import thridUserImg from '../../assets/Kamau.jpg'
import fourthUserImg from '../../assets/Mutisya.jpg'
import fifthUserImg from '../../assets/Mzee-Ochieng.jpg'
import sixthUserImg from '../../assets/Mary-Mary.jpg'

const SuggestedUsers = () => {
  return (
    <div className={classes.conntainer}>
      <div className={classes.wrapper}>
        <div className={classes.suggestionTitle}>
          <h2><b>Friends Suggestion:</b></h2>
        </div>
        <div className={classes.user}>
          <img src={firstUserImg} className={classes.profileUserImg} />
            <div className={classes.userData}>
              <span>Ray Allen</span>
            </div>
        </div>
                <div className={classes.user}>
                    <img src={secondUserImg} className={classes.profileUserImg} />
                    <div className={classes.userData}>
                        <span>Mercy Me</span>
                    </div>
                </div>
                <div className={classes.user}>
                    <img src={thridUserImg} className={classes.profileUserImg} />
                    <div className={classes.userData}>
                        <span>Kamau Kama Kawa</span>
                    </div>
                </div>
                <div className={classes.user}>
                    <img src={fourthUserImg} className={classes.profileUserImg} />
                    <div className={classes.userData}>
                        <span>Mutisya Museo</span>
                    </div>
                </div>
                <div className={classes.user}>
                    <img src={fifthUserImg} className={classes.profileUserImg} />
                    <div className={classes.userData}>
                        <span>Mzee Ochieng</span>
                    </div>
                </div>
                <div className={classes.user}>
                    <img src={sixthUserImg} className={classes.profileUserImg} />
                    <div className={classes.userData}>
                        <span>Mary Mary</span>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SuggestedUsers