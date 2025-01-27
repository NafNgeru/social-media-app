import React from 'react'
import ProfileCard from '../profileCard/ProfileCard'
import Post from '../post/Post'
import SuggestedUsers from '../suggestedUsers/SuggestedUsers'
import classes from './home.module.css'

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