import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Email: naftalykamonjo@student.moringaschool.com</span>
          <span>GitHub: Naf Ngeru</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer