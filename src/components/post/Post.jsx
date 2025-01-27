import React from 'react'
import classes from './post.module.css'
import profileUserImg from '../../assets/Man.jpeg'
import firstUserImg from '../../assets/Ray-Allen.jpg'
import secondUserImg from '../../assets/Mercy-Me.jpg'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiMessageRounded} from 'react-icons/bi'
import {BsBookmark} from 'react-icons/bs'

const Post = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
            <div className={classes.top}>
              <div className={classes.topLeft}>
              <img src={profileUserImg} className={classes.profileUserImg}/>
                <div className={classes.profileMetadata}>
                    <span>Naf Ngeru</span> <br/>
                    <span>1 day ago</span>
                </div>
              </div>
             <HiOutlineDotsVertical size={25}/>
            </div>
            <div className={classes.center}>
                <div className={classes.desc}>Proof of life! Smily face.</div>
                <img src={profileUserImg} className={classes.postImg} />
            </div>
            <div className={classes.controls}>
                <div className={classes.controlsLeft}>
                    <AiOutlineHeart />
                    <BiMessageRounded />
                </div>
                <div className={classes.controlsRight}>
                    <BsBookmark />
                </div>
            </div>
            <div className={classes.comments}>
                <div className={classes.comment}>
                    <div className={classes.commentLeft}>
                      <img src={firstUserImg} className={classes.commentImg}/>
                      <div className={classes.commentData}>
                        <span>Ray Allen</span>
                        <span className={classes.commentTimeago}>10 hours ago</span>
                      </div>
                      <div className={classes.commentText}>Looking good @Naf Ngeru!</div>
                    </div>
                    <div className={classes.commentRight}>
                        <AiOutlineHeart />
                        <span>5 likes</span>
                    </div>
                </div>
                <div className={classes.comment}>
                    <div className={classes.commentLeft}>
                      <img src={secondUserImg} className={classes.commentImg}/>
                      <div className={classes.commentData}>
                        <span>Mercy Me</span>
                        <span className={classes.commentTimeago}>4 hours ago</span>
                      </div>
                      <div className={classes.commentText}>Hey handsome!</div>
                    </div>
                    <div className={classes.commentRight}>
                        <AiOutlineHeart />
                        <span>12 likes</span>
                    </div>
                </div>
            </div>
            <div className={classes.postCommentSection}>
                <input type="text" className={classes.inputSection} placeholder='Type here...'/>
                <button>Post</button>
            </div>
        </div>
    </div>
  )
}

export default Post