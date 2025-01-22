import React from 'react'
import classes from './home.module.css'
import ProfileCard from '../profileCard/ProfileCard'
import Post from '../post/Post'
import SuggestedUsers from '../suggestedUsers/SuggestedUsers'

const Home = () => {
  return (
    <div className={classes.container}>
        <div className={classes.left}>
            <ProfileCard />
        </div>
        <Post />
        <SuggestedUsers />
    </div>
  )
}

export default Home